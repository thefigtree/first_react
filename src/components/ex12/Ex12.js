import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { Header } from "./components/Header";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sub/:id" element={<Sub01></Sub01>}></Route>
        {/* <Route path="/sub/:id" element={<Sub01></Sub01>}></Route> */}
        {/* <Route path="/sub/:id" element={<Sub01></Sub01>}></Route> */}
        {/* <Route path="/sub/:id" element={<Sub01></Sub01>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
