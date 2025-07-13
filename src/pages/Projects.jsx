import { motion } from "framer-motion";
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Card */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Project Image */}
                            <img
                                src="/Auto-Rescue.png" // <- place this image in your public/ folder
                                alt="Project Screenshot"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Auto_Rescue_Automated_Accident_Detectoin_and_Calling_System</h3>
                                <p className="text-gray-300 mb-4">
                                    An automated system that detects vehicle accidents using impact sensors and sends emergency alerts with GPS coordinates to designated contacts. It is designed to reduce response times by automatically notifying rescuers when a crash occurs, improving road safety and potentially saving lives.
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> Arduino Nano, Gps module, sim800L module, other sensors
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://your-live-demo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/LKOjha/Auto_Rescue_Automated_Accident_Detectoin_and_Calling_System"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Duplicate this card for more projects */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Project Image */}
                            <img
                                src="/door-locking.jpg" // <- place this image in your public/ folder
                                alt="Project Screenshot"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Door Locking system via Voice command</h3>
                                <p className="text-gray-300 mb-4">
                                    This is an automatic Door Locking system via Voice command, make with the help of arduino uno, ai thinker, car door actuator and other basic compnent
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> Arduino Uno, Ai-thinker
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://your-live-demo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/LKOjha/Door-Locking-System-Via-Voice-Command"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Duplicate this card for more projects */}
                        {/* Duplicate this card for more projects */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Project Image */}
                            <img
                                src="/door-locking.jpg" // <- place this image in your public/ folder
                                alt="Project Screenshot"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Door Locking system via Voice command</h3>
                                <p className="text-gray-300 mb-4">
                                    This is an automatic Door Locking system via Voice command, make with the help of arduino uno, ai thinker, car door actuator and other basic compnent
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> Arduino Uno, Ai-thinker
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://your-live-demo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/LKOjha/Door-Locking-System-Via-Voice-Command"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Duplicate this card for more projects */}
                        {/* Duplicate this card for more projects */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Project Image */}
                            <img
                                src="/door-locking.jpg" // <- place this image in your public/ folder
                                alt="Project Screenshot"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Door Locking system via Voice command</h3>
                                <p className="text-gray-300 mb-4">
                                    This is an automatic Door Locking system via Voice command, make with the help of arduino uno, ai thinker, car door actuator and other basic compnent
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> Arduino Uno, Ai-thinker
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://your-live-demo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/LKOjha/Door-Locking-System-Via-Voice-Command"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Duplicate this card for more projects */}
                        {/* Duplicate this card for more projects */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Project Image */}
                            <img
                                src="/door-locking.jpg" // <- place this image in your public/ folder
                                alt="Project Screenshot"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Door Locking system via Voice command</h3>
                                <p className="text-gray-300 mb-4">
                                    This is an automatic Door Locking system via Voice command, make with the help of arduino uno, ai thinker, car door actuator and other basic compnent
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> Arduino Uno, Ai-thinker
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://your-live-demo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/LKOjha/Door-Locking-System-Via-Voice-Command"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Duplicate this card for more projects */}
                        {/* Duplicate this card for more projects */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            {/* Project Image */}
                            <img
                                src="/door-locking.jpg" // <- place this image in your public/ folder
                                alt="Project Screenshot"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Door Locking system via Voice command</h3>
                                <p className="text-gray-300 mb-4">
                                    This is an automatic Door Locking system via Voice command, make with the help of arduino uno, ai thinker, car door actuator and other basic compnent
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <strong>Tech Stack:</strong> Arduino Uno, Ai-thinker
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://your-live-demo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/LKOjha/Door-Locking-System-Via-Voice-Command"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 font-medium hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Duplicate this card for more projects */}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
