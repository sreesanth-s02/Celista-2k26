import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { technicalEvents, nonTechnicalEvents } from "../data/events";

function EventSection({ title, events }) {
  return (
    <div className="mb-28">
      <h3 className="font-orbitron text-2xl text-white tracking-widest mb-12">
        {title}
      </h3>

      <div className="grid md:grid-cols-2 gap-16">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              relative
              border border-white/10
              bg-white/5
              backdrop-blur-sm
              p-6
              transition
              hover:border-primary
              hover:shadow-[0_0_30px_rgba(255,26,26,0.25)]
            "
          >
            {/* Accent line */}
            <span className="absolute left-0 top-0 h-full w-[2px] bg-primary" />

            <img
              src={event.image}
              alt={event.title}
              className="w-full h-44 object-cover opacity-80 mb-6"
            />

            <h4 className="font-orbitron text-xl text-white mb-2">
              {event.title}
            </h4>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {event.description}
            </p>

            <Link
              to={`/events/${event.slug}`}
              className="
                inline-block
                border border-primary
                px-6 py-2
                text-white
                transition
                hover:text-primary
                hover:shadow-[0_0_20px_rgba(255,26,26,0.5)]
              "
            >
              View Event
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Events() {
  return (
    <section id="events" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="font-orbitron text-4xl md:text-5xl text-white tracking-widest mb-28 text-center">
          EVENTS
        </h2>

        <EventSection title="TECHNICAL EVENTS" events={technicalEvents} />
        <EventSection title="NON-TECHNICAL EVENTS" events={nonTechnicalEvents} />

      </div>
    </section>
  );
}

export default Events;
