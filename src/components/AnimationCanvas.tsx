import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import circle from "@/assets/images/circle.png"; // Your texture
import { Suspense, useCallback, useMemo, useRef } from "react";

// Camera Controls for Orbiting
function CameraControls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} autoRotate autoRotateSpeed={-0.2} />;
}

// Animated Points Background
function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circle.src);  // Loading the texture

  const bufferRef = useRef<THREE.BufferAttribute>(null);

  let t = 0;
  const f = 0.002;
  const a = 3;

  const graph = useCallback((x: number, z: number) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a]);

  const count = 100;
  const sep = 3;

  const positions = useMemo(() => {
    const positions: number[] = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = graph(x, z);
        positions.push(x, y, z);

        // Log the positions to debug
        console.log(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;
    if (bufferRef.current) {
      const positions = bufferRef.current.array as Float32Array;
      let i = 0;
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          const x = sep * (xi - count / 2);
          const z = sep * (zi - count / 2);
          positions[i + 1] = graph(x, z);
          i += 3;
        }
      }
      bufferRef.current.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes.position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

// Full-Screen Background Animation
export function AnimationCanvas() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        // backgroundColor: "black", // Set the background color to black
      }}
    >
      {/* Render Canvas inside div for 3D content */}
      <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
        <Suspense fallback={null}>
          <Points />
          <CameraControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
