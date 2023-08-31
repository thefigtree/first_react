import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.isColor};
  /* margin: 150px auto; */
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("aqua");
  const [num, setNum] = useState(0);

  const onChangeColor = () => {
    if (num == 0) {
      setBgColor("red");
      setNum(num + 1);
    } else if (num == 1) {
      setBgColor("aqua");
      setNum(num - 1);
    }
  };
  //   const onInterval = () => {
  //     setNum(num + 1);
  //   };

  return (
    <div>
      <Box onClick={onChangeColor} isColor={bgColor}></Box>
    </div>
  );
};
