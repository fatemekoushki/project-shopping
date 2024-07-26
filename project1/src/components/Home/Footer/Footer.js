import React from 'react';
import "./footer.css" ;
import logo from "../../../assets/logo.png" ;
import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./footer.css" ;
import Relation from '../Call/Relation';
const Footer = () => {
    return ( 
        <section id="footer">
          <div className='footer'>
          <div className="contact">
                <h2 > کیف و کفش آرنیا</h2>
                <div className="footer-concat">
                    <p><FaMapMarkerAlt/>&nbsp; آدرس : تهران - سهروردی شمالی </p>
                    <p><FaPhoneAlt/>&nbsp; تلفن : 09811111111111</p>
                    <p><FaFax/>&nbsp; فکس : 09811111111111</p>
                    <p><FaEnvelope/>&nbsp; ایمیل : fatemekoushki&gmail.com </p>
                    <p><FaEnvelope/>&nbsp; وبسایت : fatemekoushki&gmail.com </p>
                    <p><FaEnvelope/>&nbsp; ارتباط با ما  : پیام خود را برای ما بفرست</p>


                </div>

            </div>
            <div className="quick-access">
                <h4>لینک های مفید</h4>
               <div className="footer-links">
               <a href="#" >&bull; پشتیبانی  </a>
                <a href="#" >&bull; درباره ما</a>
                <a href="#" >&bull; آموزش </a>
                <a href="#" >&bull; هاستینگ </a>
                <a href="#" >&bull; پیام رسان </a>
               </div>
            </div>
          </div>
          
          <h3>ساخته شده توسط فاطمه کوشکی</h3>
           
        </section>
     );
}
 
export default Footer;