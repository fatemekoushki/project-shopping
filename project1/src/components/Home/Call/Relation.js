import { toast , ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./relation.css" ;
import emailjs from "emailjs-com" ;
import 'aos/dist/aos.css'; 
import Aos from "aos";

const Relation = () => {
    useEffect(()=> {
        Aos.init({
            duration : 1000
        })
    })
    
    const onSubmit = (e)=>{
        e.preventDefault() ;
        emailjs.sendForm('service_wclcrmc' , "template_x8t4tgf" , e.target , "UvEIlstERr8P6XzW9").then((res)=>{
           if(res.status === 200){
            toast.success("پیام شما با موفقیت ارسال شد" , { position : "top-right" ,closeOnClick : true })
            }
    } , (error)=>{
        console.log(error)
    } )
}
    
        
    return ( 
        <>
    
        <section >
           <div id="relation" >
           <div className="form-relation">
                <h2>ارسال پیام به مدیریت</h2>
                <form onSubmit={onSubmit} >
                    <div className="form-group" data-aos="fade-right" >
                        <input className="name" name="name" type="text" placeholder="نام شما"  />
                    </div>
                    <div className="form-group"  data-aos="fade-left">
                        <input className="email" name="email" type="text" placeholder="ایمیل شما"  />
                    </div>
                    

                    <div className="form-group" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <textarea className="message" name="message" type="text" placeholder="پیام شما"  ></textarea>
                    </div>
                    <div className="form-group" data-aos="fade-up">
                        <button  className="send"  type="submit" >ارسال</button>
                    </div>

                    
                </form>

            </div>
            <ToastContainer />
           </div>
        </section>
        </>
     );
}
 
export default Relation;