import { styled } from "styled-components"
import { FlexCSS } from "../../styles/GlobalStyles";
import Button from "../../components/Button";

const GamesSection = styled.section`
  ${FlexCSS}
  align-items: start;
`;

export default function Games(){
  return(
    <GamesSection>
      <Button>Random games</Button>
    </GamesSection>
  )
}