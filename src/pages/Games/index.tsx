import { styled } from "styled-components"
import { Button } from "../../components/Button";
import { FlexCSS } from "../../styles/GlobalStyles";

const GamesSection = styled.section`
  ${FlexCSS}
  align-items: start;
`;

export default function Games(){
  return(
    <GamesSection>
      <Button text="Random games" />
    </GamesSection>
  )
}