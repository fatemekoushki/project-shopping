import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import "../Body/product.css";
import Products from "../Body/Products";
import "./cart.css" ;
import formatCurrency from "../Body/util";
import Navbar from "../Navbar/Navbar";
const Cart = () => {
    const { cartItems , removeCart ,incerase  , decrease } = useContext(ShopContext);

    const itemPrice = cartItems.reduce((a,c) => a + c.price * c.qty , 0 );
    const totalPrice = itemPrice ;

    return (

     <section id="cartshopping">
         <>
       <h2 className="title-cart" > سبد خرید شما </h2>
       {
        cartItems.length=== 0 ? 
        <h2 className="empty-cart" >سبد خرید شما خالی است</h2>:
        <div className="carts">
        
      <div className="cart-container">
      <div className="product-item-cart">
            {
                cartItems && cartItems.map((pro) => (
                    <div className="product-cart" key={pro.id} >
                        <div className="product-details">
                        <img src={pro.img[0]} />
                        </div>
                       
                        <div className="product-price">
                        <h2 className="title-cart-pro" >{pro.title}</h2>
                            
                            <span className="price-product" >قیمت : {formatCurrency(pro.price)} </span>
                        <div className="amount">
                                <button className="count plus" onClick={()=> incerase(pro.id)} >+</button>
                                <button className="count" onClick={()=> decrease(pro.id)} >-</button>

                            </div>
                        <span className="qty">{pro.qty} خرید </span>
                            <button className="remove-product" onClick={() => removeCart(pro)} >حذف از سبد خرید</button>
                           
                        </div>
                       
                    </div>
                ))
            }

        </div>
        <div className="total-price">
            <div className="total-text">مجموع قیمت :</div>
            <div className="total">{formatCurrency(totalPrice)}</div>
        </div>
      </div>
        

    </div>
       }
       </>
     </section>

    );
}

export default Cart;