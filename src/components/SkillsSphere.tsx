
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

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
      fontSize={0.2}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/inter-bold.woff"
    >
      {text}
    </Text>
  );
};

const RotatingSphere = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  const skills = [
    { text: "Python", position: [2, 1, 1], color: "#3B82F6" },
    { text: "TensorFlow", position: [-2, 1, -1], color: "#8B5CF6" },
    { text: "SQL", position: [1, -2, 1], color: "#06B6D4" },
    { text: "Power BI", position: [-1, -1, 2], color: "#F59E0B" },
    { text: "Azure", position: [2, -1, -1], color: "#EF4444" },
    { text: "Machine Learning", position: [-2, 0, 1], color: "#10B981" },
    { text: "Pandas", position: [1, 2, -1], color: "#F97316" },
    { text: "React", position: [-1, 2, 1], color: "#3B82F6" },
    { text: "NumPy", position: [0, -2, -2], color: "#8B5CF6" },
    { text: "Sklearn", position: [2, 0, 2], color: "#06B6D4" },
  ] as const;

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[3, 16, 16]} />
        <meshBasicMaterial wireframe color="#3B82F6" transparent opacity={0.2} />
      </mesh>
      
      {/* Skills text */}
      {skills.map((skill, index) => (
        <SkillsText
          key={index}
          position={skill.position}
          text={skill.text}
          color={skill.color}
        />
      ))}
    </group>
  );
};

export const SkillsSphere = () => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};
