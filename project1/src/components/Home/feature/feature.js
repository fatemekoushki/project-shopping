import React, { useEffect } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaRedoAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import "./feature.css" ;


const Feature = () => {
    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })
    return ( 
        <section id='feature' >
            <div className='feature'>
                <div className='transfor' data-aos="fade-left" >
                    <FaCar color='#bc6c25'  size={28} />
                    <h4>حمل و نقل رایگان</h4>
                </div>
                <div className='credit-shoping'  data-aos="fade-right" >
                    <FaHandshake color='#bc6c25'  size={28} />
                    <h4>خرید اعتباری</h4>
                </div>
                <div className='support'data-aos="fade-left" >
                    <FaHeadset color='#bc6c25'  size={28} />
                    <h4>پشتبانی در ساعات اداری</h4>
                </div>
                <div className='services'  data-aos="fade-right" >
                    <FaRedoAlt color='#bc6c25'  size={28} />
                    <h4>خدمات پس از فروش</h4>

                </div>

            </div>

        </section>
     );
}
 
export default Feature;