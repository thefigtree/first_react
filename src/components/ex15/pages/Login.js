import { styled } from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 100%;
  padding: 7px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  color: white;
  margin-top: 20px;
  font-weight: 600;
  box-sizing: border-box;
  cursor: pointer;
  /* padding: 7px 15px; */
  background-color: green;
`;

export const Login = () => {
  return (
    <Wrap>
      <Form>
        <Title>LOGIN</Title>
        <Input placeholder="아이디"></Input>
        <Input placeholder="패스워드"></Input>
        <Button>로그인</Button>
      </Form>
    </Wrap>
  );
};
