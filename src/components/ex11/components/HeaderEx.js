import { Link } from "react-router-dom";

export const HeaderEx = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/sub01"}>SUB01</Link>
        </li>
        <li>
          <Link to={"/sub02"}>SUB02</Link>
        </li>
        <li>
          <Link to={"/sub03"}>SUB03</Link>
        </li>
        <li>
          <Link to={"/sub04"}>SUB04</Link>
        </li>
      </ul>
    </div>
  );
};
