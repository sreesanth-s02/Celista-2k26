import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScreenLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, letterSpacing: "0.25em" }}
        transition={{ duration: 1 }}
        className="font-orbitron text-sm text-gray-300 mb-6"
      >
        INITIALIZING CELISTA
      </motion.p>

      {/* Progress bar */}
      <div className="w-56 h-[2px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-gray-500">{progress}%</p>
    </div>
  );
}

export default ScreenLoader;
