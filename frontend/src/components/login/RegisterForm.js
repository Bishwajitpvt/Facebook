import { Form, Formik } from "formik";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import * as Yup from "yup";


export default function RegisterForm() {

    // user info object to store user data in  state 
    const userInfos = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        bYear: new Date().getFullYear(),
        bMonth: new Date().getMonth(),
        bDay: new Date().getDate(),
        gender: "",
    };

    const [user, setUser] = useState(userInfos);

    // destructuring user object to get user data 
    const {
        first_name,
        last_name,
        email,
        password,
        bYear,
        bMonth,
        bDay
    } = user;

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    };


    const yearTemp = new Date().getFullYear();
    // creating an array of years 
    const years = Array.from(new Array(108), (val, index) => yearTemp - index);
    // creating an array of months
    const months = Array.from(new Array(12), (val, index) => 1 + index);
    // return number of days in a month
    const getDays = () => { return new Date(bYear, bMonth, 0).getDate() };
    // creating an array of days
    const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

    // validation schema
    const registerValidation = Yup.object({
        first_name: Yup.string().required("What is your first name?")
            .min(3, "First name must be at least 3 characters")
            .max(20, "First name must be less than 20 characters")
            .matches(/^[a-zA-Z\s]+$/, "First name must be only letters"),

        last_name: Yup.string().required("What is your last name?")
            .min(3, "Last name must be at least 3 characters")
            .max(20, "Last name must be less than 20 characters")
            .matches(/^[a-zA-Z\s]+$/, "Last name must be only letters"),

        email: Yup.string().required("You'll need this when you log in and if you ever need to reset your password.")
            .email("Please enter a valid email address"),

        password: Yup.string().required("Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &).")
            .min(6, "Password must be atleast 6 characters.")
            .max(20, "Password can't be more than 20 characters"),
    });

    return (
        <div className="blur">
            <div className="register">
                <div className="register_header">
                    <i className="exit_icon"></i>
                    <span>Sign Up</span>
                    <span>It's quick and easy</span>
                </div>

                {/* register form */}
                <Formik
                    enableReinitialize
                    initialValues={{
                        first_name,
                        last_name,
                        email,
                        password,
                        bYear,
                        bMonth,
                        bDay
                    }}
                    validationSchema={registerValidation}
                >
                    {(formik) => (
                        <Form className="register_form">
                            <div className="reg_line">
                                <RegisterInput
                                    type="text"
                                    placeholder="First name"
                                    name="first_name"
                                    onChange={handleRegisterChange}
                                />
                                <RegisterInput
                                    type="text"
                                    placeholder="Surname"
                                    name="last_name"
                                    onChange={handleRegisterChange}
                                />
                            </div>

                            {/* email */}
                            <div className="reg_line">
                                <RegisterInput
                                    type="text"
                                    placeholder="Mobile number or email address"
                                    name="email"
                                    onChange={handleRegisterChange}
                                />
                            </div>

                            {/* password */}
                            <div className="reg_line">
                                <RegisterInput
                                    type="password"
                                    placeholder="New Password"
                                    name="password"
                                    onChange={handleRegisterChange}
                                />
                            </div>

                            {/* date od birth */}
                            <div className="reg_col">
                                <div className="reg_line_header">
                                    Date of Birth <i className="info_icon"></i>
                                </div>
                                <div className="reg_grid">
                                    <select name="bDay" value={bDay} onChange={handleRegisterChange}>
                                        {days.map((days, i) => (
                                            <option value={days} key={i}>
                                                {days}
                                            </option>
                                        ))}
                                    </select>

                                    <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
                                        {months.map((month, i) => (
                                            <option value={month} key={i}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>

                                    <select name="bYear" value={bYear} onChange={handleRegisterChange}>
                                        {years.map((year, i) => (
                                            <option value={year} key={i}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* gender */}
                            <div className="reg_col">
                                <div className="reg_line_header">
                                    Gender <i className="info_icon"></i>
                                </div>

                                <div className="reg_grid">
                                    <label htmlFor="male">
                                        Male
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="male"
                                            onChange={handleRegisterChange} />
                                    </label>
                                    <label htmlFor="female">
                                        Female
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="female"
                                            onChange={handleRegisterChange} />
                                    </label>
                                    <label htmlFor="custom">
                                        Others
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="custom"
                                            value="custom"
                                            onChange={handleRegisterChange} />
                                    </label>
                                </div>
                            </div>

                            <div className="reg_infos">
                                By clicking Sign Up, you agree to our{" "}
                                <span>Terms, Data Policy &nbsp;</span>
                                and <span>Cookie Policy.</span> You may receive SMS
                                notifications from us and can opt out at any time.
                            </div>

                            {/* button */}
                            <div className="reg_btn_wrapper">
                                <button className="blue_btn open_signup">Sign Up</button>
                            </div>

                        </Form>
                    )}</Formik>

            </div>
        </div>
    );
};
