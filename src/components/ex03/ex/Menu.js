export const Menus = ({ breakfast, lunch, dinner }) => {
  return (
    <div>
      <h3>아침 메뉴</h3>
      <ul>
        <li>아침메뉴: {breakfast}</li>
        <li>아침메뉴: {lunch}</li>
        <li>아침메뉴: {dinner}</li>
      </ul>
    </div>
  );
};
