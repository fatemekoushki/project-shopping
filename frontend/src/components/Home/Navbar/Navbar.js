import { FaShoppingBag } from "react-icons/fa";

import "./navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import { ShopContext } from "../context/shopContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [showIcon, setShowIcon] = useState(false);
    const { cartItems} = useContext(ShopContext);
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate("/login")


    }

    const toggleIcon = () => {
        setShowIcon(!showIcon);
    };

    const loginANDout = localStorage.getItem("user_name")
    return (
        <div id="navbar">
            <nav className="navbar">
           
                <div className="menu-items" onClick={toggleIcon}>
                    {showIcon ? <RiCloseLine size={25} /> : <AiOutlineBars size={25} />}
                </div>
                
               
                <div className="auth-nav">
                    {
                        localStorage.getItem("user_name") ?
                            (
                                <>
                                  
                                    <div className="leave">
                                        <span onClick={logout}  >
                                            {" "}
                                            خروج
                                        </span>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                   <div className="log">
                                   <div className="nav-login ">
                                        <NavLink to="/login" >
                                            {" "}
                                            ورود /
                                        </NavLink>
                                    </div>
                                    <div className="nav-regester">
                                        <NavLink to="/register" >
                                            {" "}
                                            ثبت نام
                                        </NavLink>
                                    </div>
                                   </div>
                                   
                                </>
                            )
                    }
                    
                </div>
              

                <div
                    className="nav-items"
                    id={showIcon ? "show-links-mobile" : "show-links-mobile-hide"}
                >

                    <div className="cart-icon">
                        <span className="notif">{cartItems.length}</span>
                        <Link to="/cart">
                            <FaShoppingBag size={18}  className="icon" />
                        </Link>

                    </div>

                    <div className="nav-item">
                        <NavLink to="/">
                            {" "}
                            خانه{" "}
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/products">
                            {" "}
                            محصولات
                        </NavLink>
                    </div>


                    <div className="nav-item">
                        <Link to="/relation" style={{ color: "#333" }}>
                            ارتباط با ما{" "}
                        </Link>
                    </div>
                    
                </div>

                
               
                <div className="nav-logo">
                    <SiAnaconda color="black" size={25} />
                    <p className="logo-text">
                        Arni
                        <span>a</span>
                    </p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
