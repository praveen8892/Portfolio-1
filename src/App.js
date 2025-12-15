import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <title>My Portfolio</title>
      <Header />
      <main className="container mx-auto p-4 pb-20">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
