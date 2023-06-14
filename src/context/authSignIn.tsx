import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth"
import { ReactNode, createContext, useState } from "react"
import { auth } from "../services/firebase"

interface FuncProps {
  handleGoogleLogin: () => void
}

export const AuthSignInContext = createContext< FuncProps | null>(null)

export const AuthSignInProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)
  
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user)
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(setUser));
    })
    .catch((error) => {
      console.log(error)
    })
  };

  return(
    <AuthSignInContext.Provider value={{handleGoogleLogin}}>
      {children}
    </AuthSignInContext.Provider>
  )
}