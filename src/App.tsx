import { Terminal, Shield, Bug, Code2, Mail, Github, Linkedin, FileCode } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
