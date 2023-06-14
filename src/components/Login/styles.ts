import { styled } from "styled-components";
import { FlexCSS } from "../../styles/GlobalStyles";

export const Container = styled.div`
  margin-bottom: 1.6rem;

  .userInfos{
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
