import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Project from "./components/project";
import Skill from "./components/skil";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Project />
      <Skill  />
      <Footer />
    </>
  )
}

export default App;
