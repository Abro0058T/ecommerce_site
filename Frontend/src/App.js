
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader"
import Home from "./component/Home/Home.js"
import React ,{useEffect} from 'react';
import Footer from './component/layout/Footer/Footer';
import Loader from './component/layout/Loader/Loader';
import ProductDetails from './component/Product/ProductDetails.js'
import Products from "./component/Product/Products.js"
import  Search   from './component/Product/Search.js';
import { BrowserRouter } from 'react-router-dom';
import LoginSignup from './component/User/LoginSignup';
import store from "./store"
import { loadUser } from './actions/userAction';

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })

    store.dispatch(loadUser());
   },[])
  return (
    <BrowserRouter>
 <Header/>
 <Routes>
 <Route extact path="/" element={<Home/>}/> 
 <Route extact path="/login" element={<LoginSignup/>}/> 

 <Route extact path="/product/:id" element={<ProductDetails/>}/> 
 <Route extact path="/products" element={<Products/>}/> 
 <Route path="/products/:keyword" element={<Products/>}/> 
 <Route extact path="/search" element={<Search/>}/> 
 </Routes>
 <Footer/>
    </BrowserRouter>
 
  );
}

export default App;
