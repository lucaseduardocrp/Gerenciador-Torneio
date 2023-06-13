import { styled } from "styled-components"
import { FlexCSS } from "../styles/GlobalStyles";

import { ButtonHTMLAttributes, ReactNode } from 'react'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  justifyContent?: string
}

const ButtonContainer = styled.button<Props>`
  min-width: 8rem;
  height: 5rem;
  padding: 1rem 1.6rem;
  
  ${FlexCSS}
  justify-content: ${props => props.justifyContent};
  gap: 0.6rem;

  border-radius: 0.6rem;
  border: none;

  font-size: var(--m);
  font-weight: 700;
  text-transform: initial;

  color: var(--white);
  background: var(--primary);
  transition: all .1s ease;
  cursor: pointer;

  &:active{
    transform: scale(0.96);
  }
`;

export default function Button({children, ...rest}: Props){
  return(
    <ButtonContainer {...rest}>
      {children}
    </ButtonContainer>
  )
}