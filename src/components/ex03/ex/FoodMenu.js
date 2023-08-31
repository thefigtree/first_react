import { Menus } from "./Menu";
import { WeekMenu } from "./WeekMenu";

const menus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "연어포케",
    dinner: "마라 치즈 타코야끼",
  },
  {
    week: "화요일",
    breakfast: "국밥",
    lunch: "치킨타코",
    dinner: "토마토 파스타",
  },
  {
    week: "수요일",
    breakfast: "샌드위치",
    lunch: "햄버거",
    dinner: "프렌치 토스트",
  },
];

// const menus = [
//   {
//     week: "월",
//     brekfast: "시리얼",
//     lunch: "연어포케",
//     dinner: "마라치즈타코야끼",
//   },
// ];

export const FoodMenu = () => {
  return (
    <div>
      {/* *문제
    ul,li 태그를 활용하여, 아침 점심 저녁 메뉴 제작
    단, props를 활용할 것 */}
      {/* <Menus
        breakfast="시리얼"
        lunch="연어포케"
        dinner="마라치즈타코야끼"
      ></Menus> */}

      <WeekMenu MenuList={menus}></WeekMenu>
    </div>
  );
};
