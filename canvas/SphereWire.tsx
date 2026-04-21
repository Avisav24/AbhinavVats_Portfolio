"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/lib/useMousePosition";

function WiredSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const position = useMousePosition();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;

      // Slight parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        position.x * 0.2,
        0.1,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        position.y * 0.2,
        0.1,
      );
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color="#1A1908"
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
    </mesh>
  );
}

export default function SphereWire({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas frameloop="always" camera={{ position: [0, 0, 5], fov: 45 }}>
        <WiredSphere />
      </Canvas>
    </div>
  );
}
