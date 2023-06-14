import { Container } from "./styles";
import { BsBoxArrowInRight } from "react-icons/bs";

import Button from "../Button";
import { useContext } from "react";

import { LoginContext } from "../../context/LoginContext";
// import useLogin from "../../Hooks/useLogin";

export default function Login() {

  // const { handleGoogleLogin, user } = useLogin()

  const {handleGoogleLogin, user} = useContext(LoginContext)

  return(
    <Container>
      <Button onClick={handleGoogleLogin}>
        
        {user ? (
          <div className='userInfos'>
            {user.photoURL && <img src={user.photoURL} alt="User photograph" />}
            <span>{user.displayName}</span>
            <BsBoxArrowInRight />
          </div>
        ) : (
          <span>Sign In</span>
        )}
      </Button>
    </Container>
  )
}