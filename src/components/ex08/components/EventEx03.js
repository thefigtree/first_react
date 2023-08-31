import { styled } from "styled-components";
import { useState } from "react";

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  position: relative;
`;
const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: white;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  left: 0;
  text-align: center;
  line-height: 50px;
`;
const Menu = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  right: 0;
  /* text-align: center; */
  /* line-height: 80px; */
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: beige;
  position: relative;
  left: 50%;
  margin-left: -150px;
  display: ${(props) => props.show};
`;

export const EventEx03 = () => {
  const [display, setDisplay] = useState({ display: "none" });
  // const [num, setNum] = useState(0);

  // const OnShow = () => {

  // };

  return (
    <div>
      <Header>
        <Logo>이동진</Logo>
        <Menu onClick={() => setDisplay({ display: "block" })}></Menu>
      </Header>

      <Box show="none"></Box>
    </div>
  );
};
