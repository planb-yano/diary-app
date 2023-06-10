import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import "./Logout.scss"

const Logout = () => {
  return (
    <div className="logout">
      <button onClick={() => signOut(auth)}>ログアウト</button>
    </div>
  );
};

export default Logout;
