import { styled } from "styled-components";

const Box = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bgColor};
  margin-bottom: 30px;
  display: ${(props) => props.show};
`;

export const StyledEx01 = () => {
  return (
    <div>
      <Box w="500px" h="300px" bgColor="darkmagenta"></Box>
      <Box w="300px" h="500px" bgColor="coral" show="none"></Box>
    </div>
  );
};
