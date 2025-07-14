import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        reason: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";

        if (!/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Enter a valid 10-digit phone number.";

        if (
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
        )
            newErrors.email = "Enter a valid email address.";

        if (!formData.reason.trim())
            newErrors.reason = "Reason is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 🔍 Phone validation
        const phonePattern = /^[6-9]\d{9}$/; // 10-digit Indian mobile numbers
        if (!phonePattern.test(formData.phone)) {
            alert("❌ Please enter a valid 10-digit Indian phone number.");
            return;
        }

        // 📧 Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            alert("❌ Please enter a valid email address.");
            return;
        }

        // ✅ If everything is valid, proceed to send
        emailjs.send(
            "service_u6it63x",
            "template_g7azu8p",
            {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                reason: formData.reason,
            },
            "MZ_LeGGxnREJ0Z9Re"
        )
            .then(() => {

                // On success
                toast.success("Message sent!", {
                    style: {
                        border: '1px solid #facc15',
                        padding: '12px',
                        color: '#000',
                        background: '#fef08a',
                    },
                });
                // On failure
                
                setFormData({ name: "", phone: "", email: "", reason: "" });
            })
            .catch((err) => {
                toast.error("Something went wrong ❌ Please try again.");
            });
    };

    return (
        <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-20">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center pt-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
                    <p className="text-gray-400 mb-10">
                        Have a question, job opportunity, or just want to say hi?
                        Feel free to reach out!
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <p className="text-lg">
                            📧 Email:{" "}
                            <a href="mailto:lkojha62609@gmail.com" className="text-yellow-400 hover:underline">
                                lkojha62609@gmail.com
                            </a>
                        </p>
                        <p className="text-lg">
                            💼 LinkedIn:{" "}
                            <a href="https://www.linkedin.com/in/lokesh-vishwakarma-ba1aa720a" target="main" className="text-yellow-400 hover:underline">
                                Follow me on LinkedIn
                            </a>
                        </p>
                        <p className="text-lg">
                            🐱 GitHub:{" "}
                            <a href="https://github.com/LKOjha" target="main" className="text-yellow-400 hover:underline">
                                Follow me on GitHub
                            </a>
                        </p>
                        <p className="text-lg">
                            🔷 Instagram:{" "}
                            <a href="https://www.instagram.com/lokesh_vish_207?igsh=YmtkY3lueG5uaWVw" target="main" className="text-yellow-400 hover:underline">
                                Follow me on Instagram
                            </a>
                        </p>
                    </div>
                </div>

                {/* ✅ Contact Form Section */}
                {/* ✅ Contact Form Section */}
                <div className="max-w-3xl mx-auto mb-20 mt-24">
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-left">
                        Send Me a Message
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md text-left"
                    >
                        <div>
                            <label className="block mb-1 text-sm font-semibold">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-2 rounded bg-gray-900 text-white outline-none"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-semibold">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="w-full p-2 rounded bg-gray-900 text-white outline-none"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-2 rounded bg-gray-900 text-white outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-semibold">Reason for Contact</label>
                            <textarea
                                name="reason"
                                rows="4"
                                placeholder="Tell me why you're reaching out"
                                className="w-full p-2 rounded bg-gray-900 text-white outline-none"
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Testimonials Section */}
                <div className="mt-24">
                    <Testimonials />
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
