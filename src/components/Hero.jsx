import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import SmartTimer from "./SmartTimer";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black pt-36 pb-24"
    >
      {/* Soft background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/15 via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <img
            src={logo}
            alt="Celista Logo"
            className="
              w-40 md:w-56 mx-auto
              opacity-90
              mix-blend-lighten
              drop-shadow-[0_0_20px_rgba(255,26,26,0.25)]
            "
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            font-orbitron text-5xl md:text-7xl text-white tracking-widest mb-6
          "
        >
          CELISTA <span className="text-primary">2K26</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-20"
        >
          A National Level Technical Symposium<br />
          Department of Artificial Intelligence & Data Science
        </motion.p>

        {/* Timer */}
        <SmartTimer />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center gap-8"
        >
          <a
            href="#events"
            className="
              px-10 py-4 border border-primary
              text-white transition
              hover:text-primary
              hover:shadow-[0_0_30px_rgba(255,26,26,0.5)]
            "
          >
            Explore Events
          </a>

          <a
            href="#about"
            className="
              px-10 py-4 border border-white/30
              text-white transition
              hover:bg-white hover:text-black
            "
          >
            About Celista
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
