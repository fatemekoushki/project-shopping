import shoseHeader from "../../../assets/shose-header.png" ;
import { MdPlace } from "react-icons/md";
import main from "../../../assets/main.png" ;
import "./header.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Aos from "aos";

const Header = () => {
    useEffect(()=> {
        Aos.init({
            duration : 1000
        })
    })
    return ( 
       <section id="header" >
        <div className="container header">
            <div className="header-right" data-aos="fade-left" >
                <h2>
                    <span> کیف و کفش آرنیا </span>
                    <span> تضمین کیفیت در سراسر ایران</span>
                    <p>  <MdPlace/> تهران- سهروردی شمالی- بالاتر از مطهری </p>
                </h2>

            </div>
            <div className="header-left" data-aos="fade-right" >
                <img src={main} />

            </div>
        </div>

       </section>
    );
}
 
export default Header;