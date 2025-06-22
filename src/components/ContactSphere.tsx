
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
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.05;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.4 : 1.2}
    >
      {/* Main sphere - bigger size */}
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
      
      {/* Icon */}
      <Text
        position={[0, 0, 0.62]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
      
      {/* Text label - bigger font */}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.25}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {text}
      </Text>
      
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[0.8]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

const NestedSphereSystem = () => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const orbitingSpheresRef = useRef<THREE.Group>(null);

  useFrame(() => {
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
    { text: "Email", position: [3.2, 0, 0] as [number, number, number], color: "#06B6D4", icon: "✉" },
    { text: "LinkedIn", position: [-3.2, 0, 0] as [number, number, number], color: "#0A66C2", icon: "💼" },
    { text: "GitHub", position: [0, 3.2, 0] as [number, number, number], color: "#8B5CF6", icon: "💻" },
    { text: "Phone", position: [0, -3.2, 0] as [number, number, number], color: "#10B981", icon: "📞" },
    { text: "Location", position: [2.3, 2.3, 0] as [number, number, number], color: "#F59E0B", icon: "📍" },
    { text: "Projects", position: [-2.3, -2.3, 0] as [number, number, number], color: "#EF4444", icon: "🚀" },
  ];

  console.log("NestedSphereSystem rendered with", contactItems.length, "contact items");

  return (
    <group ref={outerGroupRef}>
      {/* Outermost wireframe sphere */}
      <mesh>
        <sphereGeometry args={[4.2, 24, 24]} />
        <meshBasicMaterial wireframe={false} color="#06B6D4" transparent opacity={0.08} />
      </mesh>
      
      {/* Middle rotating sphere system */}
      <group ref={innerGroupRef}>
        <mesh>
          <sphereGeometry args={[3.4, 20, 20]} />
          <meshBasicMaterial wireframe={false} color="#8B5CF6" transparent opacity={0.12} />
        </mesh>
        
        {/* Inner decorative rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.8, 3.0, 40]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
        
        <mesh rotation={[0, 0, Math.PI / 3]}>
          <ringGeometry args={[2.5, 2.7, 40]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.35} side={THREE.DoubleSide} />
        </mesh>
      </group>
      
      {/* Core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[2.0, 16, 16]} />
        <meshStandardMaterial 
          color="#F59E0B" 
          transparent 
          opacity={0.3}
          emissive="#F59E0B"
          emissiveIntensity={0.1}
        />
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
      
      {/* Orbiting spheres - bigger and more attractive */}
      <group ref={orbitingSpheresRef}>
        {Array.from({ length: 40 }, (_, i) => {
          const radius = 5 + Math.random() * 2;
          const theta = (i / 40) * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);
          
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.08]} />
              <meshStandardMaterial 
                color={i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#8B5CF6" : "#10B981"} 
                transparent 
                opacity={0.8}
                emissive={i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#8B5CF6" : "#10B981"}
                emissiveIntensity={0.3}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Additional light effects */}
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#06B6D4" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8B5CF6" />
    </group>
  );
};

export const ContactSphere = () => {
  console.log("ContactSphere component rendered");
  
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[0, 0, 15]} intensity={0.6} color="#06B6D4" />
        <NestedSphereSystem />
      </Canvas>
    </div>
  );
};
