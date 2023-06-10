import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.scss";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className="login">
      <img
        src="/jeshoots-com-9n1USijYJZ4-unsplash.jpg"
        alt=""
        width={300}
        height={200}
      />
      <button onClick={() => signIn()}>ログイン</button>
    </div>
  );
};

export default Login;
