import { motion } from "framer-motion";
import { Award } from "lucide-react"; // Optional: install lucide-react icons

// import { Briefcase } from "lucide-react";
// import { experienceData } from "../data/experience"; // adjust path if needed
import { certificateData } from "../data/certificates";
const About = () => {
    return (
        <section className=" min-h-screen bg-gray-900 text-white py-16 px-6 md:px-20 ">

            <motion.div
                className=" max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* your content here */}
                <div className="max-w-5xl mx-auto text-center space-y-24 ">

                    <h2 className="text-4xl font-bold mb-6 pt-10">About Me</h2>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Optional Profile Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                src="/about.jpg" // <-- Put your image in public folder
                                alt="Profile"
                                className="rounded-xl shadow-md w-full max-w-sm mx-auto"
                            />
                        </div>

                        {/* About Text */}
                        <div className="w-full md:w-1/2 text-lg leading-relaxed">
                            <p className="mb-4">
                                Hi! I'm <span className="font-semibold text-yellow-600">Lokesh Vishwakarma</span>, a passionate and motivated web developer with a strong background in frontend and backend development.
                            </p>
                            <p className="mb-4">
                                For me, coding isn’t just about writing lines—it's about creating something that actually works and makes life a bit easier (or just more fun!).
                            </p>
                            <p className="mb-4">
                                Even though I’m from an IT background, I’ve always had a strong interest in electronics too. It might be out of my field, but that never stopped me from exploring it. In fact, I’ve even built a few electronics projects just because I was curious and wanted to try something new.
                            </p >
                            <p className="mb-4">
                                I believe in learning by doing, and I’m always looking for opportunities to grow, build, and try new things. Whether it’s web development or something completely different, I love diving in and figuring things out.
                            </p>
                            <p className="font-semibold text-yellow-200">
                                Thanks for stopping by! Feel free to explore my work—there’s always something new around the corner. 😊
                            </p>
                        </div>
                    </div>

                    {/* Certificates Section */}
                    <section className="py-20 bg-gray-950 text-white px-4 sm:px-6 md:px-12 lg:px-20">

                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-left">
                                Certificates
                            </h2>

                            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {certificateData.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative bg-gradient-to-br from-yellow-600/10 to-transparent p-[1px] rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="bg-gray-900 p-6 rounded-xl h-full">
                                            {/* Icon + Title */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <Award className="text-yellow-400" size={24} />
                                                <h3 className="text-lg font-semibold">{cert.title}</h3>
                                            </div>

                                            <p className="text-sm text-gray-400 mb-1">
                                                Issued by: <span className="text-white">{cert.issuer}</span>
                                            </p>
                                            <p className="text-xs text-gray-500 mb-4">Date: {cert.date}</p>

                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block text-yellow-400 text-sm font-medium hover:underline"
                                            >
                                                View Certificate →
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}

                            </div>
                        </div>
                    </section>



                    {/* Experience  Section */}
                    <section className="py-20 bg-gray-950 text-white px-4 sm:px-6 md:px-12 lg:px-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-left">
                                Experience
                            </h2>

                            <div className="space-y-8">

                                {/* Adeeva Intern */}
                                <div className="bg-gray-900 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        Digital Marketing Intern
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1"><a href="https://adeeva.ai/" target="main"> Adeeva, Indore</a></p>
                                    <p className="text-xs text-gray-500 mb-3">Dec 2024 – Mar 2025</p>
                                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                        <li>Designed 5 to 10 website pages using Figma during the internship period.</li>
                                        <li>Assisted in content creation and digital marketing strategies, contributing to a 20% growth in online reach.</li>
                                    </ul>
                                </div>

                                {/* Byte Buster Institute */}
                                <div className="bg-gray-900 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        Chief Financial Officer (CFO)
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1">Byte Buster Institute, Indore</p>
                                    <p className="text-xs text-gray-500 mb-3">Jun 2023 – Dec 2024</p>
                                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                        <li>Worked as a teaching faculty, instructing students in C, C++, and MERN Stack web development.</li>
                                        <li>Successfully taught over 10 to 15 students in both online and offline modes.</li>
                                        <li>Managed financial records for 100+ students, ensuring 100% accuracy in account sheets.</li>
                                        <li>Designed brochures, templates, and portfolios that boosted student enrollment by 25%.</li>
                                        <li>Conducted a C and C++ workshop for 50+ students, enhancing their programming skills.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* Education Qualification  Section */}
                    <section className="py-20 bg-gray-950 text-white px-4 sm:px-6 md:px-12 lg:px-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-left">
                                Education
                            </h2>

                            <div className="space-y-8">
                                {/* B.Tech */}
                                <div className="bg-gray-900 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        Bachelor of Technology (B.Tech) in Information Technology
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1">Malwa Institute of Technology, Indore</p>
                                    <p className="text-xs text-gray-500 mb-2">2021 – 2025</p>
                                    <p className="text-sm text-gray-300">Grades: 7.9 CGPA</p>
                                </div>

                                {/* Class 12 */}
                                <div className="bg-gray-900 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        Class 12<sup>th</sup> – MP Board (Hindi Medium)
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1">Gov Higher Secondary School</p>
                                    <p className="text-xs text-gray-500">2020 – 2021</p>
                                </div>

                                {/* Class 10 */}
                                <div className="bg-gray-900 rounded-xl p-6 shadow-md">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        Class 10<sup>th</sup> – CBSE (English Medium)
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1">Nirmala Convent Higher Secondary School</p>
                                    <p className="text-xs text-gray-500">2018 – 2019</p>
                                </div>
                            </div>
                        </div>
                    </section>




                    {/* About  Section */}
                    <section className="py-20 bg-gray-950 text-white px-4 sm:px-6 md:px-12 lg:px-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-left">
                                Personal Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-3">
                                    <p><span className="text-yellow-400 font-semibold">Full Name:</span> Lokesh Vishwakarma</p>
                                    <p><span className="text-yellow-400 font-semibold">Date of Birth:</span> 2nd August, 2002</p>
                                    <p><a href="https://maps.app.goo.gl/k9LrsGxBdvoiT7VW7" target="main"><span className="text-yellow-400 font-semibold">Current address:</span> Adarsh Moulik nagar, Indore, Madhya pradesh, India </a></p>
                                    <p><a href="https://maps.app.goo.gl/9TBjcur2yDjjV2n26" target="main"><span className="text-yellow-400 font-semibold">Home Town:</span> Lateri, Madhya pradesh, India </a></p>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-3">
                                    <p><span className="text-yellow-400 font-semibold">Languages:</span> English, Hindi</p>
                                    <p><span className="text-yellow-400 font-semibold">Hobbies:</span> Coding, Traveling, Paracord </p>
                                    <p><span className="text-yellow-400 font-semibold">Email:</span> lokesh.vishwakarma7489.com</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </motion.div>
        </section>

    );
};

export default About;
