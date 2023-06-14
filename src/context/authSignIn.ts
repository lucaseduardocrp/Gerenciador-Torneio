import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth"
import { ReactNode, createContext, useState } from "react"
import { auth } from "../services/firebase"

interface Props {
  children: ReactNode;
}

export const AuthSignInContext = createContext<User | null>(null)

export const AuthSignInProvider = ({children}: Props) => {
  const [user, setUser] = useState<User | null>(null)
  
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then((result) => {
      const credential =  GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      setUser(user)
      sessionStorage.setItem('@AuthFirebase:token', token);
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(setUser));
    })
    .catch((error) => {
      console.log(error)
    })
  };
}