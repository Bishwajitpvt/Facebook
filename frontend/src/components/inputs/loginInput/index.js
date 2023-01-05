import "./style.css";
import { ErrorMessage, useField } from "formik";

export default function LoginInput({ placeholder, bottom, ...props }) {

    const [field, meta] = useField(props);

    return (

        <div className="input_wrap">
            {/* show error email */}
            {meta.touched && meta.error && !bottom && (

                <div className="input_error" style={{ transform: "translateY(3px)" }}>
                    {meta.touched && meta.error && <ErrorMessage name={field.name} />}
                    {meta.touched && meta.error && (
                        <div className="error_arrow_top"></div>
                    )} 
                </div>
            )}

            <input
                // input_error_border is a class name in style.css
                className={meta.touched && meta.error ? "input_error_border" : ""}
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                {...field}
                {...props}
            />

            {/* show error at bottom i.e for password */}
            {meta.touched && meta.error && bottom && (

                <div className="input_error" style={{ transform: "translateY(2px)" }}>
                    {meta.touched && meta.error && <ErrorMessage name={field.name} />}
                    {meta.touched && meta.error && (
                        <div className="error_arrow_bottom"></div>
                    )} 
                </div>
            )}


            {meta.touched && meta.error && <i className="error_icon"
                style={{ top: `${!bottom ? "63%" : "15px"}` }}></i>}
        </div>

    );
}
