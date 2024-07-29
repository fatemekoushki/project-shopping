import { FaShoppingCart } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import "./filter.css" ;
import { useContext, useState  , useEffect} from "react";
import { ShopContext } from "../context/shopContext";
import 'aos/dist/aos.css'; 
import Aos from "aos";

const Filter = () => {
    const {filterBrand ,brand , sortProduct ,cartItems } = useContext(ShopContext);
    useEffect(()=> {
        Aos.init({
            duration : 1500
        })
    })

    return ( 
        <div id="filter">
          
            <div className="sort">
                <div className="sort-title" >   مرتب سازی بر اساس   : </div>
                <div className="form-checkbox"  >
                    <div className="form-group">
                        <input type="radio" name="input" value="asc" onChange={sortProduct} />
                        <lable>جدید ترین محصولات</lable>
                    </div>
                    <div className="form-group">
                        <input type="radio"    name="input" value="desc" onChange={sortProduct} />
                        <lable>قدیمی ترین محصولات</lable>
                    </div>
                </div>
            </div>
            <div className="brand" > 
               <span> برندها  :</span>
                <select value={brand} onChange={filterBrand}  >
                    <option  value="همه" >همه</option>
                    <option  value="آدیداس" >آدیداس</option>
                    <option  value="نیوبالانس" >نیوبالانس</option>
                    <option  value="آذرا" >آذرا</option>
                    <option  value="نایک" > نایک</option>

                </select>
            </div>
            <div className="shopping-cart" data-aos="fade-right" >
            <NavLink  to="/cart" >
             <FaShoppingCart color="#777"  />
             <span className="notif" >{cartItems.length}</span>
            </NavLink>
            </div>
        </div>
     );
}
 
export default Filter;