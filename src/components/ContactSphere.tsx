
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const FloatingIcon = ({ position, text, color, icon }: { 
  position: [number, number, number], 
  text: string, 
  color: string,
  icon: string 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.02;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <Sphere args={[0.3]} material-color={color} material-transparent material-opacity={0.8} />
      <Text
        position={[0, 0, 0.31]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const ContactSphereScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const contactItems = [
    { text: "Email", position: [2, 0, 0], color: "#3B82F6", icon: "✉" },
    { text: "LinkedIn", position: [-2, 0, 0], color: "#0A66C2", icon: "💼" },
    { text: "GitHub", position: [0, 2, 0], color: "#8B5CF6", icon: "💻" },
    { text: "Phone", position: [0, -2, 0], color: "#10B981", icon: "📞" },
    { text: "Location", position: [1.4, 1.4, 0], color: "#F59E0B", icon: "📍" },
    { text: "Projects", position: [-1.4, -1.4, 0], color: "#EF4444", icon: "🚀" },
  ] as const;

  return (
    <group ref={groupRef}>
      {/* Central wireframe sphere */}
      <Sphere args={[3, 16, 16]}>
        <meshBasicMaterial wireframe color="#3B82F6" transparent opacity={0.1} />
      </Sphere>
      
      {/* Contact items */}
      {contactItems.map((item, index) => (
        <FloatingIcon
          key={index}
          position={item.position}
          text={item.text}
          color={item.color}
          icon={item.icon}
        />
      ))}
    </group>
  );
};

export const ContactSphere = () => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ContactSphereScene />
      </Canvas>
    </div>
  );
};
