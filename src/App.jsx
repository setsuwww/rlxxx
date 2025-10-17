import { Element } from 'react-scroll';

import Navbar from './components/Navbar';

import Hero from './contents/Hero';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" className="min-h-screen">
        <Hero/>
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects" id="projects">
        <Project />
      </Element>

      <Element name="contact" id='contact'>
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
