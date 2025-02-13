import { motion } from "framer-motion";
import Sparkles from "../components/Sparkles";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 text-white overflow-hidden">
      <Sparkles />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg max-w-md"
      >
        <motion.h1
          className="text-4xl font-bold text-pink-200"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Happy Valentine's Day, My Love! ❤️
        </motion.h1>

        <motion.p
          className="mt-4 text-white text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Hey babe,  
          You're my sunshine on a rainy day, my favorite chapter in this love story.  
          Every moment with you is a dream I never want to wake up from.  
          <br /> I love you more than words can say.  
        </motion.p>

        <motion.img
          src="https://source.unsplash.com/400x300/?love,couple"
          alt="Valentine"
          className="mt-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <HeartIcon className="w-10 h-10 text-red-500 animate-pulse" />
          <HeartIcon className="w-10 h-10 text-red-400 animate-pulse" />
          <HeartIcon className="w-10 h-10 text-red-300 animate-pulse" />
        </motion.div>

        <p className="mt-4 text-pink-200 font-semibold">Forever & Always, I Love You ❤️</p>
      </motion.div>
    </div>
  );
}
