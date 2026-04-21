"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralGraph() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate 12 random nodes
  const nodes = useMemo(() => {
    const numNodes = 12;
    const positions = [];
    THREE.MathUtils.seededRandom(42); // deterministic

    for (let i = 0; i < numNodes; i++) {
      positions.push([
        (THREE.MathUtils.seededRandom() - 0.5) * 4,
        (THREE.MathUtils.seededRandom() - 0.5) * 4,
        (THREE.MathUtils.seededRandom() - 0.5) * 4,
      ]);
    }
    return positions;
  }, []);

  const nodeRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }

    nodeRefs.current.forEach((node, i) => {
      if (node) {
        const offset = i;
        const scale = 1.1 + Math.sin(time * 2 + offset) * 0.3;
        node.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh
          key={`node-${i}`}
          position={pos as [number, number, number]}
          ref={(el) => {
            if (el) nodeRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Lines connecting closest nodes */}
      {nodes.map((pos, i) => {
        // Connect to 2-3 other nodes
        const lines = [];
        for (let j = 1; j <= 2; j++) {
          const target = nodes[(i + j) % nodes.length];
          const points = [
            new THREE.Vector3(...(pos as [number, number, number])),
            new THREE.Vector3(...(target as [number, number, number])),
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          lines.push(
            <line key={`line-${i}-${j}`}>
              <bufferGeometry attach="geometry" {...geometry} />
              <lineBasicMaterial
                attach="material"
                color="#C8A96E"
                opacity={0.4}
                transparent={true}
              />
            </line>,
          );
        }
        return lines;
      })}
    </group>
  );
}

export default function NeuralNet({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas frameloop="always" camera={{ position: [0, 0, 6], fov: 45 }}>
        {/* Neutral dark background provided in css / component */}
        <ambientLight intensity={0.5} />
        <NeuralGraph />
      </Canvas>
    </div>
  );
}
