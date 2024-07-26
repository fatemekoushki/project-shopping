import shose1 from  "./images/Images/shose1.jpg";
import shose2 from  "./images/Images/shose2.jpg"
import shose3 from  "./images/Images/shose3.jpg"
import shose4 from   "./images/Images/shose4.jpg" ;
import shose5 from   "./images/Images/shose5.jpg" ;
import shose6 from "./images/Images/shose6.jpg" ;
import shose7 from   "./images/Images/shose7.jpg" ;
import shose8 from   "./images/Images/shose8.jpg" ;
import shose10 from   "./images/Images/shose10.jpg" ;
import shose11 from   "./images/Images/shose11.jpg" ;
import shose12 from   "./images/Images/shose12.jpg" ;
import shose13 from   "./images/Images/shose13.jpg" ;


import bag1 from "./images/Images/bag1.jpg" ;
import bag2 from "./images/Images/bag2.jpg" ;
import bag3 from "./images/Images/bag3.jpg" ;

import bag5 from "./images/Images/bag5.jpg" ;
import bag6 from "./images/Images/bag6.jpg" ;
import bag7 from "./images/Images/bag7.jpg" ;
import bag8 from "./images/Images/bag8.jpg" ;

import bag9 from "./images/Images/bag9.jpg" ;
import bag10 from "./images/Images/bag10.jpg" ;
import bag11 from "./images/Images/bag11.jpg" ;






const PRODUCTS = [
    {
        id :1 ,
        title : "کفش 01" ,
        img :  [
            shose1 ,shose2 , shose3 ,shose4
        ],
        price : 500000,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",
        qty : 1 ,
        availableBrand : "آدیداس"
    },
    {
        id :2 ,
        title : 'کفش 01' ,
        img :  [
            shose5 ,shose6 , shose7 , shose8
        ],
        price : 400000,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",

        qty : 1 ,
        availableBrand : "نایک"
    },
    {
        id :3 ,
        title : "کفش 045" ,
        img :  [
             shose10 , shose11  , shose12
        ],
        price : 700000,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",

        qty : 1 ,
        availableBrand : "نایک"
    },
    {
        id :4 ,
        title : "کیف01" ,
        img :  [
            bag1 , bag2 ,bag3 
        ],
        price : 550000 ,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",

        qty : 1 ,
        availableBrand : "نیوبالانس"
    },
    {
        id :5 ,
        title : "کیف 099" ,
        img :  [
            bag5 , bag6 ,bag7, bag8
        ],
        price : 700000 ,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",

        qty : 1 ,
        availableBrand : "آدیداس"
    },
    {
        id :6 ,
        title : "کیف 03" ,
        img :  [
            bag9 , bag10,bag11 
        ],
        price : 9000000 ,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",

        qty : 1 ,
        availableBrand : "آذرا"
    },
    {
        id :7 ,
        title : "کفش 045" ,
        img :  [
           shose13
        ],
        price : 700000,
        description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصص ان را می طلبد",

        qty : 1 ,
        availableBrand : "نایک"
    },
   
]

export default PRODUCTS ;