import Products from "./Body/Products";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import PRODUCTS from "../../data";
import Filter from "./Body/Filter";
import { useContext } from "react";
import { ShopContext } from "./context/shopContext";
import Feature from "./feature/feature";
import 'react-slideshow-image/dist/styles.css'
import { FaChevronUp } from "react-icons/fa";
import { useEffect } from "react";
import "../../index.css" ;
import Derageble from "../Derageble/Derageble";
import SimpleSlider from "./slideshow/Slideshow";



const Home = () => {
    const [showBtn , setShowBtn] =  useState(false) ;
   
    useEffect(()=>{
        window.addEventListener("scroll" , function () {
            if(window.scrollY > 500){
                setShowBtn(true)
            }else{
                setShowBtn(false)
            }
    })
    } , [])
    const scrollTopBtn = ()=> {
        window.scroll({top : 0 , behavior: "smooth"})
    }
  

    return ( 
        <main>
            <header className="header-bg">
                < SimpleSlider/>
                <Feature />
                <Derageble />
             
                


            </header>
            <button onClick={scrollTopBtn}  className={showBtn ? "to-top active" : "to-top" } >
            <FaChevronUp/>

            </button>

        </main>
     );
}
 
export default Home;