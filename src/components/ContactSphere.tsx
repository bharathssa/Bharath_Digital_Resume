import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei'; 
import { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const FloatingIcon = ({
  position,
  text,
  color,
  icon,
}: {
  position: [number, number, number];
  text: string;
  color: string;
  icon: string;
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const iconRef = useRef<THREE.Mesh>(null);
  const labelRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ camera, clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y += Math.sin(clock.elapsedTime + position[0]) * 0.05;
    }
    if (iconRef.current) iconRef.current.quaternion.copy(camera.quaternion);
    if (labelRef.current) labelRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.4 : 1.2}
    >
      <mesh>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>

      <Text
        ref={iconRef}
        position={[0, 0, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>

      <Text
        ref={labelRef}
        position={[0, -1.1, 0]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {text}
      </Text>

      <mesh>
        <sphereGeometry args={[0.8]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const NestedSphereSystem = () => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null); // ✅ added ref
  const zoomRef = useRef<number>(0); // ✅ for tracking zoom animation
  const innerGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const orbitingSpheresRef = useRef<THREE.Group>(null);
  const contactTexture = useLoader(TextureLoader,'contact_globe.png');

  useFrame(() => {
    // ✅ zoom effect on outer big sphere only
    if (outerSphereRef.current) {
      zoomRef.current += 0.01;
      const scale = 1 + 0.5 * Math.sin(zoomRef.current); // scales between 0.5x to 1.5x
      outerSphereRef.current.scale.set(scale, scale, scale);
    }

    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y += 0.008;
      outerGroupRef.current.rotation.x += 0.003;
    }
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y -= 0.012;
      innerGroupRef.current.rotation.z += 0.005;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += 0.015;
      coreRef.current.rotation.y += 0.02;
    }
    if (orbitingSpheresRef.current) {
      orbitingSpheresRef.current.rotation.y += 0.03;
      orbitingSpheresRef.current.rotation.x += 0.01;
    }
  });

  const contactItems = [
    { text: 'Email', position: [3.2, 0, 0], color: '#06B6D4', icon: '✉' },
    { text: 'LinkedIn', position: [-3.2, 0, 0], color: '#0A66C2', icon: '💼' },
    { text: 'GitHub', position: [0, 3.2, 0], color: '#8B5CF6', icon: '💻' },
    { text: 'Phone', position: [0, -3.2, 0], color: '#10B981', icon: '📞' },
    { text: 'Location', position: [2.3, 2.3, 0], color: '#F59E0B', icon: '📍' },
    { text: 'Projects', position: [-2.3, -2.3, 0], color: '#EF4444', icon: '🚀' },
  ];

  return (
    <group ref={outerGroupRef}>
      <mesh ref={outerSphereRef}> {/* ✅ zoom target */}
        <sphereGeometry args={[4.2, 24, 24]} />
        <meshBasicMaterial wireframe color="#06B6D4" transparent opacity={0.08} />
      </mesh>

      <group ref={innerGroupRef}>
        <mesh>
          <sphereGeometry args={[3.4, 20, 20]} />
          <meshBasicMaterial wireframe color="#8B5CF6" transparent opacity={0.12} />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.8, 3.0, 40]} />
          <meshBasicMaterial
            color="#3B82F6"
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 3]}>
          <ringGeometry args={[2.5, 2.7, 40]} />
          <meshBasicMaterial
            color="#10B981"
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <mesh ref={coreRef}>
        <sphereGeometry args={[2.0, 32, 32]} />
        <meshStandardMaterial
          map={contactTexture}
          transparent
          opacity={1}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {contactItems.map((item, index) => (
        <FloatingIcon
          key={index}
          position={item.position as [number, number, number]}
          text={item.text}
          color={item.color}
          icon={item.icon}
        />
      ))}

      <group ref={orbitingSpheresRef}>
        {Array.from({ length: 40 }, (_, i) => {
          const radius = 5 + Math.random() * 2;
          const theta = (i / 40) * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <mesh key={i} position={[x, y, z] as [number, number, number]}>
              <sphereGeometry args={[0.08]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#8B5CF6' : '#10B981'}
                transparent
                opacity={0.8}
                emissive={i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#8B5CF6' : '#10B981'}
                emissiveIntensity={0.3}
              />
            </mesh>
          );
        })}
      </group>

      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#06B6D4" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8B5CF6" />
    </group>
  );
};

export const ContactSphere = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto h-[500px]">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
          <pointLight position={[0, 0, 15]} intensity={0.6} color="#06B6D4" />
          <NestedSphereSystem />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};
