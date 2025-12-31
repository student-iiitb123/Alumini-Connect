import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Server from './components/Server';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Event from './pages/Event/Event';
import Donate from './pages/Donate/Donate';
import Signup from './pages/Signup/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Header />
<Navbar />
<Routes>
  <Route path="/" element={<Server />}></Route>
<Route path="/about" element={<About />} />
<Route path="/event" element={<Event />} />
<Route path="/donate" element={<Donate />} />
<Route path="/signup" element={<Signup />} />

</Routes>
<Footer />
</BrowserRouter>
);


