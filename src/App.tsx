import React, { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Diary from "./components/diary/Diary";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Diary />
          {/* <Logout /> */}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
