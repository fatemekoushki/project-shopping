import "./auth.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const formSchema = Yup.object({
    name: Yup.string().required("نام شما الزامی است"),
    email: Yup.string().email("ایمیل باید معتبر باشد").required("ایمیل شما الزامی است"),
    password: Yup.string().required("پسوورد شما الزامی است"),
    confPassword: Yup.string().required("تکرار پسوورد الزامی است")

})

const Register = () => {
    const [error, setError] = useState([]);
    const navigate = useNavigate() ;

    const handleSubmit = async (value) => {
        const data = {
            name: value.name,
            email: value.email,
            password: value.password,
            confPassword: value.confPassword
        };
        try {
            const res = await axios.post("/register", data);
            if (res.data.error) {
                setError(res.data.error)
            } else {
                Swal.fire({
                    icon: "success",
                    title: "تبریک میگم !",
                    text: res.data.message,
                    showConfirmButton: true,
                    showConfirmText: "تایید",
                    timer: 5000
                })
                navigate("/login")
            }
        } catch (error) {
            console.log(error)

        }

    }
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confPassword: ""
        },
        onSubmit : (values) => {
            handleSubmit(values)
        },
        validationSchema: formSchema

    })



    return (
        <section id="register">
            <div className="form">
                <div className="auth-title">
                    <h3>ثبت نام کنید</h3>
                </div>
                <form onSubmit={formik.handleSubmit} >
                    <div style={{textAlign : "center" , color : "red" }} >
                        <h2  className='error' > {error}</h2>
                    </div>
                    <div className="input-group">
                        <label>نام شما :</label>
                        <input name="name" type="text"
                            placeholder="مثال* فاطمه کوشکی"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur("name")}
                        />
                         <p style={{color : "red"}} >
                                    {formik.touched.name && formik.errors.name}
                                </p>

                    </div>
                    <div className="input-group">
                        <label>ایمیل شما :</label>
                        <input name="email" type="text"
                            placeholder="مثال* فاطمه کوشکی"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                        />
                         <p style={{color : "red"}}>
                                    {formik.touched.email && formik.errors.email}
                                </p>

                    </div>
                    <div className="input-group">
                        <label>پسوورد شما :</label>
                        <input name="password" type="text"
                            placeholder="مثال* فاطمه کوشکی"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
                        />
                         <p style={{color : "red"}}>
                                    {formik.touched.password&& formik.errors.password}
                                </p>

                    </div>
                    <div className="input-group">
                        <label>تکرار پسوورد  :</label>
                        <input name="confPassword" type="text"
                            placeholder="مثال* فاطمه کوشکی"
                            value={formik.values.confPassword}
                            onChange={formik.handleChange("confPassword")}
                            onBlur={formik.handleBlur("confPassword")}
                        />
                         <p style={{color : "red"}}>
                                    {formik.touched.confPassword && formik.errors.confPassword}
                                </p>

                    </div>
                    <div className="submit-button">
                        <button type="submit" >ثبت نام</button>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Register;