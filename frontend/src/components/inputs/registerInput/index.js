import "./style.css";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";


export default function RegisterInput({ placeholder, bottom, ...props }) {

    const [field, meta] = useField(props);
    const desktopView = useMediaQuery({
        query: "(min-width: 850px)",
    });

    return (

        <div className="input_wrap">

            {meta.touched && meta.error && !bottom && (
                <div
                    className={
                        desktopView ? "input_error input_error_desktop" : "input_error"
                    }
                    style={{ transform: "translateY(3px)" }}
                >
                    {meta.touched && meta.error && <ErrorMessage name={field.name} />}
                    {meta.touched && meta.error && (
                        <div
                            className={desktopView ? "error_arrow_left" : "error_arrow_top"}
                        ></div>
                    )}
                </div>
            )}

            <input
                // input_error_border is a class that is defined in style.css
                className={meta.touched && meta.error ? "input_error_border" : ""}
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                {...field}
                {...props}
            />

            {/* show error at bottom of password */}
            {meta.touched && meta.error && bottom && (
                <div
                    className={
                        desktopView ? "input_error input_error_desktop" : "input_error"
                    }
                    style={{ transform: "translateY(2px)" }}
                >
                    {meta.touched && meta.error && <ErrorMessage name={field.name} />}
                    {meta.touched && meta.error && (
                        <div
                            className={
                                desktopView ? "error_arrow_left" : "error_arrow_bottom"
                            }
                        ></div>
                    )}
                </div>
            )}

            {meta.touched && meta.error && (
                <i
                    className="error_icon"
                    style={{ top: `${!bottom && !desktopView ? "63%" : "15px"}` }}
                ></i>
            )}
        </div>
    );
}