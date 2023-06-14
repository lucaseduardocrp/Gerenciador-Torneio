import { ReactNode, createContext, useState } from "react";

import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

export const LoginContext = createContext<any>(null)

export default function LoginContextProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState<User | null>(null)
      
    const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider()
    
      signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error)
      })
    };

    return(
      <LoginContext.Provider value={{handleGoogleLogin, signed: !!user}}>
        {children}
      </LoginContext.Provider>
    )
}
