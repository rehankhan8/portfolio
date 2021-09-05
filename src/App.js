import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
          <Nav />
          <Home />
          <About />
          <Project />
          <Skills />
          <Contact />
          <Footer />
       
    </>
  );
}

export default App;
