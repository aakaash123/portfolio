import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Home from "./components/Home";
import Background from './components/Background';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                {/*<Background/>*/}
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
