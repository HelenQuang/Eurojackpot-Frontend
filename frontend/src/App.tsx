import React from "react";
import { Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import RulePage from "./pages/RulePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import TransactionPage from "./pages/TransactionPage";
import GameHistoryPage from "./pages/GameHistoryPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rule" element={<RulePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/history" element={<GameHistoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
