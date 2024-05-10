import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Home from "./components/Home";
import Exp from "./components/exp"; // Corrected import statement
import Project from "./components/Project";
import Contact from "./components/contact";
import Skills from "./components/skills";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience" element={<Exp/>}/> {/* Corrected usage of the Experience component */}
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
