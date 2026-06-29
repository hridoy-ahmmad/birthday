"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
];

const Gallery = ({ onNext }) => {
  return (
    <div className="z-10 px-5 text-center">
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
          duration: 0.7
        }}
        className="text-4xl font-bold text-pink-600 mb-4"
      >
        Beautiful Memories ❤️
      </motion.h1>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.7
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.5
            }}
            whileTap={{
              scale: 0.95
            }}
            className={`
              rounded-3xl 
              overflow-hidden 
              shadow-xl 
              bg-white
              ${index === 2 ? "col-span-2" : ""}
            `}
          >
            <Image
              src={photo}
              alt={`memory ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-44 object-cover"
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.8
        }}
        className="mt-8 text-gray-700 text-lg"
      >
        Every moment is special ✨
      </motion.p>

      <motion.button
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 1
        }}
        whileTap={{
          scale: 0.9
        }}
        onClick={onNext}
        className="mt-8 px-8 py-3 rounded-full bg-pink-600 text-white font-semibold shadow-lg"
      >
        ❤️ Why You are Special
      </motion.button>
    </div>
  );
};

export default Gallery;