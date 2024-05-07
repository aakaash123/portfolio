import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import Navbar from './components/navbar';

import './App.css';
import Footer from "./components/footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
