import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const officeChair = useGLTF("./office_chair/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} color="white" position={[0, 0, 0]} />
      <pointLight
        intensity={0.7}
        color="rebeccapurple"
        position={[7, -20, 10]}
      />
      <pointLight intensity={0.5} color="red" position={[20, 20, 20]} />
      <spotLight
        position={[-20, 50, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color="rebeccapurple"
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -4, -2] : [0, -4.25, -1.5]}
        rotation={isMobile ? [0.01, -0.42, -0.1] : [-0.01, 0.25, -0.1]}
      />
      <primitive
        object={officeChair.scene}
        scale={isMobile ? 0.04 : 0.07}
        position={isMobile ? [2, -7, 1] : [5, -10.25, -1.0]}
        rotation={isMobile ? [0.05, -2, 0.035] : [-0.05, -1.45, -0.07]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
