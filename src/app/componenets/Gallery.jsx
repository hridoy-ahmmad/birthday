"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaAngleDoubleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
];

const Gallery = ({ onNext, onBack }) => {
    return (
        <div className="z-10 px-3 px-5 text-center max-w-md mx-auto relative">
            <motion.button
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={onBack}
                aria-label="Go back"
                className="absolute left-1 -top-1 z-30 text-pink-100 hover:text-white drop-shadow-[0_0_12px_rgba(244,114,182,0.7)] transition-colors"
            >
                <FaArrowAltCircleLeft className="text-xl" />
            </motion.button>

            {/* ব্যাকগ্রাউন্ডে জাদুকরী গ্লো ইফেক্ট */}
            <div className="absolute -top-20 inset-x-0 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* হেডিং টাইপোগ্রাফি আপগ্রেড */}
            <div className="mb-8">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-pink-400/80 block mb-1"
                >
                    A Journey Through Time
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl sm:text-5xl font-serif italic font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.3)] py-1"
                >
                    Our Memories 
                </motion.h1>
            </div>

            {/* প্রিমিয়াম ইমেজ গ্রিড কন্টেইনার */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
              relative rounded-[1.5rem] sm:rounded-[2rem] 
              overflow-hidden 
              shadow-[0_15px_35px_rgba(0,0,0,0.4)] 
              bg-gray-950/40 
              backdrop-blur-xl 
              border 
              border-pink-500/10 
              hover:border-pink-500/30
              transition-colors duration-500
              ${index === 2 ? "col-span-2" : ""}
            `}
                    >
                        <Image
                            src={photo}
                            alt={`memory ${index + 1}`}
                            width={500}
                            height={500}
                            className="w-full h-36 sm:h-44 object-cover filter brightness-[0.95] hover:brightness-105 transition-all duration-500"
                        />
                        {/* ছবির উপরে হালকা সফট ডার্ক ওভারলে—যা লাক্সারি সিনেমাটিক লুক দেয় */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* আগের সাধারণ সাবটাইটেল পরিবর্তন করে রোমান্টিক লাইন */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 sm:mt-8 text-pink-100/80 text-sm sm:text-base font-medium italic tracking-wide px-2 sm:px-4"
            >
                Every single frame holds a story, and every story begins with you... ✨
            </motion.p>

            {/* বাটন গ্লো ও থিম সিঙ্ক */}
            <div className="flex justify-center">
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={onNext}
                    className="mt-7 sm:mt-8 px-5 sm:px-8 py-3 sm:py-3.5 flex justify-center items-center gap-2 w-full sm:w-auto rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white text-[11px] sm:text-sm font-bold tracking-[0.12em] sm:tracking-widest uppercase shadow-[0_10px_25px_rgba(219,39,119,0.3)] hover:shadow-[0_0_35px_rgba(219,39,119,0.6)] transition-all duration-300"
                >
                    💖 Why You`re My Everything?  <FaAngleDoubleRight className="text-xl" />
                </motion.button>
            </div>
        </div>
    );
};

export default Gallery;
