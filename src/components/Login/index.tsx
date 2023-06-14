import { Container } from "./styles";
import { BsBoxArrowInRight } from "react-icons/bs";

import Button from "../Button";
import useLogin from "../../Hooks/useLogin";

export default function Login() {

  const { handleGoogleLogin, user } = useLogin()

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