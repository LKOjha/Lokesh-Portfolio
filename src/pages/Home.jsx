import { motion } from "framer-motion";
import eventsData from "../data/events.json";
// import Footer from "./components/Footer";

const Home = () => {
  return (
    <section className="home-section min-h-screen overflow-x-hidden overflow-y-auto   text-white relative scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800 ">

      {/* Hero Section */}
      <div className="h-screen flex justify-center items-center text-center relative overflow-hidden">
        {/* Animated Background only for Hero */}
        <motion.div
          className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center z-0" // Replace with your actual image path
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />


        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Hero Content */}
        <div className="z-20 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m <span className="text-yellow-400">Lokesh Vishwakarma</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MERN Stack Developer | Tech Explorer | Lifelong Learner
          </motion.p>

          <motion.div
            className="flex space-x-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 font-semibold transition"
            >
              Download Resume
            </a>
            <a
              href="/projects"
              className="border border-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Blog Preview Section */}
      <motion.div
        className="z-20 mt-16 mb-16 w-full px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto bg-gray-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* 🔥 Blog/Events Section */}
        <div className=" text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
            Events & Blogs
          </h3>

          <div className="space-y-10">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg "
              >
                <h4 className="text-2xl font-semibold text-yellow-300 mb-1">
                  {event.title.trim()}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{event.date}</p>


                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`event-${i}`}
                      className="rounded-lg hover:scale-105 transition-transform duration-300 border border-yellow-900"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Optional CTA button
                <button className="mt-2 text-sm text-yellow-400 hover:text-yellow-300 underline">
                  Read More →
                </button> */}
              </div>
            ))}

          </div>
        </div>
      </motion.div>


    </section>
  );
};

export default Home;
