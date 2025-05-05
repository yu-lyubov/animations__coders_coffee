import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Location from "./components/Location/Location.jsx";
import AppBanner from "./components/AppBanner/AppBanner.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Location />
      <AppBanner />
      <Footer />
    </div>
  );
};

export default App;