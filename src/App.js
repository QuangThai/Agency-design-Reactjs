import React, { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Spinner from './components/Spinner';



function App() {
  const [blogList, setBlogList] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequestBlog = async () => {
      const requestUrl = 'http://localhost:4000/blog';
      const response = await fetch(requestUrl);
      const responseJson = await response.json();
      setBlogList(responseJson);
      setLoading(false);
    }
    const fetchRequestPortfolio = async () => {
      const requestUrl = 'http://localhost:4000/portfolio';
      const response = await fetch(requestUrl);
      const responseJson = await response.json();
      setPortfolio(responseJson);
      setLoading(false);
    }
    fetchRequestPortfolio();
    fetchRequestBlog();
    // cleanup
    return () => {}
  }, []);

  return (
     (loading && blogList.length === 0 && portfolio.length === 0) ? <Spinner /> :
    <>
      <Header />
      <main className="main">
        <About />
        <Service />
        <Portfolio portfolio={portfolio} />
        <Testimonial />
        <Blog blogList={blogList} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

