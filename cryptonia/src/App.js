import React, {useRef} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import LowerHeader from './components/LowerHeader';
import CryptoTable from './components/cryptoTable';
import SellingPoint from './components/SellingPoint';
import LowerContent from './components/LowerContent';
import Footer from './components/footer.js';
import { Power3} from 'gsap'




function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <HeroSection/> 
      <LowerHeader/>
      <CryptoTable/>
      <SellingPoint/>
      <LowerContent/>
      <Footer/>
    </React.Fragment>
  );
  
}

export default App;
