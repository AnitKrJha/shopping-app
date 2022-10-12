import "./Authentication.styles.scss";
import SignInForm from "../../components/SignInForm/sign-in-form.component";
import SignUpForm from "../../components/SignUpForm/sign-up-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
