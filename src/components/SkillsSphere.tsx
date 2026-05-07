import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Layered procedural core — no texture file needed
const CoreSphere = () => {
  const solidRef = useRef<THREE.Mesh>(null);
  const wire1Ref = useRef<THREE.Mesh>(null);
  const wire2Ref = useRef<THREE.Mesh>(null);
  const atmoRef  = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (wire1Ref.current) {
      wire1Ref.current.rotation.y += 0.005;
      wire1Ref.current.rotation.z += 0.003;
    }
    if (wire2Ref.current) {
      wire2Ref.current.rotation.y -= 0.004;
      wire2Ref.current.rotation.x += 0.004;
    }
    if (atmoRef.current) {
      const s = 1 + 0.03 * Math.sin(t * 0.8);
      atmoRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Solid dark metallic core */}
      <mesh ref={solidRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#04081a"
          emissive="#0a3060"
          emissiveIntensity={0.7}
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>

      {/* Sparse wireframe layer 1 — cyan */}
      <mesh ref={wire1Ref}>
        <sphereGeometry args={[2.04, 18, 18]} />
        <meshBasicMaterial wireframe color="#0a84ff" transparent opacity={0.22} />
      </mesh>

      {/* Dense wireframe layer 2 — teal, counter-rotating */}
      <mesh ref={wire2Ref}>
        <sphereGeometry args={[2.08, 28, 28]} />
        <meshBasicMaterial wireframe color="#30d5c8" transparent opacity={0.10} />
      </mesh>

      {/* Soft atmosphere glow */}
      <mesh ref={atmoRef}>
        <sphereGeometry args={[2.35, 32, 32]} />
        <meshBasicMaterial color="#0a84ff" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

// Skill label — glowing dot + text, always facing camera
const SkillPin = ({
  position,
  text,
  color,
}: {
  position: [number, number, number];
  text: string;
  color: string;
}) => {
  const textRef = useRef<THREE.Mesh>(null);
  const dotRef  = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame(({ camera, clock }) => {
    if (textRef.current) textRef.current.quaternion.copy(camera.quaternion);
    if (dotRef.current)  dotRef.current.quaternion.copy(camera.quaternion);
    if (haloRef.current) haloRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <group position={position}>
      {/* Glowing surface dot */}
      <mesh ref={dotRef}>
        <circleGeometry args={[0.07, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>

      {/* Soft halo ring around dot */}
      <mesh ref={haloRef}>
        <circleGeometry args={[0.14, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>

      {/* Skill name — offset slightly outward */}
      <Text
        ref={textRef}
        position={[0.22, 0, 0]}
        fontSize={0.30}
        color={color}
        anchorX="left"
        anchorY="middle"
        outlineWidth={0.025}
        outlineColor="#010510"
      >
        {text}
      </Text>
    </group>
  );
};

// Particle dots scattered around the sphere surface
const SurfaceParticles = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#0a84ff'),
      new THREE.Color('#30d5c8'),
      new THREE.Color('#bf5af2'),
      new THREE.Color('#34d399'),
    ];
    for (let i = 0; i < count; i++) {
      const r = 2.15 + Math.random() * 0.05;
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
    if (ref.current) ref.current.rotation.y += 0.003;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color"    count={200} array={colors}    itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
};

const SkillsCloud = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.006;
  });

  // Fibonacci sphere: perfectly uniform distribution of N points
  const skills = useMemo(() => {
    const raw: { text: string; color: string }[] = [
      // Programming
      { text: 'Python',          color: '#3B82F6' },
      { text: 'SQL',             color: '#06B6D4' },
      { text: 'R',               color: '#8B5CF6' },
      // ML
      { text: 'Machine Learning',color: '#10B981' },
      { text: 'XGBoost',         color: '#3B82F6' },
      { text: 'LightGBM',        color: '#34D399' },
      { text: 'Random Forest',   color: '#06B6D4' },
      { text: 'SVM',             color: '#8B5CF6' },
      { text: 'Sklearn',         color: '#10B981' },
      // AI / LLM
      { text: 'LangChain',       color: '#A78BFA' },
      { text: 'RAG',             color: '#F472B6' },
      { text: 'N8N',             color: '#A78BFA' },
      // Cloud / Big Data
      { text: 'Azure Databricks',color: '#EF4444' },
      { text: 'Data Factory',    color: '#EF4444' },
      { text: 'Snowflake',       color: '#38BDF8' },
      { text: 'PySpark',         color: '#3B82F6' },
      { text: 'Airflow',         color: '#34D399' },
      { text: 'dbt',             color: '#FB923C' },
      { text: 'Data Lake Gen2',  color: '#06B6D4' },
      // BI / Viz
      { text: 'Power BI',        color: '#F59E0B' },
      { text: 'Tableau',         color: '#FBBF24' },
      // Python libs
      { text: 'Pandas',          color: '#F97316' },
      { text: 'NumPy',           color: '#3B82F6' },
    ];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const r = 3.7;

    return raw.map((s, i) => {
      const iNorm  = (i + 0.5) / raw.length;
      const theta  = 2 * Math.PI * i / goldenRatio;
      const phi    = Math.acos(1 - 2 * iNorm);
      return {
        ...s,
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ] as [number, number, number],
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {skills.map((s, i) => (
        <SkillPin key={i} position={s.position} text={s.text} color={s.color} />
      ))}
    </group>
  );
};

export const SkillsSphere = () => (
  <div className="w-full md:w-3/4 mx-auto h-[520px] bg-transparent">
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={1.0} />
        <pointLight position={[-10, -10, -10]} intensity={0.65} color="#8B5CF6" />
        <pointLight position={[0, 8, 5]} intensity={0.5} color="#0a84ff" />
        <CoreSphere />
        <SurfaceParticles />
        <SkillsCloud />
        <OrbitControls
          enableZoom
          autoRotate
          autoRotateSpeed={1.0}
          enablePan={false}
          minDistance={7}
          maxDistance={14}
        />
      </Suspense>
    </Canvas>
  </div>
);
