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
        <section className="px-5 text-center max-w-md mx-auto">
            {!showFinal ? (
                <>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold text-pink-300 mb-8 drop-shadow-[0_0_10px_rgba(244,114,182,0.4)]"
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
                                // সাদা ব্যাকগ্রাউন্ড বদলে ডার্ক গ্লাস ইফেক্ট এবং সফট পিংক বর্ডার দেওয়া হলো
                                className="bg-gray-950/40 backdrop-blur-xl rounded-3xl p-5 border border-pink-500/10 shadow-2xl cursor-pointer transition hover:border-pink-500/20"
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-pink-200">
                                        {item.emoji} {item.title}
                                    </h2>
                                    <span className="text-2xl font-bold text-pink-400">
                                        {open === index ? "−" : "+"}
                                    </span>
                                </div>

                                {open === index && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.4 }}
                                        className="mt-4 text-pink-100/90 leading-relaxed text-left font-medium"
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
                        className="mt-10 px-10 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold shadow-[0_4px_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_25px_rgba(219,39,119,0.6)] transition-all"
                    >
                        💖 Click Me
                    </motion.button>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-[60vh] flex items-center justify-center"
                >
                    {/* ফাইনাল উইশ কার্ডটি ডার্ক গ্লাস লুক এবং নিয়ন পিংক গ্লো সহ স্টাইল করা হলো */}
                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gray-950/50 backdrop-blur-2xl p-8 rounded-3xl border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.2)]"
                    >
                        <h1 className="text-4xl font-black text-rose-400 drop-shadow-[0_0_12px_rgba(251,113,133,0.5)]">
                            Finally... ❤️
                        </h1>

                        <p className="mt-8 text-2xl text-pink-100/90 font-semibold leading-relaxed">
                            Happy Birthday, Prity.
                            <br /><br />
                            May all your dreams come true.
                            <br /><br />
                            💖
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Reasons;