import { auth } from "../services/firebase";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";

import { useState } from "react";

export default function useLogin() {
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

  return {handleGoogleLogin, user, setUser}
}
