import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Contact from "./Contact"
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";


const Contact2 = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
        <div className=" p-8 rounded-2xl shadow-2xl text-center border border-white/5">
            <p>Have a question, Want to Learn, or just want to say hi? Feel free to reach out!</p>
        </div>
    <div
      className={`xl:mt-1 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      {/* <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl bg-[#100d25] p-8 rounded-2xl shadow-2xl text-center border border-white/5'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact...</h3>

        {
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                        <p className="text-lg">
                            📧 <span className="text-[#aaa6c3]">Email:</span><br/>
                            <a href="mailto:lkojha62609@gmail.com" className="text-yellow-400 hover:text-yellow-200 transition">
                                lkojha62609@gmail.com
                            </a>
                        </p>
                        <p className="text-lg">
                            💼 <span className="text-[#aaa6c3]">LinkedIn:</span><br/>
                            <a href="https://www.linkedin.com/in/lokesh-vishwakarma-ba1aa720a" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-yellow-200 transition">
                                View Profile
                            </a>
                        </p>
                        <p className="text-lg">
                            🐱 <span className="text-[#aaa6c3]">GitHub:</span><br/>
                            <a href="https://github.com/LKOjha" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-yellow-200 transition">
                                Follow on GitHub
                            </a>
                        </p>
                        <p className="text-lg">
                            🔷 <span className="text-[#aaa6c3]">Instagram:</span><br/>
                            <a href="https://www.instagram.com/lokesh_vish_207?igsh=YmtkY3lueG5uaWVw" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-yellow-200 transition">
                                Connect on Instagram
                            </a>
                        </p>
                    </div>
        }
      </motion.div> */}

<motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  className="
    flex-[0.75]
    bg-[#100d25]
    p-10
    rounded-2xl
    shadow-[0_0_50px_rgba(124,58,237,0.18)]
    border border-white/5
    relative
    overflow-hidden
  "
>
  {/* Ambient glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-yellow-400/5 pointer-events-none" />

  <p className={styles.sectionSubText}>Get in touch</p>
  <h3 className={styles.sectionHeadText}>Contact</h3>

  <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto relative z-10">

    {/* Email */}
    <a
      href="mailto:lkojha62609@gmail.com"
      className="
        group flex items-center gap-5
        bg-[#050816]
        p-5 rounded-xl
        border border-white/5
        hover:border-yellow-400/40
        hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
        transition
      "
    >
      <FiMail className="text-2xl text-yellow-400 group-hover:scale-110 transition" />
      <div>
        <p className="text-sm text-[#aaa6c3]">Email</p>
        <p className="text-white font-medium">
          lkojha62609@gmail.com
        </p>
      </div>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/lokesh-vishwakarma-ba1aa720a"
      target="_blank"
      rel="noreferrer"
      className="
        group flex items-center gap-5
        bg-[#050816]
        p-5 rounded-xl
        border border-white/5
        hover:border-blue-400/40
        hover:shadow-[0_0_25px_rgba(96,165,250,0.25)]
        transition
      "
    >
      <FiLinkedin className="text-2xl text-blue-400 group-hover:scale-110 transition" />
      <div>
        <p className="text-sm text-[#aaa6c3]">LinkedIn</p>
        <p className="text-white font-medium">
          View my LinkedIn profile
        </p>
      </div>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/LKOjha"
      target="_blank"
      rel="noreferrer"
      className="
        group flex items-center gap-5
        bg-[#050816]
        p-5 rounded-xl
        border border-white/5
        hover:border-gray-400/40
        hover:shadow-[0_0_25px_rgba(148,163,184,0.25)]
        transition
      "
    >
      <FiGithub className="text-2xl text-gray-300 group-hover:scale-110 transition" />
      <div>
        <p className="text-sm text-[#aaa6c3]">GitHub</p>
        <p className="text-white font-medium">
          Explore my projects
        </p>
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/lokesh_vish_207"
      target="_blank"
      rel="noreferrer"
      className="
        group flex items-center gap-5
        bg-[#050816]
        p-5 rounded-xl
        border border-white/5
        hover:border-pink-400/40
        hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]
        transition
      "
    >
      <FiInstagram className="text-2xl text-pink-400 group-hover:scale-110 transition" />
      <div>
        <p className="text-sm text-[#aaa6c3]">Instagram</p>
        <p className="text-white font-medium">
          Connect with me
        </p>
      </div>
    </a>

  </div>
</motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
     
    </div> 
    </div>
  );
};

export default SectionWrapper(Contact2, "contact2");
