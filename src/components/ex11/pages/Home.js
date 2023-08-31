import { Helmet } from "react-helmet";
import { HeaderEx } from "../components/HeaderEx";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <div>
      Home
      {/* <HeaderEx></HeaderEx>
      <h2>Home Page</h2> */}
      {/* <PageTitle title={"홈"}></PageTitle> */}
    </div>
  );
};

// *Link
// => 리액트에선 a태그 대신 react-router-dom에 포함 되어 있는
// Link 컴포넌트를 이용함

// => to={경로} 속성을 사용하여 경로 지정

// *연습
// => 서브페이지 3,4 만들기
// => 헤더에 링크 연결
// => 404페이지에서 메인으로 갈 수 있도록 링크 제작
