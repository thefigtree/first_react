// import "../css/con_style.css";

const Condb = [
  {
    id: "0",
    imgUrl: "",
    main: "Title is title 1",
    sub: "Title is not title 1",
  },
  {
    id: "1",
    imgUrl: "",
    main: "Title is title 2",
    sub: " Title is not title 2",
  },
  {
    id: "2",
    imgUrl: "",
    main: "Title is title 3",
    sub: " Title is not title 3",
  },
];

export const ContentEx = () => {
  return (
    <div>
      <div className="con_wrap">
        {Condb.map((Condb) => (
          <div className="con" key={Condb.id}>
            <div
              className="bg"
              style={{
                background: "aqua",
              }}
            ></div>
            <h3>{Condb.main}</h3>
            <p>{Condb.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
