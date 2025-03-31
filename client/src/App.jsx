import { Routes, Route } from "react-router";
import "./styles/reset.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BookTable from "./components/book-table/BookTable";
import MyBookings from "./components/my-bookings/MyBookings";

function App() {
  return (
    <div id="box">
      <Header></Header>

      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/book-table" element={<BookTable></BookTable>}></Route>
        <Route path="/my-bookings" element={<MyBookings></MyBookings>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
