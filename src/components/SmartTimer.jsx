import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-02-23T00:00:00");

function SmartTimer() {
  const [timeLeft, setTimeLeft] = useState({});
  const [floating, setFloating] = useState(false);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = EVENT_DATE - new Date();
      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Floating logic (RELIABLE)
  useEffect(() => {
    const hero = document.getElementById("home");

    const onScroll = () => {
      if (!hero) return;
      const heroHeight = hero.offsetHeight;
      setFloating(window.scrollY > heroHeight - 150);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        z-50 transition-all duration-300
        ${floating
          ? "fixed bottom-6 right-6"
          : "relative mt-16"}
      `}
    >
      <div
        className="
          bg-black/80 backdrop-blur
          border border-white/20
          rounded-xl px-10 py-5
        "
      >
        <p className="text-center text-gray-400 tracking-widest text-xs mb-3">
          EVENT STARTS IN
        </p>

        <div className="grid grid-cols-4 gap-6 text-center font-orbitron text-white">
          {["days", "hours", "minutes", "seconds"].map((k) => (
            <div key={k}>
              <p className="text-2xl">{timeLeft[k] ?? "00"}</p>
              <p className="text-[10px] text-gray-400 uppercase">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SmartTimer;
