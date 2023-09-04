import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../Components/ErrorMessage";
import { userData } from "../userData";
import { useNavigate } from "react-router-dom";

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
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

export const Signup = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.username);
    // 아이디 불러올 때

    // console.log(data.password);
    // 비밀번호 불러올 때

    // console.log("로그인 버튼 클릭함!");

    // const inputUsername = data.username;
    // const inputPassword = data.password;

    const { username, password, email, name } = data;
    // => user가 input에 입력한 value값을 비구조화 할당으로 표현
    // console.log(username, password);

    if (username !== userData.username) {
      setError("username", {
        message: "아이디가 틀렸습니다.",
      });
    }

    if (email !== userData.email) {
      setError("email", {
        message: "이메일이 틀렸습니다.",
      });
    }

    if (name !== userData.name) {
      setError("name", {
        message: "이름이 틀렸습니다.",
      });
    }

    if (password !== userData.password) {
      setError("password", {
        message: "비밀번호가 틀렸습니다.",
      });
    }

    // 로그인 성공시 메인 페이지로 이동
    nav("/");
    // => 경로를 지정하여, 페이지를 이동 시킬 수 있음
  };

  // console.log(errors.username.message);

  // * 오류 발생시
  // console.log(errors && errors.username && errors.username.message)

  // console.log(errors?.username?.message);
  // * 옵셔널체이닝(optional chaining)
  // => 중첩 객체를 에러 없이 안전하게 접근할 수 있음

  console.log(isValid);
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Signup</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          placeholder="아이디"
        ></Input>

        <ErrorMessage text={errors?.username?.message}></ErrorMessage>

        <Input
          {...register("email", {
            required: "이메일은 필수 입니다.",
          })}
          placeholder="이메일"
        ></Input>

        <ErrorMessage text={errors?.email?.message}></ErrorMessage>

        <Input
          {...register("name", {
            required: "이름은 필수 입니다.",
          })}
          placeholder="이름"
        ></Input>

        <ErrorMessage text={errors?.name?.message}></ErrorMessage>

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요.",
            },
          })}
          type="password"
          placeholder="패스워드"
        ></Input>

        <ErrorMessage text={errors?.password?.message}></ErrorMessage>

        <Button $isActive={isValid}>회원가입</Button>
      </Form>
    </Wrap>
  );
};
