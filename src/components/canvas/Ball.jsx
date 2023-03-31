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
  return <></>;
};

const BallCanvas = ({ icon, color, name }) => {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <Canvas
        shadows
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
