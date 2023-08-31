export const WeekMenu = ({ MenuList }) => {
  //   console.log(MenuList);
  return (
    <>
      <div>
        <h3>{MenuList[0].week}</h3>
        <ul>
          <li>아침 메뉴: {MenuList[0].breakfast}</li>
          <li>점심 메뉴: {MenuList[0].lunch}</li>
          <li>저녁 메뉴: {MenuList[0].dinner}</li>
        </ul>
      </div>

      <div>
        <h3>{MenuList[1].week}</h3>
        <ul>
          <li>아침 메뉴: {MenuList[1].breakfast}</li>
          <li>점심 메뉴: {MenuList[1].lunch}</li>
          <li>저녁 메뉴: {MenuList[1].dinner}</li>
        </ul>
      </div>

      <div>
        <h3>{MenuList[2].week}</h3>
        <ul>
          <li>아침 메뉴: {MenuList[2].breakfast}</li>
          <li>점심 메뉴: {MenuList[2].lunch}</li>
          <li>저녁 메뉴: {MenuList[2].dinner}</li>
        </ul>
      </div>
    </>
  );
};
