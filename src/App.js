import React, { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spinner from './components/Spinner';



function App() {
  const [blogList, setBlogList] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAPi = async (url, cb) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    cb(responseJson);
    setLoading(false);
  }
  useEffect(() => {
    fetchAPi('http://localhost:4000/portfolio', setPortfolio);
    fetchAPi('http://localhost:4000/blog', setBlogList);
    // cleanup
    return () => { }
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

