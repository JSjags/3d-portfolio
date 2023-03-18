import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  Html,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight color="white" position={[0, 0, 0.05]} />
        <pointLight color="indigo" intensity={1} position={[0, 0.2, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <sphereGeometry args={[1, 20, 20, 0, 20, 10, 10]} />
          <meshStandardMaterial
            color={props.color}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            roughness={1}
          />

          <Decal
            position={[0, 0, 1]}
            scale={0.8}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        </mesh>
      </Float>
    </>
  );
};

const BallCanvas = ({ icon, color, name }) => {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <Canvas
        // frameloop="demand"
        shadows
        // camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        onPointerOver={(e) => {
          setShowText(true);
          e.target.style.scale = 1.1;
          e.target.style.transition = "all 300ms ease";
        }}
        onPointerOut={(e) => {
          setShowText(false);
          e.target.style.scale = 1;
          e.target.style.transition = "all 300ms ease";
        }}
        className="overflow-visible"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} color={color} />

          <Html as="div" className=" w-full h-full"></Html>
        </Suspense>
        <Preload all />
      </Canvas>
      <p className={`${showText ? "show-text" : "hide-text"} text-secondary`}>
        {name}
      </p>
      {name === "React JS" && (
        <p className={`${showText ? "show-text" : "hide-text"} text-secondary`}>
          React Native
        </p>
      )}
    </>
  );
};

export default BallCanvas;
