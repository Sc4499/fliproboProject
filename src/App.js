import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar'
import Hero from './Hero';
import Exprience from './Exprience';
import Testimonial from './Testimonial';
import Myblog from './Myblog';
import Footer from './Footer';
import Tabed from './Tabed';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<Exprience />} />
          <Route path="/expone" element={<Exprience myEducation={true} />} />
          <Route path="/portfolio" element={<Tabed />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/myblog" element={<Myblog />} />
        </Routes>

        <Footer />
      </Router>

    </>
  )

}

export default App;
