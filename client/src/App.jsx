import "./styles/reset.css";

import Navigation from "./components/navigation/Navigation";
import Menu from "./components/menu/Menu";
import Register from "./components/register/Register";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigationhandler = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Navigation onNavigate={navigationhandler}></Navigation>
      {currentPage === "register" && <Register></Register>}
      {currentPage === "menu" && <Menu></Menu>}
      {currentPage === "home" && <h1>Home Page</h1>}
    </>
  );
}

export default App;
