import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import RulePage from "./pages/RulePage";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rule" element={<RulePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
