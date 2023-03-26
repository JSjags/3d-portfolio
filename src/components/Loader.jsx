import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="block -translate-x-1/2">
        <span className="canvas-load"></span>
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            margin: 40,
          }}
          className={`${
            progress.valueOf() === 100 ? "block" : "hidden"
          } mx-auto`}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
