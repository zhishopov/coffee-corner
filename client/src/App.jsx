import { Routes, Route } from "react-router";
import "./styles/reset.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="box">
      <Header></Header>
      <div id="main-content">
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
