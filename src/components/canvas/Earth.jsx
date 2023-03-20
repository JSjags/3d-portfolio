import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const OCC = ({ updateAzimuthalAngle }) => {
  const orbitControlRef = useRef();

  useFrame(() => {
    const position = orbitControlRef.current.getAzimuthalAngle();

    updateAzimuthalAngle(position);
  });

  return (
    <OrbitControls
      ref={orbitControlRef}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  const moon = useGLTF("./moon/scene.gltf");
  const sun = useGLTF("./sun/scene.gltf");
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotateY(0.001);
  });

  return (
    <>
      {/* Moon Light */}
      <pointLight intensity={0.5} color="#FFF8DE" position={[0, 3, -5]} />
      {/* Sun Light */}
      <pointLight
        intensity={1}
        color="#F4E99B"
        position={[0, 5, 5]}
        castShadow
      />
      <pointLight
        intensity={1}
        color="#F4E99B"
        position={[0, 5, 5]}
        castShadow
      />
      <pointLight
        intensity={1}
        color="#F4E99B"
        position={[0, 3, 5]}
        castShadow
      />
      <pointLight
        intensity={1}
        color="#F4E99B"
        position={[0, 0, 5]}
        castShadow
      />
      <pointLight
        intensity={0.3}
        color="#ffffff"
        position={[0, 0, 5]}
        castShadow
      />
      <pointLight
        intensity={1}
        color="yellow"
        position={[0, 5, 5]}
        castShadow
      />
      <pointLight intensity={0.5} color="red" position={[0, 5, 5]} castShadow />
      <pointLight
        intensity={0.3}
        color="#ffffff"
        position={[0, 0, 5]}
        castShadow
      />
      <pointLight
        intensity={1}
        color="yellow"
        position={[0, 5, 5]}
        castShadow
      />
      <pointLight intensity={0.5} color="red" position={[0, 5, 5]} castShadow />
      {/* Space Light */}
      <hemisphereLight intensity={0.2} groundColor="white" />
      {/* Moon */}
      <mesh frustumCulled>
        <primitive object={moon.scene} scale={1} position={[0, 2, -9]} />
      </mesh>

      {/* Earth */}
      <mesh frustumCulled>
        <primitive
          ref={earthRef}
          object={earth.scene}
          scale={2}
          position={[0, 0, 0]}
          rotation={[-0.2, 0, 0]}
        />
      </mesh>

      {/* Sun */}
      <mesh frustumCulled>
        <primitive object={sun.scene} scale={2.5} position={[0, 35, 149]} />
      </mesh>
    </>
  );
};

const EarthCanvas = ({ updateAzimuthalAngle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1080px)");
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
      shadows
      // frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className={`${
        isMobile
          ? "smaller-fullscreen lg:-left-[20%] md:-left-[25%] sm:-left-[28%] max-xs:-left-[18%]"
          : "larger-fullscreen"
      } relative`}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OCC updateAzimuthalAngle={updateAzimuthalAngle} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
