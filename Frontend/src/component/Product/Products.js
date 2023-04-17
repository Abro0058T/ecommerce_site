import React, { Fragment, useEffect } from 'react'
import "./Products.css"
import { useSelector,useDispatch } from 'react-redux'
import { cleaerErrors,getProduct } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard.js'
import { useParams } from 'react-router-dom'
import { Pagination } from 'react-js-pagination'

function Products() {
    const {keyword}=useParams()
    console.log(keyword)
    const dispatch=useDispatch();
    const {products,loading  ,error,productsCount}=useSelector((state)=>state.products)
    useEffect(()=>{
        dispatch(getProduct(keyword))
        console.log(loading)
    },[dispatch,keyword])
  return (
    <Fragment>
        {
            loading ? (<Loader/>): (
            <Fragment>
                <h2 className="productsHeading">Products</h2>
                <div className="products">
                    {
                        products &&
                        products.map((product)=>(

                            <ProductCard key={product._id} product={product}/>
                        ))
                    }
                </div>
                <div className="paginationBox">
                    <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemsClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkCLass="prageLinkActive"  
                    />
                </div>
            </Fragment>)
        }
    </Fragment>
  )
}

export default Products


//6:50:48