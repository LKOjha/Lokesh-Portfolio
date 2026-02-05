import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

import { StarsCanvas } from "./canvas";
// --- IMPORT CONTACT2 ---
import Contact2 from "./Contact2";

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
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
            newErrors.email = "Enter a valid email address.";
        if (!formData.reason.trim())
            newErrors.reason = "Reason is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please fix the errors in the form.");
            return;
        }

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
                toast.success("Message sent!", {
                    style: {
                        border: '1px solid #facc15',
                        padding: '12px',
                        color: '#000',
                        background: '#fef08a',
                    },
                });
                setFormData({ name: "", phone: "", email: "", reason: "" });
            })
            .catch((err) => {
                toast.error("Something went wrong ❌ Please try again.");
            });
    };

    return (
        <section className="min-h-screen bg-[#050816] text-white py-1 px-6 md:px-20 relative z-0">
            {/* Stars Background */}
            <StarsCanvas />

            {/* Top Contact Section */}
            <div className="relative z-10">
                <Contact2 />
            </div>

            <motion.div
                className="max-w-5xl mx-auto mt-10 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Contact Info Card */}

                <div className="max-w-3xl mx-auto mb-20 mt-24 
    bg-[#100d25] 
    p-10 
    rounded-2xl 
    border border-white/5 
    shadow-[0_0_40px_rgba(124,58,237,0.15)]
    relative
    overflow-hidden
">
                    {/* soft ambient glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-yellow-400/5 pointer-events-none" />

                    <h3 className="text-2xl font-semibold text-yellow-400 mb-10 text-left relative z-10">
                        Send Me a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-7 text-left relative z-10">

                        {/* Full Name */}
                        <div className="flex flex-col">
                            <label className="text-[#e5e7eb] font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="What's your name?"
                                className="
                    bg-[#1c1c3d]
                    py-4 px-6
                    text-white
                    rounded-lg
                    outline-none
                    border border-white/5
                    placeholder:text-[#aaa6c3]
                    focus:border-yellow-400/60
                    focus:shadow-[0_0_15px_rgba(250,204,21,0.25)]
                    transition
                "
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label className="text-[#e5e7eb] font-medium mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter 10-digit number"
                                className="
                    bg-[#1c1c3d]
                    py-4 px-6
                    text-white
                    rounded-lg
                    outline-none
                    border border-white/5
                    placeholder:text-[#aaa6c3]
                    focus:border-yellow-400/60
                    focus:shadow-[0_0_15px_rgba(250,204,21,0.25)]
                    transition
                "
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-[#e5e7eb] font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="What's your email?"
                                className="
                    bg-[#1c1c3d]
                    py-4 px-6
                    text-white
                    rounded-lg
                    outline-none
                    border border-white/5
                    placeholder:text-[#aaa6c3]
                    focus:border-yellow-400/60
                    focus:shadow-[0_0_15px_rgba(250,204,21,0.25)]
                    transition
                "
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-[#e5e7eb] font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                                name="reason"
                                rows="5"
                                placeholder="Tell me why you're reaching out"
                                className="
                    bg-[#1c1c3d]
                    py-4 px-6
                    text-white
                    rounded-lg
                    outline-none
                    border border-white/5
                    placeholder:text-[#aaa6c3]
                    focus:border-yellow-400/60
                    focus:shadow-[0_0_15px_rgba(250,204,21,0.25)]
                    transition
                    resize-none
                "
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
                mt-4
                bg-yellow-400
                py-3 px-10
                rounded-xl
                text-black
                font-bold
                shadow-[0_0_25px_rgba(250,204,21,0.4)]
                hover:bg-yellow-300
                hover:shadow-[0_0_35px_rgba(250,204,21,0.6)]
                transition-all
            "
                        >
                            Send Message 🚀
                        </button>

                    </form>
                </div>

                <div className="mt-24">
                    <Testimonials />
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;