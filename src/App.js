import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Project from './Page/Project';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App bg-black-100 h-full w-full">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Footer/>
          </>
        } />

        <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
