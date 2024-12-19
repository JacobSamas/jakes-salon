"use client";

import { motion } from "framer-motion";
import { ScissorsIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-purple-800 text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 left-20 bg-brand-light w-40 h-40 rounded-full opacity-20"
        initial={{ x: -50, y: 50 }}
        animate={{ x: 50, y: -50 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-10 bg-brand-pink w-56 h-56 rounded-full opacity-30"
        initial={{ x: 50, y: -50 }}
        animate={{ x: -50, y: 50 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Hero Content */}
      <div className="text-center max-w-4xl px-6 z-10">
        {/* Hero Headline */}
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Indulge in Luxury at{" "}
          <span className="underline">Jake&apos;s Salon</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl mb-8 font-light text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where style meets sophistication. Transform your look with our premium
          services.
        </motion.p>

        {/* CTA Button */}
        <div className="flex justify-center mt-4">
          <motion.button
            className="px-8 py-4 text-lg font-semibold bg-white text-brand-dark rounded-full shadow-lg relative flex items-center space-x-2"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 111, 181, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <CalendarIcon className="w-6 h-6 text-brand-dark" />
            <span>Book Your Appointment</span>

            {/* Button Glow Animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-pink-400 opacity-50 blur-xl z-[-1]"
              animate={{
                opacity: [0.6, 0.8, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.button>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center mt-10 space-x-12">
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <ScissorsIcon className="w-12 h-12 text-yellow-300 mb-2" />
            <span className="text-gray-200 text-lg">Expert Stylists</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <StarIcon className="w-12 h-12 text-pink-500 mb-2" />
            <span className="text-gray-200 text-lg">Top-Rated Service</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <CalendarIcon className="w-12 h-12 text-purple-400 mb-2" />
            <span className="text-gray-200 text-lg">Easy Booking</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
