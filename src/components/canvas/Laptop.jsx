import { Suspense } from "react";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { socials } from "../../constants";

import CanvasLoader from "../Loader";

const Laptop = () => {
  const laptop = useGLTF("./laptop/scene.gltf");

  return (
    <>
      <hemisphereLight color="white" groundColor="black" intensity={1} />
      <rectAreaLight
        width={1}
        height={1}
        color="white"
        intensity={1}
        position={[0, 0, 600]}
      />
      <pointLight color="white" intensity={1} position={[0, 0, 600]} />
      <ambientLight color="blue" intensity={1} position={[-10, 20, 5]} />
      <directionalLight color="white" intensity={1} position={[-10, 20, 5]} />
      <primitive
        object={laptop.scene}
        scale={2}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
      >
        <Html
          className=" relative w-[629%] min-h-[65px] bg-[url(https://th.bing.com/th/id/OIP.ol7qYzENK44yO-OQfaCG6gHaEo?pid=ImgDet&rs=1)] bg-cover bg-center"
          transform
          position={[-0.976, 1, -0.88]}
        >
          <div className="w-[100%]">
            <h2 className="text-[4px] invisible">Socials</h2>

            {/* Desktop icons */}
            <div className="flex flex-col px- gap-[6px]">
              {socials.map((social, index) => (
                <a href={social.url} target="_blank" rel="noreferrer noopener">
                  <div
                    key={index}
                    className="hover:bg-slate-700 p-[0.5px] rounded-[1px] transition-all duration-300 cursor-pointer w-fit -mt-[4px] ml-[1px] flex flex-col gap-[1px]"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width={6}
                      height={6}
                      className="cursor-pointer mx-[2px] mt-[1px] text-[4px]"
                    />
                    <p className="text-white text-center text-[2px]">
                      {social.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Task bar */}
          <div className="w-full h-[5px] absolute bottom-0 left-0 bg-slate-800 flex gap-[2px] items-center justify-center">
            <div
              className="flex items-center justify-center hover:bg-slate-700 p-[1px] rounded-[0.5px] transition-all duration-300 cursor-pointer"
              onClick={() => alert("I'm working!!!")}
            >
              <img
                src="https://rajaniraiyn.github.io/windows11/src/icons/startButton.png"
                width={2}
                height={2}
              />
            </div>
          </div>
        </Html>
      </primitive>
    </>
  );
};

const LaptopCanvas = () => {
  return (
    <Canvas camera={[10, 10, 10]}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          fov={65}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minAzimuthAngle={-0.61}
        />
        <Laptop />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default LaptopCanvas;
