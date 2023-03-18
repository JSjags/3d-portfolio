import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { socials } from "../constants";
import { BallCanvas } from "./canvas";

const ServiceCard = ({ index, name, icon, color, url }) => {
  const [scale, setScale] = useState(1);
  return (
    <Tilt
      glareEnable={true}
      glareBorderRadius="20px"
      glareColor={color}
      glareMaxOpacity={0.4}
      gyroscope={true}
      perspective={500}
      scale={scale}
      transitionSpeed={2500}
      className="xs:w-[100px] w-full preserve-3d cursor-pointer"
      onEnter={(e) => setScale(1.2)}
      onLeave={(e) => setScale(1)}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card inner-img"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`bg-tertiary rounded-[20px] py-5 min-h-[100px] flex justify-evenly items-center flex-col`}
        >
          <img
            src={icon}
            alt={name}
            className={`${
              name === "GitHub" ? "invert" : "invert-0"
            } w-16 h-16 object-contain`}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Connect = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-primary rounded-xl`}
      >
        <p className={styles.sectionSubText}>I'm out there</p>
        <h2 className={`${styles.sectionHeadText} text-green-400`}>Connect.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm always looking to make meaningful, deep and valuable connections
          with people. You can find me on any of the social or content platforms
          below.
          <br />
          Please feel free to click on any card of your choice and let's
          connect.
        </motion.p>

        <div className=" mt-12 flex flex-row flex-wrap gap-10">
          {socials.map((social, index) => (
            <ServiceCard key={social.name} index={index} {...social} />
          ))}
        </div>
        <div className="relative w-full mx-auto"></div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Connect, "connect");
