import React from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Testimonial from './components/Testimonial';





function App() {
  // const [blogList, setBlogList] = useState([]);
  // const [portfolio, setPortfolio] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchAPi = async (url, cb) => {
  //   const response = await fetch(url);
  //   const responseJson = await response.json();
  //   cb(responseJson);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchAPi('http://localhost:4000/portfolio', setPortfolio);
  //   fetchAPi('http://localhost:4000/blog', setBlogList);
  //   // cleanup
  //   return () => { }
  // }, []);
  // eslint-disable-next-line no-undef

  return (
    //loading ? <Spinner /> :
      <>
        <Header />
        <main className="main">
          <About />
          <Service />
          <Portfolio />
          <Testimonial />
          <Blog/>
          <Contact />
        </main>
        <Footer />
      </>
  );
}

export default App;

