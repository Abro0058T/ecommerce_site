import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import React, { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import { BrowserRouter } from "react-router-dom";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js"
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js"
import UpdatePassword from "./component/User/UpdatePassword.js"
import Cart from "./component/Cart/Cart.js"
function App() {

  const {isAuthenticated,user}=useSelector(state=>state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Header />
        {isAuthenticated && <UserOptions user={user}/>}
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/login" element={<LoginSignup />} />
        <Route extact path="/product/:id" element={<ProductDetails />} />
        <Route extact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route extact path="/search" element={<Search />} />
        {isAuthenticated &&

          <Route exact path="/account" element={<Profile/>}/>
        }
        {isAuthenticated &&
        <Route exact  path="/me/update" element={<UpdateProfile/>}/>
        }
           {isAuthenticated &&
        <Route exact  path="/password/update" element={<UpdatePassword/>}/>
        }

<Route exact  path="/cart" element={<Cart/>}/>
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


//8:42:36

//ProtectedRoute component was not working . 
