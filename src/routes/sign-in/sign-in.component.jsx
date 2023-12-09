import "./sign-in.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>SignIn With Google</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
