import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyled } from "./GlobalStyled";
// => import는 원하는 파일을 불러옴
// => import 함수명 from "경로";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    {/* css의 초기 값은 index.js에 둔다, App 위에 */}
    <App />
  </React.StrictMode>
);
