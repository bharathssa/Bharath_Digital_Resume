
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
      fontSize={0.25}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/inter-bold.woff"
    >
      {text}
    </Text>
  );
};

const GolfBallSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const dimpleGroupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.005;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= 0.015;
      innerSphereRef.current.rotation.z += 0.008;
    }
    if (dimpleGroupRef.current) {
      dimpleGroupRef.current.rotation.x += 0.003;
      dimpleGroupRef.current.rotation.z -= 0.005;
    }
  });

  const skills = [
    { text: "Python", position: [3.2, 1.2, 1.2] as [number, number, number], color: "#3B82F6" },
    { text: "TensorFlow", position: [-3.2, 1.2, -1.2] as [number, number, number], color: "#8B5CF6" },
    { text: "SQL", position: [1.2, -3.2, 1.2] as [number, number, number], color: "#06B6D4" },
    { text: "Power BI", position: [-1.2, -1.2, 3.2] as [number, number, number], color: "#F59E0B" },
    { text: "Azure", position: [3.2, -1.2, -1.2] as [number, number, number], color: "#EF4444" },
    { text: "Machine Learning", position: [-3.2, 0, 1.2] as [number, number, number], color: "#10B981" },
    { text: "Pandas", position: [1.2, 3.2, -1.2] as [number, number, number], color: "#F97316" },
    { text: "React", position: [-1.2, 3.2, 1.2] as [number, number, number], color: "#3B82F6" },
    { text: "NumPy", position: [0, -3.2, -2.5] as [number, number, number], color: "#8B5CF6" },
    { text: "Sklearn", position: [3.2, 0, 2.5] as [number, number, number], color: "#06B6D4" },
    { text: "Django", position: [-2.5, -2.5, 0] as [number, number, number], color: "#22C55E" },
    { text: "JavaScript", position: [0, 0, 3.5] as [number, number, number], color: "#FBBF24" },
  ];

  console.log("GolfBallSphere component rendered with", skills.length, "skills");

  return (
    <group ref={groupRef}>
      {/* Outer wireframe sphere */}
      <mesh>
        <sphereGeometry args={[4.0, 32, 32]} />
        <meshBasicMaterial wireframe={false} color="#06B6D4" transparent opacity={0.1} />
      </mesh>
      
      {/* Main golf ball sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshStandardMaterial 
          color="#1e293b" 
          transparent 
          opacity={0.8}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Golf ball dimple effect with enhanced visibility */}
      <group ref={dimpleGroupRef}>
        {Array.from({ length: 80 }, (_, i) => {
          const phi = Math.acos(-1 + (2 * i) / 80);
          const theta = Math.sqrt(80 * Math.PI) * phi;
          const radius = 3.6;
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);
          
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.08]} />
              <meshStandardMaterial 
                color={i % 4 === 0 ? "#8B5CF6" : i % 4 === 1 ? "#06B6D4" : i % 4 === 2 ? "#10B981" : "#F59E0B"} 
                transparent 
                opacity={0.6}
                emissive={i % 4 === 0 ? "#8B5CF6" : i % 4 === 1 ? "#06B6D4" : i % 4 === 2 ? "#10B981" : "#F59E0B"}
                emissiveIntensity={0.2}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Skills text */}
      {skills.map((skill, index) => (
        <SkillsText
          key={index}
          position={skill.position}
          text={skill.text}
          color={skill.color}
        />
      ))}
      
      {/* Additional lighting effects */}
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
    </group>
  );
};

export const SkillsSphere = () => {
  console.log("SkillsSphere component rendered");
  
  return (
    <div className="h-[500px] w-full bg-gradient-to-b from-slate-800/10 to-slate-900/20 rounded-xl">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[0, 15, 0]} intensity={0.6} color="#06B6D4" />
        <GolfBallSphere />
        <OrbitControls 
          enableZoom={true} 
          autoRotate 
          autoRotateSpeed={1} 
          enablePan={false}
          minDistance={8}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};
