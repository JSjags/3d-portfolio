import React from "react";
import { motion } from "framer-motion";

import LaptopCanvas from "../components/canvas/Laptop";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Connect = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
      >
        <p className={styles.sectionSubText}>I'm out there</p>
        <h2 className={`${styles.sectionHeadText} text-yellow-500`}>
          Connect.
        </h2>

        <div className="relative w-full h-screen mx-auto">
          <LaptopCanvas />
        </div>
      </motion.div>
    </>
  );
};

export default Connect;
