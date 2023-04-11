import React, { Fragment, useEffect } from "react";
// import {CgMouse} from "react-icons/all"
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Blue tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "$3000",
  _id: "abhishek",
};

function Home() {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      <MetaData title="Ecommerce " />
      <div className="banner">
        <p>Welcomer to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW </h1>
        <a href="#container">
          <button>
            Scroll
            {/* <CgMouse/> */}
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
{
    products &&products.map(product=>(

        <Product product={product}/>
    ))
}
      </div>
    </Fragment>
  );
}

export default Home;

//5:07:48
