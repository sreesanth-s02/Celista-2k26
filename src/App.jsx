import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Location from "./components/Location";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";


function App() {
  return (
    <BrowserRouter>
      <LayoutGroup>
        {/* Navbar always visible */}
        <Navbar />
        <CustomCursor />

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Events />
                <Location />
                <Footer />
              </>
            }
          />

          {/* Event details page */}
          <Route path="/events/:name" element={<EventDetails />} />
        </Routes>
      </LayoutGroup>
    </BrowserRouter>
  );
}

export default App;
