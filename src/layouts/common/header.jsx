// Import Custom Component
// import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import { useLocation } from "react-router-dom";
// import LoginModal from "../features/modals/login-modal";

export default function Header({ adClass = "" }) {
  const location = useLocation();
  const headerRef = useRef();

  const path = location.pathname;

  function openMobileMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-active");
    e.currentTarget.classList.toggle("active");
  }

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    // const header = document.querySelector(".header-section");
    if (headerRef.current) {
      const scrollTop = window.scrollY;
      scrollTop > 50
        ? headerRef.current.classList.add("is-sticky")
        : headerRef.current.classList.remove("is-sticky");
    }
  };

  return (
    <header ref={headerRef} className={`header ${adClass}`}>
      <div
        className={`header-middle text-dark sticky-header ${
          true ? "mobile-sticky" : ""
        }`}
      >
        <div className="container">
          <button
            className="mobile-menu-toggler mr-2"
            type="button"
            onClick={openMobileMenu}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="header-left">
            <ALink href="/" className="logo">
              <img src="/images/logo.png" alt="Porto Logo" />
            </ALink>
          </div>
          <div className="header-center">
            <MainMenu />
          </div>
          <div className="header-right">
            <SearchForm />

            <ALink href="/pages/login" className="header-icon header-icon-user">
              <i className="icon-user-2"></i>
            </ALink>

            <ALink href="/pages/wishlist" className="header-icon">
              <i className="icon-wishlist-2"></i>
            </ALink>

            <CartMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
