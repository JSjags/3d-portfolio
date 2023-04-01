import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { useState } from "react";

const SkillCard = ({ icon, color, name, index }) => {
  const [scale, setScale] = useState(1);

  return (
    <Tilt
      glareEnable={true}
      glareBorderRadius="20px"
      glareColor={color}
      glareMaxOpacity={0.4}
      gyroscope={true}
      perspective={200}
      scale={scale}
      transitionSpeed={2500}
      className={`relative xs:w-[120px] w-full max-w-[120px] preserve-3d cursor-pointer mx-auto ${
        scale === 1.2 ? "z-10" : "z-0"
      }`}
      onEnter={(e) => setScale(1.2)}
      onLeave={(e) => setScale(1)}
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.1 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card inner-img mx-auto"
      >
        <div
          className={`p-3 flex flex-col justify-between items-center bg-tertiary rounded-[20px] perspective
          `}
        >
          <img
            src={icon}
            alt={name}
            className={`h-[80px] ${name === "Three JS" ? "invert-[80%]" : ""} ${
              name === "Next JS" ? "invert-[300%]" : ""
            }
            ${scale === 1.2 ? "icon-up" : "icon-down"}
            `}
          />
          <p
            className={`text-sm mt-2"
          ${scale === 1.2 ? "show-text" : "hide-text"}`}
          >
            {name}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;
