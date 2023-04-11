
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader"
import Home from "./component/Home/Home.js"
import React ,{useEffect} from 'react';
import Footer from './component/layout/Footer/Footer';


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
 </Routes>
 <Footer/>
    </Router>
 
  );
}

export default App;
