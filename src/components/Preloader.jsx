import { useProgress } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { my_logo } from "../assets";

const Preloader = () => {
  const { progress, ...rest } = useProgress();

  return (
    <div
      className={`${
        rest.loaded === 95 ? "hide-preloader" : ""
      } fixed top-0 left-0 w-full h-full z-40`}
    >
      <div className="absolute top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center gap-[10vh] ">
        <img
          src={my_logo}
          className={`${
            rest.loaded === 95 ? "hide-logo" : ""
          } w-[20%] max-w-[200px]`}
          alt="brand-logo"
        />
        {/* Progress Bar */}
        <div className="relative bg-black-200 w-[50%] max-w-[480px] h-1 rounded-full">
          <div
            className={`w-[${rest.loaded}px] h-1 bg-white rounded-full smoothload-[${rest.loaded}]`}
          ></div>
        </div>
      </div>
      {/* blinds */}
      <div className={`absolute z-40 top-0 left-0 w-full h-full flex`}>
        <div
          className={`${
            rest.loaded === 95 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            rest.loaded === 95 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            rest.loaded === 95 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            rest.loaded === 95 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
