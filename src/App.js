import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Research from "./components/Research/Research";
import Footer from "./components/Footer";
import Opportunities from "./components/Opportunities/Opportunities";
import Contact from "./components/Contact/Contact";
import People from "./components/People/People";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/teslab/" element={<Home />} />
          <Route path="/teslab/research" element={<Research />} />
          <Route path="/teslab/opportunities" element={<Opportunities />} />
          <Route path="/teslab/contact" element={<Contact />} />
          <Route path="/teslab/people" element={<People />} />
          <Route path="*" element={<Navigate to="/teslab/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
