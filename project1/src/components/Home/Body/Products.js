import react from "react";
import { useState, useEffect } from "react";
import "./product.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import formatCurrency from "./util";
import 'aos/dist/aos.css';
import Aos from "aos";
import Filter from "./Filter";
import { Link } from "react-router-dom";



const Products = () => {
  const{products , addProduct} = useContext(ShopContext);
 


  return (
    <>
    <Filter />
      <section id="products">
        <div className="container products">
          <div className="product-item">

            {
              products.map((pro) => (
                <div key={pro.id} className="product">
                 <Link to={`/products/${pro.id}`} > <img src={pro.img[0]} /></Link>
                  <div className="title-price">
                   <Link to={`/products/${pro.id}`}  > <h2 className="title-product" >{pro.title}</h2></Link>
                    <span className="price-product" >قیمت : {formatCurrency(pro.price)}</span>
                  </div>
                  <div className="btn-cart" onClick={() => addProduct(pro)} >
                    <a className="btn-text" style={{color : "#fff"}} > خرید </a>
                    <a className="btn-icon" ><FaShoppingCart  color="#fff" /></a>

                  </div>
                </div>
              ))

            }


          </div>

        </div>
      </section>
    </>
  );

}

export default Products;