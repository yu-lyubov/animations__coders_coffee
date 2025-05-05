import React from 'react';
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
    </div>
  );
};

export default App;