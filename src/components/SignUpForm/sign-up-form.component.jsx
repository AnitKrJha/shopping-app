import FormInput from "../FormInput/form-input.component";
import Button from "../Button/button.component";
import './sign-up-form.styles.scss'
import { useState } from "react";

import {
  createAuthorizedUserWithEmailAndPassword,
  makeUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //---------------------FORM SUBMIT HANDLE-------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthorizedUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      const response = makeUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("EMAIL IS IN USE CANNOT SIGN UP WITH THIS EMAIL");
      } else {
        console.log(error);
      }
    }
  };

  //------------------------------------------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label={"Email"}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label={"Password"}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button buttonType={'inverted'} type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
