import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative bg-black py-32 px-6"
    >
      {/* Section heading */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl md:text-5xl text-white tracking-widest"
        >
          ABOUT <span className="text-primary">CELISTA</span>
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Celista is an academic platform designed to explore innovation,
          collaboration, and emerging technologies.
        </p>
      </div>

      {/* Content blocks */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* College */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 p-8"
        >
          <h3 className="font-orbitron text-xl text-white mb-4 tracking-widest">
            THE COLLEGE
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Meenakshi Sundararajan Engineering College, established under
            the KRS Group, is known for its commitment to academic excellence,
            discipline, and holistic student development.
          </p>
        </motion.div>

        {/* Department */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="border border-white/10 p-8"
        >
          <h3 className="font-orbitron text-xl text-white mb-4 tracking-widest">
            THE DEPARTMENT
          </h3>
          <p className="text-gray-400 leading-relaxed">
            The Department of Artificial Intelligence & Data Science focuses
            on building strong foundations in AI, data-driven systems,
            and real-world problem solving through research and innovation.
          </p>
        </motion.div>

        {/* Symposium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border border-white/10 p-8"
        >
          <h3 className="font-orbitron text-xl text-white mb-4 tracking-widest">
            THE SYMPOSIUM
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Celista 2K26 is a national-level technical symposium bringing
            together students to exchange ideas, compete in technical
            challenges, and explore emerging domains in technology.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
