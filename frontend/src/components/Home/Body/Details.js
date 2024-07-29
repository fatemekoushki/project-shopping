import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import "./details.css" ;
import formatCurrency from "./util";
import { FaShoppingCart } from "react-icons/fa";
import { BsMenuUp } from "react-icons/bs";


const Details = () => {
    const {id} = useParams() ;
  const{products , addProduct} = useContext(ShopContext);
  const [index , setIndex] = useState(0) ;
  const imgDiv = useRef() ;

    
    const details = products.filter( (pro , index) => {
            return pro.id == id
    } );
    console.log(id)
    const handleMouseMove = (e)=> {
        const {left , top , width , height} = e.target.getBoundingClientRect() ;
        const x = (e.pageX - left)/ width * 100 ;
        const y = (e.pageY - top) / height * 100 ;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}% ` ;

    }

   
    return ( 
        <> 
        {
            details.map((product)=> (
                <div className="details">
                    <div className="image-container" 
                     style={{backgroundImage : `url(${product.img[index]})`}}
                     onMouseMove={handleMouseMove } 
                     ref={imgDiv}
                     onMouseLeave={()=> imgDiv.current.style.backgroundPosition = `center`}
                     ></div>
                    <div className="box-details">
                        <h2  style={{color : "#333"}} >{product.title}</h2>
                        <h3>قیمت :  {formatCurrency(product.price)}  </h3>
                        <p>{product.description}</p>
                        <button className= "btn-addproduct" onClick={()=> addProduct(product)}  >افزودن به سبد خرید</button>
                       
                        <div className="thumb">
                            {
                                product.img.map((img , index)=>(
                                    <img src={img} onClick={()=> setIndex(index)}  />
                                ))
                            }
                        </div>

                    
                    </div>
                </div>
            ) )
        }
        </>
     );
}
 
export default Details;