import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import Connect from "./components/Connect";
import { styles } from "./styles";
import Preloader from "./components/Preloader";

const App = () => {
  const { progress } = useProgress();
  const azimuthalAngle = useRef(0);

  const [loading, setLoading] = useState(false);

  function updateAzimuthalAngle(value) {
    azimuthalAngle.current = value;
  }

  window.addEventListener("", () => alert("hellow"));
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <Preloader />
        <div className="bg-hero bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <div className={`${styles.paddingY} bg-black-100`}>
            <Connect />
          </div>
          <div id="contact">
            <Contact updateAzimuthalAngle={updateAzimuthalAngle} />
            <StarsCanvas azimuthalAngle={azimuthalAngle} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
