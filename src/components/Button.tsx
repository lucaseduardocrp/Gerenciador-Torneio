import { styled } from "styled-components"
import { FlexCSS } from "../styles/GlobalStyles";

const ButtonContainer = styled.button`
  ${FlexCSS}

  padding: 1rem 4rem;
  border-radius: 0.6rem;
  border: none;

  font-size: var(--m);
  text-transform: initial;

  color: var(--white);
  background: var(--primary);
  transition: all .1s ease;
  cursor: pointer;

  &:active{
    transform: scale(0.96);
  }
`;

export function Button(props: {text: string}){
  return(
    <ButtonContainer>{props.text}</ButtonContainer>
  )
}