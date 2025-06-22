
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
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
      meshRef.current.rotation.y += 0.015;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.03;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.3 : 1}
    >
      <mesh>
        <sphereGeometry args={[0.35]} />
        <meshStandardMaterial color={color} transparent opacity={0.9} />
      </mesh>
      <Text
        position={[0, 0, 0.36]}
        fontSize={0.35}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
      <Text
        position={[0, -0.9, 0]}
        fontSize={0.16}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const NestedSphereSystem = () => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y += 0.005;
      outerGroupRef.current.rotation.x += 0.002;
    }
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y -= 0.008;
      innerGroupRef.current.rotation.z += 0.003;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += 0.01;
      coreRef.current.rotation.y += 0.015;
    }
  });

  const contactItems = [
    { text: "Email", position: [2.5, 0, 0] as [number, number, number], color: "#06B6D4", icon: "✉" },
    { text: "LinkedIn", position: [-2.5, 0, 0] as [number, number, number], color: "#0A66C2", icon: "💼" },
    { text: "GitHub", position: [0, 2.5, 0] as [number, number, number], color: "#8B5CF6", icon: "💻" },
    { text: "Phone", position: [0, -2.5, 0] as [number, number, number], color: "#10B981", icon: "📞" },
    { text: "Location", position: [1.8, 1.8, 0] as [number, number, number], color: "#F59E0B", icon: "📍" },
    { text: "Projects", position: [-1.8, -1.8, 0] as [number, number, number], color: "#EF4444", icon: "🚀" },
  ];

  console.log("NestedSphereSystem rendered with", contactItems.length, "contact items");

  return (
    <group ref={outerGroupRef}>
      {/* Outermost wireframe sphere */}
      <mesh>
        <sphereGeometry args={[3.5, 20, 20]} />
        <meshBasicMaterial wireframe color="#06B6D4" transparent opacity={0.15} />
      </mesh>
      
      {/* Middle rotating sphere system */}
      <group ref={innerGroupRef}>
        <mesh>
          <sphereGeometry args={[2.8, 16, 16]} />
          <meshBasicMaterial wireframe color="#8B5CF6" transparent opacity={0.2} />
        </mesh>
        
        {/* Inner decorative rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.2, 2.4, 32]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
        
        <mesh rotation={[0, 0, Math.PI / 3]}>
          <ringGeometry args={[2.0, 2.2, 32]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
      </group>
      
      {/* Core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.5, 12, 12]} />
        <meshBasicMaterial wireframe color="#F59E0B" transparent opacity={0.4} />
      </mesh>
      
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
      
      {/* Particle effects */}
      {Array.from({ length: 30 }, (_, i) => {
        const radius = 4 + Math.random() * 2;
        const theta = (i / 30) * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
};

export const ContactSphere = () => {
  console.log("ContactSphere component rendered");
  
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[0, 0, 15]} intensity={0.3} color="#06B6D4" />
        <NestedSphereSystem />
      </Canvas>
    </div>
  );
};
