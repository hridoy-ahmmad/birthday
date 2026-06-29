"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
    {
        title: "Your smile",
        emoji: "😊",
        message: "Your smile can make even a normal day feel special ✨"
    },

    {
        title: "Your kindness",
        emoji: "🌸",
        message: "Your kindness shows how beautiful your heart is ❤️"
    },

    {
        title: "Your support",
        emoji: "💖",
        message: "Your support always gives strength and makes everything better 🤍"
    },

    {
        title: "Everything about you",
        emoji: "❤️",
        message: "Every little thing about you makes you truly special ✨"
    }
];

const Reasons = () => {

    const [open, setOpen] = useState(null);
    const [showFinal, setShowFinal] = useState(false);

    return (

        <section className="px-5 text-center">

            {!showFinal ? (

                <>

                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold text-pink-600 mb-8"
                    >
                        Why You`re so Special ❤️
                    </motion.h1>

                    <div className="space-y-4">

                        {reasons.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                onClick={() => setOpen(open === index ? null : index)}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/70 rounded-3xl p-5 shadow-xl cursor-pointer transition"
                            >

                                <div className="flex justify-between items-center">

                                    <h2 className="text-xl font-bold text-pink-700">
                                        {item.emoji} {item.title}
                                    </h2>

                                    <span className="text-2xl text-pink-600">
                                        {open === index ? "−" : "+"}
                                    </span>

                                </div>

                                {open === index && (

                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.4 }}
                                        className="mt-4 text-gray-600 leading-relaxed"
                                    >
                                        {item.message}
                                    </motion.p>

                                )}

                            </motion.div>

                        ))}

                    </div>

                    <motion.button
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowFinal(true)}
                        className="mt-10 px-10 py-3 rounded-full bg-pink-600 text-white font-bold shadow-lg"
                    >
                        💖 Click Me
                    </motion.button>

                </>

            ) : (

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-[70vh] flex items-center justify-center"
                >

                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
                    >

                        <h1 className="text-4xl font-bold text-pink-600">
                            Finally... ❤️
                        </h1>

                        <p className="mt-8 text-2xl text-gray-700 leading-relaxed">

                            Happy Birthday, Prity.

                            <br /><br />

                            May all your dreams come true.

                            <br /><br />

                            ❤️

                        </p>

                    </motion.div>

                </motion.div>

            )}

        </section>

    );

};

export default Reasons;