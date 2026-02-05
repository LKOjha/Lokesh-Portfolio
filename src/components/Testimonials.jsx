import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { User, MessageSquareQuote, Send } from "lucide-react";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [formData, setFormData] = useState({ name: "", message: "" });

    const fetchTestimonials = async () => {
        const snapshot = await getDocs(collection(db, "testimonials"));
        const data = snapshot.docs.map(doc => doc.data());
        setTestimonials(data);
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "testimonials"), formData);
            setFormData({ name: "", message: "" });
            fetchTestimonials();
        } catch (error) {
            console.error("Firebase error:", error);
        }
    };

    return (
        <section className="relative py-20  px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 ">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[100px]" />
    </div>

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-left">
                    What People Say
                </h2>

                {/* Testimonials List (Single Column) */}
                <div className="space-y-6 mb-16">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-[#100d25] border border-white/5 p-6 rounded-xl shadow-lg"
                        >
                            <div className="flex items-start gap-3">
                                <MessageSquareQuote className="text-yellow-400 w-6 h-6 mt-1" />
                                <p className="text-gray-300 italic">
                                    "{t.message}"
                                </p>
                            </div>

                            <div className="flex items-center gap-2 mt-4 text-yellow-400">
                                <User className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    {t.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feedback Form */}
                <div className="bg-[#100d25] p-8 rounded-2xl border border-white/5 shadow-xl">
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-left">
                        Leave Your Feedback
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-white font-medium mb-2 flex items-center gap-2">
                                <User className="w-4 h-4 text-yellow-400" />
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="bg-[#1c1c3d] py-4 px-6 text-white rounded-lg outline-none"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-white font-medium mb-2 flex items-center gap-2">
                                <MessageSquareQuote className="w-4 h-4 text-yellow-400" />
                                Your Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Share your experience"
                                className="bg-[#1c1c3d] py-4 px-6 text-white rounded-lg outline-none"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-all"
                        >
                            <Send className="w-4 h-4" />
                            Submit Feedback
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
