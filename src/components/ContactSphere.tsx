import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { useRef, useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

// Three independently rotating rings — gyroscope effect
const GyroRings = () => {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (r1.current) r1.current.rotation.z += 0.007;
    if (r2.current) r2.current.rotation.x += 0.005;
    if (r3.current) r3.current.rotation.y += 0.009;
  });

  return (
    <group>
      <mesh ref={r1} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.85, 3.05, 80]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.45} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={r2} rotation={[0, 0, Math.PI / 3]}>
        <ringGeometry args={[2.55, 2.72, 80]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.40} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={r3} rotation={[0, 0, -Math.PI / 4]}>
        <ringGeometry args={[3.15, 3.32, 80]} />
        <meshBasicMaterial color="#10B981" transparent opacity={0.30} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// A contact satellite that gently floats at its base position without drifting
const ContactNode = ({
  basePosition,
  label,
  color,
  symbol,
}: {
  basePosition: [number, number, number];
  label: string;
  color: string;
  symbol: string;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const symRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const base = useMemo(() => new THREE.Vector3(...basePosition), [basePosition]);

  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      // Gentle float — absolute offset from base so it never drifts
      groupRef.current.position.set(
        base.x + Math.sin(t * 0.55 + base.z) * 0.14,
        base.y + Math.sin(t * 0.70 + base.x) * 0.20,
        base.z + Math.cos(t * 0.45 + base.y) * 0.14,
      );
    }
    // Billboard: always face the camera
    if (textRef.current) textRef.current.quaternion.copy(camera.quaternion);
    if (symRef.current) symRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Glow core */}
      <mesh scale={hovered ? 1.35 : 1}>
        <sphereGeometry args={[0.42, 28, 28]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.0 : 0.35}
          transparent
          opacity={0.75}
        />
      </mesh>
      {/* Soft outer halo */}
      <mesh scale={hovered ? 1.6 : 1.2}>
        <sphereGeometry args={[0.52, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>
      {/* Symbol */}
      <Text
        ref={symRef}
        fontSize={0.22}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
      {/* Label */}
      <Text
        ref={textRef}
        position={[0, -0.72, 0]}
        fontSize={0.19}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.025}
        outlineColor="#020408"
      >
        {label}
      </Text>
    </group>
  );
};

// Particle constellation shell
const StarField = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 150;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#06B6D4'),
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#10B981'),
      new THREE.Color('#3B82F6'),
    ];
    for (let i = 0; i < count; i++) {
      const r = 5.8 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[i % palette.length];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={150} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={150} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.055} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
};

const Scene = () => {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const atmoRef = useRef<THREE.Mesh>(null);
  const contactTexture = useLoader(TextureLoader, 'contact_globe.png');

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (outerRef.current) {
      outerRef.current.rotation.y += 0.004;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= 0.007;
      innerRef.current.rotation.z += 0.003;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.010;
    }
    // Soft atmosphere pulse
    if (atmoRef.current) {
      const s = 1 + 0.025 * Math.sin(t * 0.9);
      atmoRef.current.scale.setScalar(s);
    }
  });

  // Octahedron vertices — perfectly spread in 3D
  const nodes = [
    { basePosition: [ 3.6,  0,    0  ] as [number,number,number], label: 'Email',      color: '#06B6D4', symbol: '@'  },
    { basePosition: [-3.6,  0,    0  ] as [number,number,number], label: 'LinkedIn',   color: '#0A66C2', symbol: 'in' },
    { basePosition: [ 0,    3.6,  0  ] as [number,number,number], label: 'GitHub',     color: '#8B5CF6', symbol: '<>' },
    { basePosition: [ 0,   -3.6,  0  ] as [number,number,number], label: 'Auckland NZ',color: '#10B981', symbol: 'NZ' },
    { basePosition: [ 0,    0,    3.6] as [number,number,number], label: 'Kaggle',     color: '#F59E0B', symbol: 'K'  },
    { basePosition: [ 0,    0,   -3.6] as [number,number,number], label: 'HackerRank', color: '#34D399', symbol: 'HR' },
  ];

  return (
    <group>
      {/* Outer wireframe shell — static scale, no more pulsing */}
      <group ref={outerRef}>
        <mesh>
          <sphereGeometry args={[4.3, 24, 24]} />
          <meshBasicMaterial wireframe color="#06B6D4" transparent opacity={0.055} />
        </mesh>
      </group>

      {/* Counter-rotating inner shell */}
      <group ref={innerRef}>
        <mesh>
          <sphereGeometry args={[3.5, 20, 20]} />
          <meshBasicMaterial wireframe color="#8B5CF6" transparent opacity={0.07} />
        </mesh>
      </group>

      {/* Gyroscope orbital rings */}
      <GyroRings />

      {/* Textured globe */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[2.0, 48, 48]} />
        <meshStandardMaterial map={contactTexture} metalness={0.4} roughness={0.35} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmoRef}>
        <sphereGeometry args={[2.22, 32, 32]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>

      {/* Contact satellites */}
      {nodes.map((n, i) => (
        <ContactNode key={i} {...n} />
      ))}

      {/* Particle starfield */}
      <StarField />

      {/* Lighting */}
      <pointLight position={[0, 0, 0]} intensity={0.6} color="#ffffff" />
      <pointLight position={[6, 6, 6]} intensity={0.4} color="#06B6D4" />
      <pointLight position={[-6, -6, -6]} intensity={0.35} color="#8B5CF6" />
    </group>
  );
};

export const ContactSphere = () => (
  <div className="w-full md:w-2/3 mx-auto h-[500px]">
    <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[0, 0, 15]} intensity={0.5} color="#06B6D4" />
        <Scene />
        <OrbitControls
          enableZoom
          minDistance={7}
          maxDistance={18}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  </div>
);
