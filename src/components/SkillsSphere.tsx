import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';



const SkillsText = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.4}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

const RotatingGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, "globe.png");

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} />
    </mesh>
  );
};

const SkillsCloud = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const skills: { text: string; position: [number, number, number]; color: string }[] = [
    { text: 'Python', position: [3.5, 1.2, 1.2], color: '#3B82F6' },
    { text: 'SPSS', position: [-3.5, 1.2, -1.2], color: '#8B5CF6' },
    { text: 'SQL', position: [1.2, -3.5, 1.2], color: '#06B6D4' },
    { text: 'Power BI', position: [-1.2, -1.2, 3.5], color: '#F59E0B' },
    { text: 'Azure', position: [3.5, -1.2, -1.2], color: '#EF4444' },
    { text: 'Machine Learning', position: [-3.5, 0, 1.2], color: '#10B981' },
    { text: 'Pandas', position: [1.2, 3.5, -1.2], color: '#F97316' },
    { text: 'Pyspark', position: [-1.2, 3.5, 1.2], color: '#3B82F6' },
    { text: 'NumPy', position: [0, -3.5, -2.5], color: '#8B5CF6' },
    { text: 'Sklearn', position: [3.5, 0, 2.5], color: '#06B6D4' },
    { text: 'Big Data', position: [0, 0, 4], color: '#FBBF24' }
  ];

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillsText key={i} position={skill.position} text={skill.text} color={skill.color} />
      ))}
    </group>
  );
};

export const SkillsSphere = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto h-[500px] bg-transparent">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
          <RotatingGlobe />
          <SkillsCloud />
          <OrbitControls enableZoom autoRotate autoRotateSpeed={1.5} enablePan={false} minDistance={8} maxDistance={12} />
        </Suspense>
      </Canvas>
    </div>
  );
};
