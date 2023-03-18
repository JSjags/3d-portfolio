import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Html,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { DoubleSide, MeshBasicMaterial } from "three";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const laptop = useGLTF("./laptop/scene.gltf");
  const officeChair = useGLTF("./office_chair/scene.gltf");

  return (
    <mesh castShadow={true}>
      <hemisphereLight castShadow intensity={0.15} groundColor="black" />
      <pointLight castShadow intensity={1} color="white" position={[0, 0, 0]} />
      <pointLight
        intensity={0.7}
        color="rebeccapurple"
        position={[7, -20, 10]}
        castShadow
      />
      <pointLight
        intensity={0.5}
        color="red"
        position={[20, 20, 20]}
        castShadow
      />
      <spotLight
        position={[-20, 50, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color="rebeccapurple"
      />

      {/* Desktop setup */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -4, -2] : [0, -4.25, -1.5]}
        rotation={isMobile ? [0.009, -0.42, -0.1] : [-0.01, 0.25, -0.1]}
        receiveShadow
      >
        <mesh position={[0.3, 0.18, 0]} rotation={[0, 0.0029, 0.069]}>
          <Html
            transform
            position={isMobile ? [0, -4, -2] : [-1.45, 2.95, 3]}
            rotation={isMobile ? [0.01, -0.42, -0.1] : [0, 1.568, 0]}
            occlude="blending"
            distanceFactor={2.47}
          >
            <iframe
              className="w-[1040px] h-[570px] bg-[url(/logo.svg)] bg-[length:60%_60%] bg-center bg-black-100 bg-no-repeat"
              src="https://coderadio.freecodecamp.org"
              // src="https://www.google.com/webhp?igu=1"
            ></iframe>
          </Html>
        </mesh>
      </primitive>

      {/* Macbook laptop */}
      <primitive
        object={laptop.scene}
        scale={isMobile ? 0.55 : 0.7}
        position={isMobile ? [0, -4, -2] : [2.1, -4.38, 3.65]}
        castShadow
        rotation={isMobile ? [0.009, -0.42, -0.1] : [-0.01, 3, 0.1]}
      >
        <mesh
          position={[0.415, 0.11, -4.14]}
          rotation={[-0.226, 0.004, 0.069]}
          material={MeshBasicMaterial}
        >
          <Html
            as="div"
            transform
            position={isMobile ? [0, -4, -2] : [-0.37, 0.85, 3]}
            rotation={isMobile ? [0.01, -0.42, -0.1] : [-0.04, 0, -0.068]}
            occlude="blending"
            distanceFactor={0.94}
          >
            <iframe
              className="w-[1300px] h-[855px] rounded-[24px] bg-[url(/logo.svg)] bg-[length:60%_60%] bg-center bg-black-100 bg-no-repeat"
              src="https://jesseabuaja.tech"
              // src="https://www.google.com/webhp?igu=1"
            ></iframe>
          </Html>
        </mesh>
      </primitive>

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
