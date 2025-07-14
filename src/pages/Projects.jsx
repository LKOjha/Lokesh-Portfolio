import { motion } from "framer-motion";
import projectsData from "../data/projects.json";



const Projects = () => {
    return (
        <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-20">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto pt-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
                        Projects
                    </h2>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} Screenshot`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> {project.techStack}
                                </p>

                                {/* Buttons at the bottom */}
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        View Demo
                                    </a>

                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
