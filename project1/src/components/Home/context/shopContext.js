import { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import PRODUCTS from "../../../data";
export const ShopContext = createContext();


export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState(PRODUCTS);
    const [cartItems, setCartItems] = useState([]);
    const [brand, setBrand] = useState("");
    const[sort , setSort] = useState("asc");
   
 
    

  
  

    const filterBrand = (e) => {
        if (e.target.value === "همه") {
            setBrand(e.target.value);
            setProducts(PRODUCTS)
        } else {
            setBrand(e.target.value);
            setProducts(PRODUCTS.filter((pro) => pro.availableBrand.indexOf(e.target.value ) >= 0));
          
        }

    };

    const sortProduct = (e)=>{
        setSort(e.target.value)
        if(sort === "asc"){
            setProducts(PRODUCTS.sort((a,b)=> a.id < b.id ? 1 :-1 ))
        }
        if(sort === "desc"){
            setProducts(PRODUCTS.sort((a,b)=> a.id > b.id ? 1 :-1 ))
        }
    };



    const removeCart = (product) => {
          
                setCartItems(cartItems.filter((item) => item.id !== product.id))
           
       
    };

    const addProduct = (product) => {
        const exit = cartItems.find((element) => element.id === product.id);

        if (exit) {
            setCartItems(cartItems.map((cart) => cart.id === product.id ? { ...exit, qty: exit.qty + 1 } : cart))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
            Swal.fire({
                icon: "success",
                title: " به سبد خرید شما اضافه شد",
                text: "",
                showConfirmButton: true,
                showConfirmText: "تایید",
                timer: 5000
            })
        }



    };

    const incerase = (id)=> {
        cartItems.forEach((item)=> {
            if(item.id === id){
                item.qty += 1
            }
        })
        setCartItems([...cartItems])

    }
    const decrease = (id)=> {
        cartItems.forEach((item)=> {
            if(item.id === id){
                item.qty === 1 ? item.qty = 1 : item.qty -= 1
            }
        })
        setCartItems([...cartItems])

    }



    const contextValue = {cartItems,  incerase , decrease , addProduct,
         products, removeCart, filterBrand, brand  ,setProducts ,  sortProduct};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}