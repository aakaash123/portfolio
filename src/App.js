import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import Navbar from './components/navbar';

import './App.css';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Footer />
        </Router>
    </div>
  );
}

export default App;
