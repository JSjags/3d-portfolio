import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  const moon = useGLTF("./moon/scene.gltf");
  const earthRef = useRef();
  const moonRef = useRef();

  useFrame(() => {
    //   earthRef.current.rotateX(0.0);
    //   earthRef.current.rotateZ(-0.003);
    earthRef.current.rotateY(0.001);
  });

  return (
    <>
      {/* Moon Light */}
      <pointLight intensity={0.5} color="#FFF8DE" position={[-1, 3, -5]} />

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
        intensity={0.3}
        color="#ffffff"
        position={[0, 5, 5]}
        castShadow
      />
      <pointLight
        intensity={0.3}
        color="yellow"
        position={[0, 5, 5]}
        castShadow
      />
      <pointLight intensity={0.1} color="red" position={[0, 5, 5]} castShadow />

      {/* Space Light */}
      <hemisphereLight intensity={0.2} groundColor="white" />
      <primitive object={moon.scene} scale={1} position={[0, 2, -9]} />
      <primitive
        ref={earthRef}
        object={earth.scene}
        scale={1.8}
        position={[2, 0, 0]}
        rotation={[-0.2, 0, 0]}
      />
    </>
  );
};

const EarthCanvas = () => {
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
      className="relative fullscreen xl:-left-[40%]"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          position={[-100, 10, 10]}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
