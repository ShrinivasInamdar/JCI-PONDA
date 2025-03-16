import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Reports from './pages/Reports';
import Contact from './pages/Contact';
import Developer from './pages/Developer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/developer" element={<Developer />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;