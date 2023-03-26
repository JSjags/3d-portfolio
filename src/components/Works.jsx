import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_url,
  live_url_icon,
  live_url_text,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable={true}
        glareBorderRadius="20px"
        glareColor="violet"
        glareMaxOpacity={0.2}
        className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full green-pink-gradient-shadow"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end flex-col gap-3 m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(source_code_link, "_blank", "noreferrer noopener")
              }
              // onMouseOver={() => setShowGithubText(true)}
              // onMouseOut={() => setShowGithubText(false)}
              className="github-link black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer gap-[10px]"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
              <span className="whitespace-nowrap">View source code</span>
            </div>
            <div
              onClick={() =>
                window.open(live_url, "_blank", "noreferrer noopener")
              }
              // onMouseOver={() => setShowGithubText(true)}
              // onMouseOut={() => setShowGithubText(false)}
              className="github-link black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer gap-[10px]"
            >
              <img
                src={live_url_icon}
                alt="github"
                className="w-1/2 h-1/2 object-contain invert"
              />
              <span className="whitespace-nowrap">{live_url_text}</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-purple-400`}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work wth different technologies,
          and manage projects effectively.
          <br />
          For more of my works and projects, please visit my github profile.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
