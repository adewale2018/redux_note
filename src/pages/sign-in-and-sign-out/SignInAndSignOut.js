import React from "react";

import "./SignInAndSignOut.scss";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/sign-up/Signup";

function SignInAndSignOut() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <Signup />
    </div>
  );
}

export default SignInAndSignOut;
