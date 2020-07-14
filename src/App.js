import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <About/>
        <Service/>
        <Portfolio/>
        <Testimonial/>
        <Blog/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
