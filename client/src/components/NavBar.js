import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { firebaseClient } from "./Auth/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import navbarStyles from "../styles/NavBar.module.scss";

export default function NavBar() {
  const history = useHistory();
  firebaseClient();
  const handleSignOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then((res) => {
        alert("you have signed out successfully");
        history.push("/");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  return (
    <div className={navbarStyles.navbar}>
      <ul>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <button onClick={handleSignOut}>SignOut</button>
        </li>
      </ul>
    </div>
  );
}
