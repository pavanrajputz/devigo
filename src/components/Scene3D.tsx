
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function InteractiveOrb({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
      
      // Floating effect
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      
      // Scale pulsing
      const scale = clicked ? 1.3 : hovered ? 1.1 : 1;
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color={clicked ? "#ffffff" : hovered ? "#8b5cf6" : "#3b82f6"}
        emissive={clicked ? "#3b82f6" : hovered ? "#1e40af" : "#000000"}
        emissiveIntensity={clicked ? 0.5 : hovered ? 0.3 : 0.1}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} emissive="#8b5cf6" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[1, 0.5, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} emissive="#06b6d4" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 1, 0.5]}>
        <torusGeometry args={[3, 0.03, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} emissive="#3b82f6" emissiveIntensity={0.1} />
      </mesh>
    </group>
  );
}

function GlowingSphere({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.01;
      
      const pulsing = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale * pulsing);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#06b6d4" />
        
        {/* Environment and stars */}
        <Stars radius={300} depth={60} count={1000} factor={4} saturation={0} fade speed={0.5} />
        <Environment preset="night" />
        
        {/* Main interactive orb */}
        <InteractiveOrb position={[0, 0, 0]} />
        
        {/* Floating rings around the main orb */}
        <FloatingRings />
        
        {/* Additional glowing spheres */}
        <GlowingSphere position={[-4, 2, -2]} color="#8b5cf6" scale={0.8} />
        <GlowingSphere position={[4, -2, -3]} color="#06b6d4" scale={0.6} />
        <GlowingSphere position={[-2, -3, 2]} color="#3b82f6" scale={0.7} />
        <GlowingSphere position={[3, 3, -1]} color="#f59e0b" scale={0.5} />
        
        {/* Interactive controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          maxDistance={15}
          minDistance={5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
