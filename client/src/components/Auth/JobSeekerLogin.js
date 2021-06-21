import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import loginStyles from "../../styles/Login.module.scss";
import { firebaseClient, storeAuthToken } from "./firebaseClient";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function JobSeekerLogin() {
  firebaseClient();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signupError, setSignupError] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/createJobSeekerAccount`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200) {
        setTimeout(() => {
          history.push("/jobseeker");
        }, 3000);
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (err) {
      console.log(err.message);
      throw new Error(err);
    }
  });

  return (
    <section className="container">
      <h1 className="text-center">Job Seeker</h1>
      <h3 className="text-center">
        Are you an Employer? <Link to="/employerlogin">Signup here</Link>
      </h3>

      <div className={loginStyles.loginContainer}>
        <h3>Signup</h3>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              defaultValue="Job Seeker"
              {...register("category", { required: true })}
              autoFocus
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="emailAddress"
              placeholder="email"
              value={email}
              aria-describedby="email-helper-text"
              // {...register("email", { required: true })}
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
              type="submit"
              onClick={async () => {
                await firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, pass)
                  .then(() => {
                    storeAuthToken();
                    alert("account created successfully");
                    history.push = "/jobseeker";
                  })
                  .catch((error) => {
                    console.log(error);
                    error && setSignupError(error.message);
                  });
              }}
            >
              Create account
            </button>
          </div>
        </form>

        <h6>{signupError}</h6>
      </div>

      <h3 className="text-center">
        <Link to="/adminlogin">Login</Link> as Admin
      </h3>
    </section>
  );
}
