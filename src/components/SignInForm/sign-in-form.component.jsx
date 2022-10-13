import { FcGoogle } from "react-icons/fc";
import "./sign-in-form.styles.scss";
import { useState, useContext } from "react";
import FormInput from "../FormInput/form-input.component";
import Button from "../Button/button.component";
import {
  signInUserWithGooglePopup,
  signInuserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //---------------------FORM SUBMIT HANDLE-------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInuserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  //------------------------------------------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          // id="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label={"Password"}
          type="password"
          name="password"
          // id="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={async () => {
              await signInUserWithGooglePopup();
            }}
          >
            <span className="google-btn">
              <FcGoogle fontSize={"1rem"} />
              Sign In with Google
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
