import { styled } from "styled-components";
import { FlexCSS } from "../../styles/GlobalStyles";

export const SignInContainer = styled.div`
  margin-bottom: 1.6rem;

  .open{
    display: block;
  }
  .close{
    display: none;
  }

  .userInfos, span{
    ${FlexCSS}
    gap: 1rem;

    span{
      font-size: var(--xsm);
    }

    img{
      width: 3rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;