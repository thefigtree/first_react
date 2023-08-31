import { Intro } from "./intro";

export const PropsEx = () => {
  return (
    <div>
      <Intro name="이동진" age="25"></Intro>
      <hr></hr>
      <Intro name="안정환" age="56"></Intro>
      <hr></hr>
      <Intro name="차두리" age="43"></Intro>
      <hr></hr>
    </div>
  );
};

// export const PropsEx02 = () => {
//   return <div>두번째 컴포넌트</div>;
// };

// export const PropsEx03 = () => {
//   return <div>세번째 컴포넌트</div>;
// };

// export default PropsEx;
// => export는 컴포넌트 내부에 단 하나만 존재해야 함.

// *props
// => 함수 매개변수 역할
// => props는 오브젝트로 반환함
