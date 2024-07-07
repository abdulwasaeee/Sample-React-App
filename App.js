import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Items from "./components/items";
import Login from "./components/login";
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Sample-React-App" element={<DefaultContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

function DefaultContent() {
  return (
    <div className="default-content">
      <h3>Welcome to my First React Project</h3>
      <p>Please click on a link above to navigate and look into the pages</p>
    </div>
  );
}

export default App;
