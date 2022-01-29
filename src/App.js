import './App.scss'
import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import Introduction from './components/introduction/Introduction'
import BestProduct from './components/best-product/BestProduct';
import ListProduct from './components/list-product/ListProduct';
import Brand from './components/brand-story/Brand';
import Issue from './components/issue/Issue';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
      <ListProduct />
      <Brand />
      <Issue />
    </>
  );
}

export default App;
