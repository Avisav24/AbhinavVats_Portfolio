"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

export default function AboutTorus({ className }: { className?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP((ctx) => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (meshRef.current) {
          meshRef.current.rotation.x = self.progress * Math.PI * 2;
          meshRef.current.rotation.y = self.progress * Math.PI * 1.5;
        }
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.32, 128, 32]} />
          <meshPhysicalMaterial
            color="#C8A96E"
            metalness={0.35}
            roughness={0.12}
            clearcoat={0.8}
            envMapIntensity={1.5}
          />
        </mesh>

        <ContactShadows opacity={0.06} position={[0, -2, 0]} blur={2} />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
