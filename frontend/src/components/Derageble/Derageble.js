import { useContext } from "react";
import { ShopContext } from "../Home/context/shopContext";
import formatCurrency from "../Home/Body/util";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./derageble.css";


const Derageble= () => {
    const{products , addProduct} = useContext(ShopContext);
    const settings = {
        dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };
    return ( 
        <section id="derageble" >
            <div className = "derageble">
            <Slider {...settings} >
            {
              products.map((pro) => (
                <div key={pro.id} className="product-drag"  >
                  <img src={pro.img[0]} />
                  <div className="product-title-drag">
                   <Link to={`/products/${pro.id}`}  > <h2 className="title-drag" >{pro.title}</h2></Link>
                    <span className="price-drag" >قیمت : {formatCurrency(pro.price)}</span>
                  </div>
                  <div className="btn-drag" onClick={() => addProduct(pro)} >
                    <a className="text-drag" style={{color : "#fff"}} > خرید </a>
                    <a className="icon-drag" ><FaShoppingCart  color="#fff" /></a>

                  </div>
                </div>
              ))

            }
            </Slider>
            </div>

        </section>
     );
}
 
export default Derageble;