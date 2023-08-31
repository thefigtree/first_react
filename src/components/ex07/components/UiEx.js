import { styled } from "styled-components";
// import { mainColors } from "../../../GlobalStyled";
import { mainColors } from "../../../GlobalStyled";
import { Header } from "./Header";
import { Section } from "./Section";
// import { Section } from "./Section";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background-color: aliceblue;
`;

const Banner = styled.section`
  width: 100%;
  height: 300px;
  background-color: black;
  position: relative;
`;

export const UiEx = () => {
  return (
    <Wrap>
      <Header></Header>
      <Banner></Banner>
      <Section></Section>
    </Wrap>
  );
};
