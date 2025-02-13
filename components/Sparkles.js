import { motion } from "framer-motion";

const Sparkles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-sparkle"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
