import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import LoginFooter from "../../components/login/LoginFooter";


export default function Login() {

  return (

    <div className="login">
      <div className="login_wrapper">
        <LoginForm />

        <div className="register"></div>

        {/* footer */}
        <LoginFooter />
      </div>
    </div>
  );
}
