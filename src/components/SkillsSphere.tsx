import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

const CoreSphere = () => {
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
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#04081a"
          emissive="#0a3060"
          emissiveIntensity={0.7}
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>
      <mesh ref={wire1Ref}>
        <sphereGeometry args={[2.04, 18, 18]} />
        <meshBasicMaterial wireframe color="#0a84ff" transparent opacity={0.22} />
      </mesh>
      <mesh ref={wire2Ref}>
        <sphereGeometry args={[2.08, 28, 28]} />
        <meshBasicMaterial wireframe color="#30d5c8" transparent opacity={0.10} />
      </mesh>
      <mesh ref={atmoRef}>
        <sphereGeometry args={[2.35, 32, 32]} />
        <meshBasicMaterial color="#0a84ff" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

// Use Html (DOM overlay) for text — guaranteed readable, never mirrored
const SkillPin = ({
  position,
  text,
  color,
}: {
  position: [number, number, number];
  text: string;
  color: string;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ camera }) => {
    if (!groupRef.current) return;
    const worldPos = new THREE.Vector3();
    groupRef.current.getWorldPosition(worldPos);
    // Hide labels that face away from the camera
    const facing = worldPos.normalize().dot(camera.position.clone().normalize());
    groupRef.current.visible = facing > 0.12;
  });

  return (
    <group ref={groupRef} position={position}>
      <Html distanceFactor={12} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
          <div style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 7px 2px ${color}88`,
            flexShrink: 0,
          }} />
          <span style={{
            color,
            fontSize: '11px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            fontWeight: '600',
            textShadow: '0 1px 6px rgba(0,0,0,0.95), 0 0 2px rgba(0,0,0,1)',
            letterSpacing: '0.01em',
          }}>
            {text}
          </span>
        </div>
      </Html>
    </group>
  );
};

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

  useFrame(() => { if (ref.current) ref.current.rotation.y += 0.003; });

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
  useFrame(() => { if (groupRef.current) groupRef.current.rotation.y += 0.006; });

  const skills = useMemo(() => {
    const raw: { text: string; color: string }[] = [
      { text: 'Python',           color: '#60A5FA' },
      { text: 'SQL',              color: '#22D3EE' },
      { text: 'R',                color: '#A78BFA' },
      { text: 'Machine Learning', color: '#34D399' },
      { text: 'XGBoost',          color: '#60A5FA' },
      { text: 'LightGBM',         color: '#6EE7B7' },
      { text: 'Random Forest',    color: '#22D3EE' },
      { text: 'SVM',              color: '#A78BFA' },
      { text: 'Sklearn',          color: '#34D399' },
      { text: 'LangChain',        color: '#C4B5FD' },
      { text: 'RAG',              color: '#F9A8D4' },
      { text: 'N8N',              color: '#C4B5FD' },
      { text: 'Azure Databricks', color: '#FCA5A5' },
      { text: 'Data Factory',     color: '#FCA5A5' },
      { text: 'Snowflake',        color: '#7DD3FC' },
      { text: 'PySpark',          color: '#60A5FA' },
      { text: 'Airflow',          color: '#6EE7B7' },
      { text: 'dbt',              color: '#FDBA74' },
      { text: 'Data Lake Gen2',   color: '#22D3EE' },
      { text: 'Power BI',         color: '#FCD34D' },
      { text: 'Tableau',          color: '#FDE68A' },
      { text: 'Pandas',           color: '#FB923C' },
      { text: 'NumPy',            color: '#60A5FA' },
    ];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const r = 3.7;
    return raw.map((s, i) => {
      const iNorm = (i + 0.5) / raw.length;
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi   = Math.acos(1 - 2 * iNorm);
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
