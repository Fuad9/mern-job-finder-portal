import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function JobsProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
