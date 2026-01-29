import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Celista Logo" className="w-12 md:w-14" />
          <span className="font-orbitron text-xl md:text-2xl text-white tracking-widest">
            CELISTA <span className="text-primary">2K26</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 font-inter text-sm text-gray-300">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#events" className="hover:text-primary transition">Events</a>
          <a href="#location" className="hover:text-primary transition">Location</a>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
