import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-cyan-500`}>
          Technologies
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 mb-12 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Different projects need different tools, I definitely can't list all
          the technologies I use but below are some good looking glass beads
          that represent just a few of the tools and technologies I use on a
          daily basis.
          <br />
          <br />
          Feel free to spin them around.
        </motion.p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas
              icon={technology.icon}
              color={technology.color}
              name={technology.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
