import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 4px goldenrod",
        border: "1px solid goldenrod",
      }}
      contentArrowStyle={{
        borderRight: "7px solid goldenrod",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        overflow: "hidden",
        boxShadow:
          "0 0 0 4px goldenrod, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`
            ${
              experience.company_name === "Freelance"
                ? "w-[100%] h-[100%] -translate-y-[5%]"
                : "w-[60%] h-[60%]"
            } 
            ${
              experience.company_name === "Team OffLoad"
                ? "w-[160%] h-[160%] -translate-x-[10%] translate-y-[5%]"
                : "w-[60%] h-[60%]"
            } 
            ${
              experience.company_name === "Ventaco Inc"
                ? "w-[160%] h-[160%] rounded-full"
                : "w-[60%] h-[60%]"
            } 
            object-contain`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-yellow-500`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="goldenrod" animate={true}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
