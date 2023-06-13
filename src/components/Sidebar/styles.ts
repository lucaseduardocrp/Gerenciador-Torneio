import styled from 'styled-components';
import { FlexCSS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  min-width: 32rem;
  height: 100vh;
  padding: 1rem;
  background-color: var(--dark-200);
  
  a{
    padding: 1.6rem;
    color: var(--white);
    
    font-size: var(--m);
    font-weight: 700;
    text-transform: capitalize;

    ${FlexCSS}
    justify-content: start;
    gap: 1rem;
  }

  nav{
    padding: 1rem;
    background-color: var(--dark-300);
    border: 1px solid var(--dark-100);

    ul{
      ${FlexCSS}
      align-items: start;
      flex-direction: column;
      gap: 1.4rem;

      li{
        width: 100%;

        >a.active{
          background-color: var(--dark-200);
        }
      }
    }
  }

  @media (max-width: 1024px){
    display: none;
  }
`;

export const Logo = styled.div`
  ${FlexCSS}
  justify-content: start;
  gap: 1rem;

  margin-bottom: 3rem;

  h1{
    font-size: var(--l);
    color: var(--white);
  }

  img{
    width: 6rem;
    object-fit: cover;
  }
`;


