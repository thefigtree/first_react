import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
// import { Sub03 } from "./pages/sub03";
// import { Sub04 } from "./pages/sub04";
// import { dom } from "@fortawesome/fontawesome-svg-core";
import { PageNotFound } from "./pages/PageNotFound";
// import { Sub03 } from "./pages/sub03";
// import { Sub03 } from "./pages/Sub03";
// import { Sub04 } from "./pages/sub04";
// import { Sub04 } from "./pages/Sub04";
import { HeaderEx } from "./components/HeaderEx";
import { Footer } from "./components/Footer";
import { Sub03 } from "./pages/Sub03";
import { Sub04 } from "./pages/Sub04";
// import { Sub03 } from "./pages/sub03";
// import { Sub04 } from "./pages/Sub04ub04";
// import { Sub03 } from "./pages/Sub03ub03";

export const Ex11 = () => {
  return (
    <HashRouter>
      {/* <HeaderEx></HeaderEx> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sub01" element={<Sub01></Sub01>}></Route>
        <Route path="/sub02" element={<Sub02></Sub02>}></Route>
        <Route path="/sub03" element={<Sub03></Sub03>}></Route>
        <Route path="/sub04" element={<Sub04></Sub04>}></Route>
        {/* <Route path="/sub03" element={<Sub03></Sub03>}></Route> */}
        {/* <Route path="/sub03" element={<Sub03></Sub03>}></Route> */}
        {/* <Route path="/sub04" element={<Sub04></Sub04>}></Route> */}
        {/* <Route path="/sub03" element={<Sub03></Sub03>}></Route> */}
        {/* <Route path="/sub04" element={<Sub04></Sub04>}></Route> */}
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </HashRouter>
  );
};
// HashRouter안에 Routes안에 Route (한 세트)

// *react router dom
// => 리액트에서 경로를 이동할때 사용
// => HashRouter(BrowserRouter) -> Routes -> Route
// => Route는 path(경로)와 element(컴포넌트) 속성으로 구성
// => HashRouter는 /#/으로 url에 입력해야 되며,
// BrowserRouter는 일반적으로 경로 지정할때 사용하는 /(슬래시) 구성
