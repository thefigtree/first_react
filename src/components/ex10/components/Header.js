import {
  faAddressCard,
  faBars,
  faCaretDown,
  faTicket,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  /* position: relative; */
  article {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    /* background-color: white; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;
const MoreBtn = styled.article`
  color: ${mainColors.fontColor};
  background-color: white;
`;
const MenuBtn = styled.article`
  /* background-color: transparent; */
  border: 1px solid #f1f1f1;
`;

const HiddenMenu = styled.nav`
  width: 100%;
  height: 800px;
  position: absolute;
  top: ${(props) => props.$isActive};
  left: 0;
  background-color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  transition: 0.2s;
`;

const Close = styled.div`
  /* float: right; */
  width: 100%;
  text-align: right;
  font-size: 20px;
  cursor: pointer;
`;

const Profile = styled.div``;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  svg {
    opacity: 0.7;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Items = styled.div``;

export const Header = () => {
  const [active, setActive] = useState("100%");
  // const [deActive, setDeactive] = useState();
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
      </MoreBtn>
      <MenuBtn onClick={() => setActive("0")}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </MenuBtn>

      <HiddenMenu $isActive={active}>
        <Close onClick={() => setActive("100%")}>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </Close>

        <Profile>
          <Avatar>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </Avatar>
          <BtnWrap>
            <Items>
              <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
            </Items>
            <Items>
              <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
            </Items>
            <Items>
              <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>
            </Items>
          </BtnWrap>
        </Profile>
      </HiddenMenu>
    </SHeader>
  );
};

// *메뉴 이벤트 작업
// 1. 메뉴 버튼을 클릭하면 숨김메뉴가 top 100%에서 0%로 변경
// 2. 닫기 버튼을 클릭하면 숨김메뉴가 top 0에서 top 100%로 변경
