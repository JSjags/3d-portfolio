import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SkillCard from "./SkillCard";

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
          Different projects require different tools, I definitely can't list
          all the technologies I use but below are just some of the tools and
          technologies I work with on a daily basis.
          <br />
          <br />
        </motion.p>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-fit" key={technology.name}>
            <SkillCard
              icon={technology.icon}
              color={technology.color}
              name={technology.name}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
