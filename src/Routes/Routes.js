import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Allcategories from '../components/Allcategories/Allcategories';
import AllProducts from '../components/AllProducts/AllProducts';
import { ProductProvider } from "../layout/Contexts/productContext";
import { CategoryProvider } from "../layout/Contexts/categoryContext";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
        <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/categories" element={<Allcategories />} />
            <Route path="/products" element={<AllProducts />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
};

export default MyRoutes;
