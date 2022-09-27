import Directory from "../../components/Directory/directory.component";
import { makeUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/SignUpForm/sign-up-form.component";
const Home = () => {
  return (
    <>
      <Directory />
      <SignUpForm />
    </>
  );
};
export default Home;
