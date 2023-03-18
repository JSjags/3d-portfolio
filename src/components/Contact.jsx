import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn, staggerContainer } from "../utils/motion";

const Contact = ({ updateAzimuthalAngle }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="relative xl:flex-row flex-col-reverse flex gap-10 ">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative flex-[0.75] xl:mt-20 xl:mb-16 bg-glass-black p-8 rounded-2xl z-30"
      >
        <p className={styles.sectionSubText}>Drop me a line</p>
        <h3 className={`${styles.sectionHeadText} text-white-100`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="sm:my-16 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Let's hear it!"
              className="bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas updateAzimuthalAngle={updateAzimuthalAngle} />
      </motion.div>
    </div>
  );
};

const SectionWrapper = ({ updateAzimuthalAngle }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hidden" id="contact">
        &nbsp;
      </span>
      <Contact updateAzimuthalAngle={updateAzimuthalAngle} />
    </motion.section>
  );
};

export default SectionWrapper;
