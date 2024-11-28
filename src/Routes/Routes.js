import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "../App";
import Allcategories from "../components/Allcategories/Allcategories";
import AllProducts from "../components/AllProducts/AllProducts";
import { ProductProvider } from "../layout/Contexts/productContext";
import { CategoryProvider } from "../layout/Contexts/categoryContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login.jsx";
import Register from "../components/Register/Register";
import UserProfile from "../components/UserProfile/UserProfile.jsx";
import { UserProvider } from "../layout/Contexts/userContext.jsx";
import Cart from "../components/Cart/Cart.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentSuccess from "../components/Modals/SuccessModal.jsx";
import FailModal from "../components/Modals/FailModal.jsx";
import Logout from "../components/Modals/Logout.jsx";

const stripePromise = loadStripe('pk_test_51OTIAJSIBQHp4SrpnAMD9ufpg5DJiGLdmzMcNOiCo2KByrnqO7jKDvUJ8Ddvihj6s5nace7mYrm1jjNArTy1yViY00LErcEJBa');

const MyRoutes = () => {
  const location = useLocation();
  const isLoginUser =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <CategoryProvider>
      <ProductProvider>
        <UserProvider>
          {!isLoginUser && <Header />}
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<App />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/categories" element={<Allcategories />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failure" element={<FailModal />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/cart"
              element={
                <Elements stripe={stripePromise}>
                  <Cart />
                </Elements>
              }
            />
          </Routes>
          {!isLoginUser && <Footer />}
        </UserProvider>
      </ProductProvider>
    </CategoryProvider>
  );
};

export default MyRoutes;
