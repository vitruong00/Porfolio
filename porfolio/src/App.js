import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<AboutMe />} exact />
          <Route path="/work" element={<MyWork />} exact />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
