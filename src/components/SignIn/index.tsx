import { useState } from "react";
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';

import { SignInContainer } from "./styles";
import { BsBoxArrowInRight } from "react-icons/bs";

import Button from "../Button";

export default function SignIn() {
  const [user, setUser] = useState<User | null>(null)
  
  const handleGoogleLogin = () => {
    const singInProvider = new GoogleAuthProvider()

    signInWithPopup(auth, singInProvider)
    .then((result) => {
      console.log('result here',result)
      setUser(result.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <SignInContainer>
      <Button justifyContent="start" onClick={handleGoogleLogin}>
        
        {user ? (
          <div className={user ? 'open userInfos' : 'close'}>
            {user.photoURL && <img src={user.photoURL} alt="User photograph" />}
            <span>{user.displayName}</span>
            <BsBoxArrowInRight />
          </div>
        ) : (
          <div className={!user ? 'open signIn' : 'close'}>
            <span>Sign In</span>
          </div>
        )}
      </Button>
    </SignInContainer>
  )
}