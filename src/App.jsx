import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Project from "./components/project";
import SocialMedia from "./components/socialMedia";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <SocialMedia />
      <Project />
      <Footer />
    </>
  );
}

export default App;
