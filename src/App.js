import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import WithHeader from "./layouts/WithHeader";
import WithFilters from "./layouts/WithFiltersSideBar";
import "./sass/style.scss";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import WishlistPage from "./pages/WishlistPage";
import ScrollToTop from "./features/scroll-to-top";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import BrandPage from "./pages/BrandPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route index element={<HomePage />} />

          <Route path="counter" element={<Counter />} />

          <Route path="/products/" element={<ProductsPage />} />

          <Route path="/products/:productId" element={<ProductPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/blogs" element={<BlogsPage />} />

          <Route path="/blogs/:blogId" element={<BlogPage />} />

          <Route path="/brands" element={<BrandPage />} />

          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
