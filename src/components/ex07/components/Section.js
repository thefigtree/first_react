import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const SSection = styled.section`
  width: 100%;
  height: 300px;
  /* background-color: red; */
  position: relative;
`;

const Title = styled.h3`
  width: 100%;
  height: 50px;
  /* background-color: blue; */
  position: absolute;
  top: 25px;
  left: 0;
  font-size: 30px;
  text-align: center;
  /* font-weight: 900; */
  /* font-style: inherit; */
  color: ${mainColors.fontColor};
`;

const ConWrap = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: black; */
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
`;

const Con = styled.div`
  width: 45%;
  height: 80%;
  background-color: black;
  /* margin-top: 20px; */
  &:hover {
    background-color: ${mainColors.pointColor};
    /* width: 1000px; */
  }
  /* => 자기 자신을 선택할땐 &를 사용함 */
`;

export const Section = () => {
  return (
    <SSection>
      <Title>타이틀 올라감</Title>
      <ConWrap>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </SSection>
  );
};
