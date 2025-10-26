import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Contact from './pages/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      {/* Full screen container - Background yahan set karein */}
      <div className="min-h-screen">
        <Navbar />
        
        {/* Content that scrolls behind navbar */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Destinations" element={<Destinations />} />
            <Route path="/Packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;