"use client";

import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import Reasons from "./Reasons";
import Image from "next/image";

const balloons = [
    { left: "8%", top: "8%" },
    { left: "80%", top: "10%" },
    { left: "20%", top: "18%" },
    { left: "70%", top: "20%" },
];

const FlowOne = () => {
    const [open, setOpen] = useState(false);
    const [showLetter, setShowLetter] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showReasons, setShowReasons] = useState(false);

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    const audioRef = useRef(null);

    useEffect(() => {
        const updateSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateSize();

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => {
            audioRef.current?.play();
        }, 300);
    };

    const textAnimation = {
        initial: { opacity: 0, y: -60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 }
    };

    const buttonAnimation = {
        initial: { opacity: 0, y: 80 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.3 }
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-5">
            <audio ref={audioRef}>
                <source src="/birthday.mp3" type="audio/mpeg" />
            </audio>

            {open && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={200}
                    recycle={false}
                />
            )}

            {!open ? (
                <motion.div
                    {...textAnimation}
                    className="text-center"
                >
                    {/* ডার্ক থিমে টেক্সট ফুটিয়ে তোলার জন্য কালার পরিবর্তন করা হলো */}
                    <h1 className="text-3xl font-bold text-pink-100 leading-snug drop-shadow-[0_2px_10px_rgba(244,63,94,0.2)]">
                        Hey
                        <br />
                        <span className="text-6xl italic font-black text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.6)]">
                            Prity
                        </span>
                        <br />
                        I made something special for you ❤️
                    </h1>

                    <motion.button
                        {...buttonAnimation}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={handleOpen}
                        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_25px_rgba(219,39,119,0.7)] transition-all"
                    >
                        🎁 Open Surprise
                    </motion.button>
                </motion.div>
            ) : !showLetter ? (
                <motion.div
                    {...textAnimation}
                    className="relative z-10 text-center"
                >
                   

                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl drop-shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                        >
                            🎂
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-3 text-4xl font-black text-pink-200"
                        >
                            Happy
                            <br />
                            Birthday
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="mt-2 text-6xl italic font-extrabold text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]"
                        >
                            Prity
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex justify-center my-6">
                            <div className="relative p-1 rounded-full bg-linear-to-tr from-pink-500 via-rose-500 to-pink-600 shadow-[0_0_20px_rgba(236,72,153,0.6)] animate-pulse">
                                <div className="rounded-full overflow-hidden bg-gray-900 w-25 h-25 flex items-center justify-center">
                                    <Image
                                        alt="Prity"
                                        src="/prity.jpg"
                                        height={100}
                                        width={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="mt-4 text-pink-100/80 font-medium"
                        >
                            Wishing you endless happiness ✨
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowLetter(true)}
                            className="mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold shadow-[0_0_20px_rgba(225,29,72,0.4)]"
                        >
                            💌 Click here to see more
                        </motion.button>
                    </div>
                </motion.div>
            ) : !showGallery ? (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    // লেটার বক্সটিকে সাদা থেকে পরিবর্তন করে প্রিমিয়াম ডার্ক গ্লাস ইফেক্ট দেওয়া হলো
                    className="z-10 max-w-sm bg-gray-950/40 backdrop-blur-xl p-6 rounded-3xl border border-pink-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-pink-300 drop-shadow-[0_0_10px_rgba(244,114,182,0.4)]"
                    >
                        Dear Prity ❤️
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-5 text-pink-100/90 leading-relaxed font-medium"
                    >
                        Happy Birthday 🎂
                        <br /><br />
                        May your life always be full of happiness,
                        <br />
                        smiles and beautiful moments.
                        <br /><br />
                        Keep smiling always ❤️
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowGallery(true)}
                        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold shadow-[0_4px_15px_rgba(219,39,119,0.4)]"
                    >
                        📸 See Memories
                    </motion.button>
                </motion.div>
            ) : !showReasons ? (
                <motion.div
                    {...textAnimation}
                    className="z-10"
                >
                    <Gallery
                        onNext={() => setShowReasons(true)}
                    />
                </motion.div>
            ) : (
                <motion.div
                    {...textAnimation}
                    className="z-10"
                >
                    <Reasons />
                </motion.div>
            )}
        </main>
    );
};

export default FlowOne;