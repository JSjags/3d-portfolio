import { useRef } from "react";
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

const App = () => {
  const azimuthalAngle = useRef(0);

  function updateAzimuthalAngle(value) {
    azimuthalAngle.current = value;
  }

  console.log(typeof updateAzimuthalAngle);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <div className="bg-black-100">
            <Connect />
          </div>
          <Contact updateAzimuthalAngle={updateAzimuthalAngle} />
          <StarsCanvas azimuthalAngle={azimuthalAngle} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
