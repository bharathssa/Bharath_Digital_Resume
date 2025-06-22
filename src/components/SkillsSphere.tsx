
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

const GolfBallSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
      groupRef.current.rotation.x += 0.003;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= 0.01;
      innerSphereRef.current.rotation.z += 0.005;
    }
  });

  const skills = [
    { text: "Python", position: [2.5, 1, 1] as [number, number, number], color: "#3B82F6" },
    { text: "TensorFlow", position: [-2.5, 1, -1] as [number, number, number], color: "#8B5CF6" },
    { text: "SQL", position: [1, -2.5, 1] as [number, number, number], color: "#06B6D4" },
    { text: "Power BI", position: [-1, -1, 2.5] as [number, number, number], color: "#F59E0B" },
    { text: "Azure", position: [2.5, -1, -1] as [number, number, number], color: "#EF4444" },
    { text: "Machine Learning", position: [-2.5, 0, 1] as [number, number, number], color: "#10B981" },
    { text: "Pandas", position: [1, 2.5, -1] as [number, number, number], color: "#F97316" },
    { text: "React", position: [-1, 2.5, 1] as [number, number, number], color: "#3B82F6" },
    { text: "NumPy", position: [0, -2.5, -2] as [number, number, number], color: "#8B5CF6" },
    { text: "Sklearn", position: [2.5, 0, 2] as [number, number, number], color: "#06B6D4" },
    { text: "Django", position: [-2, -2, 0] as [number, number, number], color: "#22C55E" },
    { text: "JavaScript", position: [0, 0, 2.5] as [number, number, number], color: "#FBBF24" },
  ];

  console.log("GolfBallSphere component rendered with", skills.length, "skills");

  return (
    <group ref={groupRef}>
      {/* Outer wireframe sphere with golf ball texture */}
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial wireframe color="#06B6D4" transparent opacity={0.15} />
      </mesh>
      
      {/* Inner textured sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[2.8, 24, 24]} />
        <meshBasicMaterial wireframe color="#3B82F6" transparent opacity={0.1} />
      </mesh>
      
      {/* Golf ball dimple effect with small spheres */}
      {Array.from({ length: 50 }, (_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 50);
        const theta = Math.sqrt(50 * Math.PI) * phi;
        const x = 3 * Math.cos(theta) * Math.sin(phi);
        const y = 3 * Math.sin(theta) * Math.sin(phi);
        const z = 3 * Math.cos(phi);
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial color="#8B5CF6" transparent opacity={0.3} />
          </mesh>
        );
      })}
      
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
  console.log("SkillsSphere component rendered");
  
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <GolfBallSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
