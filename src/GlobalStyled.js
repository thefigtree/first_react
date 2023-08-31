import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// npm에 가서 styled-reset을 친 후 복사하고, 터미널로 가져온다

export const mainColors = {
  fontColor: "#1d1d1d",
  pointColor: "#85E6C5",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{box-sizing: border-box;}
    a{text-decoration: none;}
    body {font-family: 'Noto Sans KR', sans-serif;}
`;
