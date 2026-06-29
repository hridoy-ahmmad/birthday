"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const reasons = [
    {
        title: "Your Smile",
        emoji: "😊",
        message: "Your cute smile can turn any bad day into a beautiful one in just a second. ✨"
    },
    {
        title: "Your Kind Heart",
        emoji: "🌸",
        message: "The way you care for everyone shows how incredibly beautiful your heart is. ❤️"
    },
    {
        title: "Your Support",
        emoji: "💖",
        message: "When you are with me, I feel like I can handle anything. You always make me strong. 🤍"
    },
    {
        title: "The Way You Listen",
        emoji: "🎧",
        message: "You always listen to all my silly talks and late-night thoughts so patiently. It means a lot. 🥺"
    },
    {
        title: "Your Cute Moods",
        emoji: "✨",
        message: "Your little anger, your cute sweet fights, and everything you do just make me happy. 🥰"
    },
    {
        title: "You Are My Safe Place",
        emoji: "🏡",
        message: "After a long and stressful day, just talking to you brings so much peace to my mind. 🌿"
    },
    {
        title: "How You Care for Me",
        emoji: "🫂",
        message: "The way you notice every little detail about me and look after me is just irreplaceable. 🥺"
    },
    {
        title: "Your Voice",
        emoji: "🎵",
        message: "Just hearing your voice makes all my worries go away instantly. It's like my favorite song. 💕"
    },
    {
        title: "You Are Perfect to Me",
        emoji: "💎",
        message: "Don't ever change anything about yourself. You are absolutely perfect just the way you are. 🌹"
    },
    {
        title: "Everything About You",
        emoji: "🌌",
        message: "Your laugh, your text, your care—every single thing about you makes you the most special person in my life. 💖"
    }
];

