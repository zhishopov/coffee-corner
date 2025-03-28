import { Routes, Route } from "react-router";
import "./styles/reset.css";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div id="box">
      <Navigation></Navigation>
      <div id="main-content">
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
