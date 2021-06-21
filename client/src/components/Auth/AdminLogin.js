import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import loginStyles from "../../styles/Login.module.scss";
import { firebaseClient } from "./firebaseClient";
import { useHistory } from "react-router-dom";

export default function AdminLogin() {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  return (
    <section className="container">
      <div className="split">
        <div className={loginStyles.loginContainer}>
          <h3>Admin Login</h3>
          <form>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="emailAddress"
                placeholder="email"
                value={email}
                aria-describedby="email-helper-text"
              />

              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                id="pass"
                placeholder="password"
                value={pass}
                aria-describedby="password-helper-text"
              />

              <button
                onClick={async () => {
                  await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, pass)
                    .then(() => {
                      alert("loggedin successfully");
                      history.push = "/admin";
                    })
                    .catch(function (error) {
                      console.log(error.message);
                      error && setLoginError(error.message);
                    });
                }}
              >
                Log in
              </button>
            </div>
          </form>

          <h6>{loginError}</h6>
        </div>
      </div>
    </section>
  );
}
