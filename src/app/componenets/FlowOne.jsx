"use client";

import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import Reasons from "./Reasons";

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

        window.addEventListener(
            "resize",
            updateSize
        );

        return () => window.removeEventListener(
            "resize",
            updateSize
        );
    }, []);

    const handleOpen = () => {
        setOpen(true);

        setTimeout(() => {
            audioRef.current?.play();
        }, 300);
    };

    const textAnimation = {
        initial: {
            opacity: 0,
            y: -60
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.7
        }
    };

    const buttonAnimation = {
        initial: {
            opacity: 0,
            y: 80
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.7,
            delay: 0.3
        }
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 bg-linear-to-b from-pink-200 via-pink-100 to-rose-200">
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
                    <h1 className="text-3xl font-bold text-pink-700 leading-snug">
                        Hey
                        <br />
                        <span className="text-5xl italic text-rose-600">
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
                        className="mt-8 px-8 py-3 rounded-full bg-pink-600 text-white font-semibold shadow-lg"
                    >
                        🎁 Open Surprise
                    </motion.button>
                </motion.div>
            ) : !showLetter ? (
                <motion.div
                    {...textAnimation}
                    className="relative z-10 text-center"
                >
                    {balloons.map((item, index) => (
                        <span
                            key={index}
                            className="absolute text-4xl animate-bounce"
                            style={{
                                left: item.left,
                                top: item.top
                            }}
                        >
                            🎈
                        </span>
                    ))}

                    <div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            className="text-6xl"
                        >
                            🎂
                        </motion.div>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: -50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2
                            }}
                            className="mt-3 text-4xl font-black text-pink-600"
                        >
                            Happy
                            <br />
                            Birthday
                        </motion.h1>

                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: -40
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.4
                            }}
                            className="mt-2 text-4xl italic font-bold text-rose-600"
                        >
                            Prity ❤️
                        </motion.h2>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 40
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.6
                            }}
                            className="mt-4 text-gray-700"
                        >
                            Wishing you endless happiness ✨
                        </motion.p>

                        <motion.button
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.8
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            onClick={() => setShowLetter(true)}
                            className="mt-8 px-7 py-3 rounded-full bg-rose-600 text-white font-semibold"
                        >
                            💌 Click here to see more
                        </motion.button>
                    </div>
                </motion.div>
            ) : !showGallery ? (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -50
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className="z-10 max-w-sm bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl text-center"
                >
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: -40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        className="text-4xl font-bold text-pink-600"
                    >
                        Dear Prity ❤️
                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3
                        }}
                        className="mt-5 text-gray-700 leading-relaxed"
                    >
                        Happy Birthday 🎂
                        <br /><br />
                        May your life always be full of happiness,
                        smiles and beautiful moments.
                        <br /><br />
                        Keep smiling always ❤️
                    </motion.p>

                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 80
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.6
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowGallery(true)}
                        className="mt-8 px-8 py-3 rounded-full bg-pink-600 text-white font-semibold"
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