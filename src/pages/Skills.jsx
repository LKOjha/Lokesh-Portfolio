import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-20">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-5xl mx-auto pt-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        My Skills
                    </h2>
                    <p className="text-center text-gray-400 mb-10 text-lg">
                        These are some technologies I've worked with and am confident using.
                    </p>


                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">


                        <div className="bg-gray-800 hover:bg-red-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <FaHtml5 size={40} className="mx-auto mb-2 text-yellow-300" />
                            <p className="font-semibold text-lg">HTML</p>
                        </div>
                        <div className="bg-gray-800 hover:bg-red-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <FaCss3Alt size={40} className="mx-auto mb-2 text-yellow-300" />
                            <p className="font-semibold text-lg">CSS</p>
                        </div>
                        <div className="bg-gray-800 hover:bg-red-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <FaJsSquare size={40} className="mx-auto mb-2 text-yellow-300" />
                            <p className="font-semibold text-lg text-center">JavaScript</p>
                        </div>
                        <div className="bg-gray-800 hover:bg-red-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <FaReact size={40} className="mx-auto mb-2" />
                            <p className="font-semibold text-lg">React</p>
                        </div>
                        <div className="bg-gray-800 hover:bg-yellow-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <FaNodeJs size={40} className="mx-auto mb-2" />
                            <p className="font-semibold text-lg">Node.js</p>
                        </div>
                        <div className="bg-gray-800 hover:bg-yellow-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <SiMongodb size={40} className="mx-auto mb-2 text-green-500" />
                            <p className="font-semibold text-lg text-center">MongoDB</p>

                        </div>
                        <div className="bg-gray-800 hover:bg-yellow-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <FaGithub size={40} className="mx-auto mb-2" />
                            <p className="font-semibold text-lg">Git</p>
                        </div>
                        <div className="bg-gray-800 hover:bg-yellow-400 hover:text-black shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105">
                            <SiTailwindcss size={40} className="mx-auto mb-2" />
                            <p className="font-semibold text-lg">Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
