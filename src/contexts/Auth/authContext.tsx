import { createContext } from "react";
import User from "../../interfaces/User";

const AuthContext = createContext<User>({email: null, uid: ''});

export default AuthContext;
