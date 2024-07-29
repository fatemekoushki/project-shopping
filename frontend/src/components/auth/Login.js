import React from 'react';
import "./auth.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const formSchema = Yup.object({
    email: Yup.string().email("ایمیل باید معتبر باشد").required("ایمیل شما الزامی است"),
    password: Yup.string().required("پسوورد شما الزامی است"),

})
function Login() {
    const [error, setError] = useState([]);
    const navigate = useNavigate() ;

    const handleSubmit = async (value) => {
        const data = {
            email: value.email,
            password: value.password,
        };
        try {
            const res = await axios.post("/login", data);
            if (res.data.error) {
                setError(res.data.error)
            } else {
                localStorage.setItem("user_name" , res.data.name)
                localStorage.setItem("user_id" , res.data.userId )
                Swal.fire({
                    icon: "success",
                    title: " ورود با موفقیت انجام شد!",
                    text: res.data.message,
                    showConfirmButton: true,
                    showConfirmText: "تایید",
                    timer: 5000
                })
                navigate("/")
            }
        } catch (error) {
            console.log(error)

        }

    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            handleSubmit(values)
        },
        validationSchema: formSchema

    })

    return (
        <section id='login'>
            <div className='form' style={{ marginTop: "5rem" }}>
                <div className="auth-title">
                    <h3> ورود به حساب کاربری </h3>
                    <div style={{textAlign : "center" , color : "red" }} >
                        <h4  className='error' > {error}</h4>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit} >
                    <div className='input-group'>
                        <label>ایمیل شما :</label>
                        <input type='text' name='email'
                            placeholder="مثال* فاطمه کوشکی"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                        />
                        <p style={{ color: "red" }}>
                            {formik.touched.email && formik.errors.email}
                        </p>
                    </div>
                    <div className='input-group'>
                        <label>پسوورد شما:</label>
                        <input type='text' name='password'
                            placeholder="مثال* فاطمه کوشکی"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
                        />
                        <p style={{ color: "red" }}>
                            {formik.touched.password && formik.errors.password}
                        </p>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' >ورود</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default Login;