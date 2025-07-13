import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";



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
            console.log("Sending this to Firebase:", formData); // ✅ Debug line
            await addDoc(collection(db, "testimonials"), formData);
            console.log("Successfully saved to Firebase! ✅");
            setFormData({ name: "", message: "" });
            fetchTestimonials(); // reload all
        } catch (error) {
            console.error("Firebase error:", error); // ❌ Debug line
        }
    };



    return (
        <section className="py-16 bg-gray-950 text-white px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-left">Feedback Form</h2>

                {/* Display */}
                <div className="space-y-6 mb-12">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-md shadow">
                            <p className="text-gray-300 italic">"{t.message}"</p>
                            <p className="text-sm text-yellow-400 mt-2">– {t.name}</p>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-white mb-2">Leave a Feedback</h3>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 rounded bg-gray-800 text-white outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 rounded bg-gray-800 text-white outline-none"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Testimonials;
