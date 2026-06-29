"use client";

import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import Reasons from "./Reasons";
import Image from "next/image";
import { FaAngleDoubleRight, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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

    const handleBack = () => {
        if (showReasons) {
            setShowReasons(false);
            return;
        }

        if (showGallery) {
            setShowGallery(false);
            return;
        }

        if (showLetter) {
            setShowLetter(false);
            return;
        }

        if (open) {
            setOpen(false);
        }
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

    const BackButton = () => (
        <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleBack}
            aria-label="Go back"
            className="fixed left-10 top-10 z-30 text-pink-100 hover:text-white drop-shadow-[0_0_12px_rgba(244,114,182,0.7)] transition-colors"
        >
            <FaArrowAltCircleLeft className="text-4xl" />
        </motion.button>
    );

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-5">
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

            {open && !showGallery && !showReasons && <BackButton />}

            {!open ? (
                <motion.div
                    {...textAnimation}
                    className="text-center"
                >
                    <div className="flex justify-center my-6">
                        <div className="relative p-1 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-rose-600 shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-transform duration-500 hover:scale-105">
                            {/* ইমেজের চারপাশে ডার্ক গ্লাস রিং */}
                            <div className="rounded-full overflow-hidden bg-gray-950 w-32 h-32 sm:w-[150px] sm:h-[150px] flex items-center justify-center border border-white/10">
                                {/* <Image
                                    alt="Us"
                                    src="/us.jpg"
                                    height={150}
                                    width={150}
                                    className="w-full h-full object-cover"
                                /> */}
                                <p> <span className="text-serif font-bold text-6xl">24</span> <br /> Oct</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] uppercase text-rose-400/80 font-bold">
                        Happy Birthday <br />   To My Universe
                    </h1>
                    <h2 className="text-4xl sm:text-5xl font-serif italic text-pink-100 my-3 sm:my-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      Tasfiah Haque Prity
                    </h2>
                    <p className="text-base sm:text-xl font-medium text-pink-100/90 leading-relaxed">
                        If the entire world was a blank canvas, you would be my brightest star.
                    </p>
                    <p className="mt-5 sm:mt-6 text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                        I created this little corner just for you ✨
                    </p>

                    <motion.button
                        {...buttonAnimation}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={handleOpen}
                        className="mt-7 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_25px_rgba(219,39,119,0.7)] transition-all"
                    >
                        🎁 Open Surprise
                    </motion.button>
                </motion.div>
            ) : !showLetter ? (
                <motion.div
                    {...textAnimation}
                    className="relative z-10 text-center max-w-sm mx-auto px-4"
                >
                    <div>
                        {/* কেক ইমোজি বদলে লাভ আইকন উইথ গ্লো */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]"
                        >
                            ✨❤️✨
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-4 text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-pink-300/70 font-bold"
                        >
                            Celebrating the birth of
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-5xl sm:text-6xl font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 drop-shadow-[0_0_20px_rgba(251,113,133,0.4)] py-2"
                        >
                            Prity
                        </motion.h2>

                        {/* ইমেজ কন্টেইনার */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex justify-center my-5 sm:my-6"
                        >
                            <div className="relative p-1 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-600 shadow-[0_0_25px_rgba(236,72,153,0.5)]">
                                <div className="rounded-full overflow-hidden bg-gray-900 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border border-white/10">
                                    <Image
                                        alt="Prity"
                                        src="/prity.jpg"
                                        height={112}
                                        width={112}
                                        className="w-full h-full object-cover scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="mt-4 text-sm sm:text-lg text-pink-100/90 font-medium leading-relaxed"
                        >
                            May this birthday bring you as much joy as your presence brings to my heart... ✨❤️
                        </motion.p>

                        <div className="flex justify-center">
                            <motion.button
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowLetter(true)}
                                className="group relative mt-7 sm:mt-8 w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center cursor-pointer"
                            >
                                {/* Heart shape background */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="absolute inset-0 w-full h-full drop-shadow-[0_4px_20px_rgba(219,39,119,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(219,39,119,0.8)] transition-all duration-300"
                                >
                                    <defs>
                                        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#db2777" />
                                            <stop offset="100%" stopColor="#e11d48" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
                                        fill="url(#heartGrad)"
                                    />
                                </svg>

                                {/* Text */}
                                <div className="flex flex-col justify-center items-center">
                                    <span className="relative z-10  text-center text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase leading-tight">
                                        Click Here Open <br /> My Heart
                                    </span>
                                    <FaArrowAltCircleRight className="text-xl z-10 " />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            ) : !showGallery ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 max-w-sm bg-gradient-to-b from-gray-950/60 to-gray-950/20 backdrop-blur-2xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-pink-500/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-center relative overflow-hidden"
                >
                    {/* ব্যাকগ্রাউন্ডে একটা সফট গ্লো */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-pink-400/80 mb-2"
                    >
                        My Personal Letter
                    </motion.h1>

                    <motion.h2
                        className="text-3xl sm:text-4xl font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]"
                    >
                        Dearest Prity... ❤️
                    </motion.h2>

                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent mx-auto my-5" />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-pink-100/90 leading-relaxed font-medium text-sm sm:text-base text-justify px-1 antialiased"
                    >
                        Sometimes, I look at you and wonder how one single person can bring so much light into my life. You are my peaceful escape, my happiest thought, and the beautiful melody behind my every smile.
                        <br /><br />
                        I don`t just want to be a part of your happy days; I want to hold your hand through the stormy ones too. Thank you for being my constant, my love, and my absolute favorite human.
                    </motion.p>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent mx-auto my-6" />

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowGallery(true)}
                        className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-bold tracking-wide shadow-[0_10px_25px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.6)] transition-all uppercase text-xs sm:text-sm flex justify-center items-center gap-2"
                    >
                        ✨ Unfold Our Memories <FaAngleDoubleRight className="text-xl" />
                    </motion.button>
                </motion.div>
            ) : !showReasons ? (
                <motion.div
                    {...textAnimation}
                    className="z-10"
                >
                    <Gallery
                        onNext={() => setShowReasons(true)}
                        onBack={handleBack}
                    />
                </motion.div>
            ) : (
                <motion.div
                    {...textAnimation}
                    className="z-10"
                >
                    <Reasons onBack={handleBack} />
                </motion.div>
            )}
        </main>
    );
};

export default FlowOne;
