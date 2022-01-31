import './App.scss'
import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import Introduction from './components/introduction/Introduction'
import BestProduct from './components/best-product/BestProduct';
import ListProduct from './components/list-product/ListProduct';
import Brand from './components/brand-story/Brand';
import Issue from './components/issue/Issue';
import Video from './components/video-wrap/Video';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';


function App() {
  
  const [winDow, setWinDow] = useState(window.innerWidth);

  const handleResize = () => {
    setWinDow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winDow]);

  return (
    <>
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
      <ListProduct />
      <Brand windowWidth={winDow} />
      <Issue />
      <Video />
      <Footer />
    </>
  );
}

export default App;
