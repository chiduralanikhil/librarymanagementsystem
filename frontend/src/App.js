import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Updatebook from "./pages/Updatebook";
import Addbook from "./pages/Addbook";
import Getall from "./pages/Getall";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getall />} />
        <Route path="/update" element={<Updatebook />} />
        <Route path="/addbook" element={<Addbook />} />
      </Routes>
    </Router>
  );
};

export default App;

