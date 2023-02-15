import React from "react";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Project from "./components/project";
import Skill from "./components/skil";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Skill />
      <Project />
    </>
  );
}

export default App;
