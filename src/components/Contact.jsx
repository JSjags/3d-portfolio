import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn, staggerContainer } from "../utils/motion";

// Email JS variables
// PUBLIC_KEY
// TEMPLATE_ID
// SERVICE_ID

const Contact = ({ updateAzimuthalAngle }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { current: errors } = useRef({
    name: "Woah!, You forgot to enter your name.",
    email: "Hello!, I need your email so I can reply you.",
    message: `I think you forgot to enter your message${" " + form.name}.`,
  });
  const [formInputErrors, setFormInputErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [callbackMessage, setCallbackMessage] = useState("");

  const validateForm = ({ name, email, message }) => {
    if (name.length < 1) {
      setFormInputErrors((prev) => ({ ...prev, name: errors["name"] }));
    }
    if (email.length < 1) {
      setFormInputErrors((prev) => ({ ...prev, email: errors["email"] }));
    }
    if (message.length < 1) {
      setFormInputErrors((prev) => ({
        ...prev,
        message: errors["message"],
      }));
    }
    console.log(formInputErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormInputErrors({ ...formInputErrors, [name]: "" });
    if (value.length > 0) {
    } else {
      setFormInputErrors({ ...formInputErrors, [name]: errors[name] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCallbackMessage("");
    setLoading(true);

    validateForm(form);

    console.log("after", formInputErrors);
    if (
      Object.values(form).some((value) => value.length === 0) ||
      Object.values(formInputErrors).some((value) => value.length)
    ) {
      setLoading(false);
      const errorsArr = Object.keys(formInputErrors).filter(
        (key) => formInputErrors[key].length > 0
      );
      formRef.current[errorsArr[0]].scrollIntoView();
      return;
    }

    emailjs
      .send(
        "service_jk3kpaj",
        "template_a6nl2g8",
        {
          from_name: form.name,
          to_name: "Jesse",
          from_email: form.email,
          to_email: "jesseabuaja@hotmail.com",
          message: form.message,
        },
        "lulopK7x6iTvCqS2O"
      )
      .then(
        () => {
          setLoading(false);
          setCallbackMessage(
            "Merci!, I well get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => setCallbackMessage(""), 5000);
        },
        (error) => {
          setLoading(false);
          setCallbackMessage(
            '<span>OOOPS!!!, Something went wrong. Please try again, if error persists please send me a mail at <a class="green_text" href="mailto:jesseabuaja@hotmail.com">jesseabuaja@hotmail.com</a><span>'
          );
        }
      );
  };

  return (
    <>
      <div className="relative xl:flex-row flex-col-reverse flex gap-10 ">
        {/* Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] xl:mt-20 xl:mb-16 mb-10 bg-glass-black px-8 pt-8 rounded-2xl z-30"
        >
          <p className={styles.sectionSubText}>Drop me a line</p>
          <h3 className={`${styles.sectionHeadText} text-white-100`}>
            Contact.
          </h3>

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
                className={`bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                  formInputErrors["name"]
                    ? "outline-2 outline-red-400"
                    : "outline- outline-none"
                } focus:outline-2 focus:outline-offset-2 focus:outline-white`}
              />
              <span className="text-red-400 font-medium mb-4 mt-2 text-sm">
                {formInputErrors.name}
              </span>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                  formInputErrors["email"]
                    ? "outline-2 outline-red-400"
                    : "outline- outline-none"
                } focus:outline-2 focus:outline-offset-2 focus:outline-white`}
              />
              <span className="text-red-400 font-medium mb-4 mt-2 text-sm">
                {formInputErrors.email}
              </span>
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
                className={`bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                  formInputErrors["message"]
                    ? "outline-2 outline-red-400"
                    : "outline- outline-none"
                } focus:outline-2 focus:outline-offset-2 focus:outline-white`}
              />
              <span className="text-red-400 font-medium mt-2 text-sm ">
                {formInputErrors.message}
              </span>
            </label>
            <p>
              <p
                className={`${
                  callbackMessage.includes("Merci!")
                    ? "text-[#00cea8]"
                    : "text-[#bf61ff]"
                } py-3 font-bold`}
              >
                {callbackMessage.includes("Merci!") ? (
                  callbackMessage
                ) : (
                  <p
                    className={`text-red-400`}
                    dangerouslySetInnerHTML={{ __html: callbackMessage }}
                  ></p>
                )}
              </p>
            </p>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-medium shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
              &nbsp;
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
    </>
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
      <span className="hidden">&nbsp;</span>
      <Contact updateAzimuthalAngle={updateAzimuthalAngle} />
    </motion.section>
  );
};

export default SectionWrapper;
