import { useParams, useNavigate } from "react-router-dom";
import { technicalEvents, nonTechnicalEvents } from "../data/events";

function EventDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const allEvents = [...technicalEvents, ...nonTechnicalEvents];
  const event = allEvents.find((e) => e.slug === name);

  if (!event) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        Event not found
      </div>
    );
  }

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="bg-black min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <button
          onClick={handleBack}
          className="mb-10 text-gray-400 hover:text-primary transition"
        >
          ← Back to Events
        </button>

        <h1 className="font-orbitron text-4xl text-white mb-6">
          {event.title}
        </h1>

        <p className="text-gray-400 mb-12 leading-relaxed">
          {event.description}
        </p>

        <a
          href={event.form}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            border border-primary
            px-8 py-3
            text-white
            hover:text-primary
            hover:shadow-[0_0_25px_rgba(255,26,26,0.5)]
            transition
          "
        >
          Register Now
        </a>
      </div>
    </section>
  );
}

export default EventDetails;
