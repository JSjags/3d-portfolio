import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { my_logo } from "../assets";
import { loadingStatus } from "../constants";

const Preloader = () => {
  const { progress, ...rest } = useProgress();
  const [prog, setProg] = useState(0);

  useEffect(() => {
    setProg(progress.valueOf());
  }, [rest.loaded]);

  return (
    <div
      className={`${
        progress.valueOf() === 100 && rest.loaded > 70 ? "hide-preloader" : ""
      } fixed top-0 left-0 w-full h-full z-40`}
    >
      <div className="absolute top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center gap-[20px] ">
        <img
          src={my_logo}
          className={`${
            progress.valueOf() === 100 && rest.loaded > 70 ? "hide-logo" : ""
          } w-[20%] max-w-[100px]`}
          alt="brand-logo"
        />

        {/* Number progress */}
        <div className="mt-4 mb-2 overflow-hidden h-6">
          <p
            className={`${
              progress.valueOf() === 100 && rest.loaded > 70 ? "hide-text" : ""
            } text-center font-bold text-[20px]`}
          >
            {progress.toFixed(2)}%
          </p>
        </div>

        {/* Loading Status */}
        <div className={`overflow-hidden h-6`}>
          <div
            className={`translate-y-25 duration-300 ease-in-out flex flex-col justify-center mx-auto overflow-hidden
                ${prog > 0 && rest.loaded < 26 && "-translate-y-[25%]"} 
                ${prog > 25 && rest.loaded < 51 && "-translate-y-[50%]"} 
                ${prog > 50 && rest.loaded < 76 && "-translate-y-[75%]"} 
                ${
                  progress.valueOf() === 100 &&
                  rest.loaded > 70 &&
                  "-translate-y-[100%] hide-text"
                } 
                `}
          >
            {loadingStatus.map((status, i) => (
              <p key={i} className="text-center">
                {status}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* blinds */}
      <div className={`absolute z-40 top-0 left-0 w-full h-full flex`}>
        <div
          className={`${
            progress.valueOf() === 100 && rest.loaded > 70
              ? "open-blinders"
              : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            progress.valueOf() === 100 && rest.loaded > 70
              ? "open-blinders"
              : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            progress.valueOf() === 100 && rest.loaded > 70
              ? "open-blinders"
              : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            progress.valueOf() === 100 && rest.loaded > 70
              ? "open-blinders"
              : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
