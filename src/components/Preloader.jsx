import { useProgress } from "@react-three/drei";
import { my_logo } from "../assets";
import { loadingStatus } from "../constants";

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
          } w-[20%] max-w-[100px]`}
          alt="brand-logo"
        />

        {/* Loading Status */}
        <div className={`mt-4 overflow-hidden h-6`}>
          <div
            className={`translate-y-25 duration-300 ease-in-out flex flex-col justify-center mx-auto overflow-hidden
                ${rest.loaded > 0 && rest.loaded < 26 && "-translate-y-[25%]"} 
                ${rest.loaded > 25 && rest.loaded < 51 && "-translate-y-[50%]"} 
                ${rest.loaded > 50 && rest.loaded < 76 && "-translate-y-[75%]"} 
                ${
                  progress.valueOf() === 100 &&
                  "-translate-y-[100%] hide-status"
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
            progress.valueOf() === 100 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            progress.valueOf() === 100 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            progress.valueOf() === 100 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
        <div
          className={`${
            progress.valueOf() === 100 ? "open-blinders" : ""
          } w-1/4 h-full border-r border-transparent border-solid bg-tertiary`}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
