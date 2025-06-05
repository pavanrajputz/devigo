
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Float, Stars, Environment, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function InteractiveOrb({ position }: any) {
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
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial
          color={clicked ? "#ffffff" : hovered ? "#8b5cf6" : "#3b82f6"}
          attach="material"
          distort={hovered ? 0.4 : 0.2}
          speed={hovered ? 3 : 1}
          roughness={0.1}
          metalness={0.8}
          emissive={clicked ? "#3b82f6" : hovered ? "#1e40af" : "#000000"}
          emissiveIntensity={clicked ? 0.5 : hovered ? 0.3 : 0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus args={[2, 0.1, 16, 100]} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} emissive="#8b5cf6" emissiveIntensity={0.2} />
      </Torus>
      <Torus args={[2.5, 0.05, 16, 100]} position={[0, 0, 0]} rotation={[1, 0.5, 0]}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} emissive="#06b6d4" emissiveIntensity={0.1} />
      </Torus>
      <Torus args={[3, 0.03, 16, 100]} position={[0, 0, 0]} rotation={[0, 1, 0.5]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} emissive="#3b82f6" emissiveIntensity={0.1} />
      </Torus>
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#ffffff" 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

function GlowingSphere({ position, color, scale = 1 }: any) {
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
      <sphereGeometry args={[0.3, 32, 32]} />
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
        <spotLight 
          position={[0, 0, 10]} 
          intensity={0.5} 
          angle={0.3} 
          penumbra={0.5} 
          color="#3b82f6"
          target-position={[0, 0, 0]}
        />
        
        {/* Environment and stars */}
        <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade />
        <Environment preset="night" />
        
        {/* Main interactive orb */}
        <InteractiveOrb position={[0, 0, 0]} />
        
        {/* Floating rings around the main orb */}
        <FloatingRings />
        
        {/* Particle field */}
        <ParticleField />
        <Sparkles count={100} scale={10} size={3} speed={0.4} opacity={0.6} color="#ffffff" />
        
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
