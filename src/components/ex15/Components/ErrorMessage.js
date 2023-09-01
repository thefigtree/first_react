import { styled } from "styled-components";

const Message = styled.div`
  /* width: 100%; */
  font-size: 14px;
  font-weight: 600;
  color: crimson;
  margin-top: 5px;
  /* text-align: left; */
`;

export const ErrorMessage = ({ text }) => {
  return <Message> {text}</Message>;
  <Message>{text}</Message>;
};
