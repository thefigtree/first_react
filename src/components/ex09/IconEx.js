import { faBars, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <div>
      <h3>메뉴 버튼 아이콘</h3>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          color: "aqua",
          fontSize: "100px",
        }}
      ></FontAwesomeIcon>

      <br></br>
      <br></br>

      <h3>유저 아이콘</h3>
      <FontAwesomeIcon
        icon={faUserNurse}
        style={{
          color: "pink",
          fontSize: "100px",
        }}
      ></FontAwesomeIcon>
    </div>
  );
};
