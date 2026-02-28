import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Shop from "./Shop";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/about" className="link">About</Link>
        <Link to="/home" className="link">Home</Link>
        <Link to="/shop" className="link">Shop</Link>
        <Link to="/contactus" className="link">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;