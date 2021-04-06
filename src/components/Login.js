import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  console.log({})
  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
      </div>
      <div className="login__text">
        <h1> Sign in to Vegan Messenger</h1>
      </div>
      <Button onClick={singIn}>Sign in with Google</Button>
    </div>
  );
}

export default Login;
