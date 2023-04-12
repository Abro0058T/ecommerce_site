
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader"
import Home from "./component/Home/Home.js"
import React ,{useEffect} from 'react';
import Footer from './component/layout/Footer/Footer';
import Loader from './component/layout/Loader/Loader';
import ProductDetails from './component/Product/ProductDetails.js'


function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
   })
  return (
    <Router>
 <Header/>
 <Routes>
 <Route extact path="/" element={<Home/>}/> 
 <Route extact path="/product/:id" element={<ProductDetails/>}/> 
 </Routes>
 <Footer/>
    </Router>
 
  );
}

export default App;
