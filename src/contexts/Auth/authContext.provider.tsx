import React, { ReactElement, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import User from "../../interfaces/User";
import AuthContext from "./authContext";

interface AuthContextProviderProps {
  children: ReactElement,
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>({email: null, uid: ''});

  const login = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({email: user.email, uid: user.uid});
      } else {
        setUser({email: null, uid: ''});
      }
    });
  }

  useEffect(() => {
    login();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
