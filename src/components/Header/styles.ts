import styled from 'styled-components';
import { FlexCSS } from '../../styles/GlobalStyles';

export const HeaderContainer = styled.header`
  display: none;

  @media (max-width: 1024px){
    position: relative;
    width: 100%;
    padding: 2rem;
    background-color: var(--black);
    
    ${FlexCSS}
    justify-content: space-between;
    
    nav, .open{
      position: absolute;
      width: 100%;
      height: 44vh;
      padding: 1rem;
      left: 0;
      top: 8rem;
      background-color: var(--black);
      
      a{
        ${FlexCSS}
        justify-content: start;
        gap: 1rem;
        
        padding: 1.6rem;
        color: var(--white);        
        font-size: var(--m);
        text-transform: capitalize;
      }
  
      ul{
        li{
          width: 100%;
  
          a.active{
            background-color: var(--dark-200);
          }
        }
      }
    }
  
    .close{
      display: none;
    }
  }

`;

export const Logo = styled.div`
  ${FlexCSS}
  justify-content: start;
  gap: 1rem;

  h1{
    font-size: var(--l);
    color: var(--white);
  }

  img{
    width: 5rem;
    object-fit: cover;
  }
`;

export const BurgerMenu = styled.div`
  color: var(--white);
  font-size: 4rem;
`;

