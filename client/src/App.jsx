import { Routes, Route } from "react-router";

import "./styles/reset.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BookTable from "./components/book-table/BookTable";
import MyBookings from "./components/my-bookings/MyBookings";

import UserProvider from "./providers/UserProvider";

import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";
import Logout from "./components/logout/Logout";
import ProductDetails from "./components/product-details/ProductDetails";
import Footer from "./components/footer/Footer";
import NotFound from "./components/not-found/NotFound";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <UserProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/products/:id"
              element={<ProductDetails></ProductDetails>}
            ></Route>

            <Route path="/book-table" element={<BookTable />} />

            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/logout" element={<Logout></Logout>}></Route>
            </Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </UserProvider>
  );
}

export default App;