const Reasons = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showFinal, setShowFinal] = useState(false);
    const [showTheEnd, setShowTheEnd] = useState(false);

    const isLastReason = currentIndex === reasons.length - 1;

    const handleNext = () => {
        if (!isLastReason) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <section className="px-5 text-center max-w-md mx-auto relative min-h-[65vh] flex flex-col justify-center items-center">
            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
                {!showFinal ? (
                    /* ১. রিজন স্লাইডার স্ক্রিন */
                    <motion.div
                        key="reasons-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full flex flex-col items-center"
                    >
                        {/* হেডিং */}
                        <div className="mb-8 select-none">
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-pink-400/80 block mb-1">
                                Reason {currentIndex + 1} of {reasons.length}
                            </span>
                            <h1 className="text-4xl font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.3)] py-1">
                                Why You`re So Special ❤️
                            </h1>
                        </div>

                        {/* রিজন কার্ড */}
                        <div className="w-full min-h-[220px] flex items-center justify-center relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.98 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="w-full bg-gray-950/40 border border-pink-500/10 rounded-[2.5rem] p-7 backdrop-blur-2xl shadow-2xl text-center flex flex-col items-center justify-center"
                                >
                                    <span className="text-4xl mb-4 block drop-shadow-[0_0_10px_rgba(244,114,182,0.2)]">
                                        {reasons[currentIndex].emoji}
                                    </span>
                                    <h2 className="text-xl font-bold text-pink-200 mb-3 tracking-wide">
                                        {reasons[currentIndex].title}
                                    </h2>
                                    <p className="text-pink-100/80 leading-relaxed text-sm antialiased font-medium px-2">
                                        {reasons[currentIndex].message}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* বাটন এরিয়া */}
                        <div className="w-full mt-8">
                            <AnimatePresence mode="wait">
                                {!isLastReason ? (
                                    /* সাধারণ নেক্সট বাটন */
                                    <motion.button
                                        key="next-btn"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleNext}
                                        className="w-full py-3.5 rounded-full border border-pink-500/30 bg-pink-950/20 hover:bg-pink-600/20 text-pink-200 hover:text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all duration-300 flex justify-center items-center gap-2"
                                    >
                                        {currentIndex + 1} - Next Reason ✨ <FaAngleDoubleRight className="text-base" />
                                    </motion.button>
                                ) : (
                                    /* লাস্ট রিজনের ফাইনাল মেসেজ বাটন */
                                    <motion.button
                                        key="final-btn"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.7, delay: 0.1 }}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setShowFinal(true)}
                                        className="w-full py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white text-xs font-bold tracking-widest uppercase shadow-[0_10px_25px_rgba(219,39,119,0.3)] hover:shadow-[0_0_35px_rgba(219,39,119,0.6)] transition-all duration-300 flex justify-center items-center gap-3"
                                    >
                                        ✨ Unfold My Final Message <FaAngleDoubleRight className="text-base" />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ) : !showTheEnd ? (
                    /* ২. ফাইনাল উইশ গ্লাস কার্ড স্ক্রিন */
                    <motion.div
                        key="final-wish-view"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-pink-500/20 shadow-[0_20px_50px_rgba(244,63,94,0.1)] relative overflow-hidden w-full text-center group"
                    >
                        {/* ডাবল ডাইনামিক গ্লো ইফেক্ট (ফাঁকা ভাব দূর করতে) */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* টপ ব্যাজ */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4 select-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                            <span className="text-[9px] font-black tracking-[0.25em] uppercase text-pink-300">
                                The Loveliest Soul
                            </span>
                        </div>

                        {/* মেইন কন্টেন্ট এরিয়া */}
                        <div className="space-y-5 my-2">
                            <p className="text-pink-100/90 font-medium leading-relaxed text-[15px] antialiased">
                                This day is so incredibly special to me, because it’s the day the most beautiful person was born.
                            </p>

                            {/* গর্জিয়াস মিডেল ডিভাইডার ও নাম */}
                            <div className="py-2 relative flex flex-col items-center justify-center">
                                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent mb-3" />

                                <span className="text-3xl sm:text-4xl font-serif italic font-black block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 drop-shadow-[0_0_20px_rgba(244,114,182,0.5)] py-1 select-none">
                                    Happy Birthday, Prity!
                                </span>

                                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent mt-3" />
                            </div>

                            <p className="text-pink-100/80 font-medium leading-relaxed text-[15px] antialiased px-1">
                                You bring so much light, color, and absolute magic into my life just by being in it. I promise to be right by your side through every single chapter of your journey. 💖
                            </p>
                        </div>

                        {/* একটি ছোট লাভ নোট সিগনেচার (স্পেস ফিল করার জন্য) */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.5 }}
                            className="text-[11px] font-serif italic text-pink-300/60 mt-6 select-none"
                        >
                            ~ crafted with love, just for you
                        </motion.p>

                        {/* ফাইনাল অ্যাকশন বাটন */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.02, shadow: "0_0_30px_rgba(219,39,119,0.5)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setShowTheEnd(true)}
                            className="w-full py-3.5 mt-5 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold tracking-widest uppercase shadow-[0_10px_30px_rgba(219,39,119,0.25)] transition-all duration-300 flex justify-center items-center gap-3"
                        >
                            Complete Journey <FaAngleDoubleRight className="text-base animate-bounce-horizontal" />
                        </motion.button>
                    </motion.div>
                ) : (
                    /* ৩. দ্য এন্ড (The End) স্ক্রিন */
                    <motion.div
                        key="the-end-view"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="text-center select-none"
                    >
                        <h2 className="text-3xl font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 drop-shadow-[0_0_20px_rgba(244,114,182,0.4)]">
                            🤍 I love you 🤍
                        </h2>
                        <p className="text-sm tracking-[0.4em] uppercase text-pink-400/60 mt-3 font-bold">
                            Forever & Always
                        </p>
                        <p className="text-xs tracking-[0.4em]  mt-3 ">
                            (Hridoy Ahmmad)
                        </p>
                        <p className="text-3xl font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 drop-shadow-[0_0_20px_rgba(244,114,182,0.4)] mt-10">The End..</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Reasons;