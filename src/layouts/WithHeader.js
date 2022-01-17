import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/header";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Cookie from "js-cookie";
import "react-image-lightbox/style.css";
import "react-toastify/dist/ReactToastify.min.css";
import "rc-tree/assets/index.css";
import "react-input-range/lib/css/index.css";
import "react-image-lightbox/style.css";

import { useLocation } from "react-router";

import ALink from "./common/ALink";
import StickyNavbar from "./common/partials/sticky-navbar";

import Footer from "./common/footer";
import MobileMenu from "./common/partials/mobile-menu";
import QuickModal from "../features/modals/quickview";
import VideoModal from "../features/modals/video-modal";

import { stickyInit, scrollTopHandlder, scrollTopInit } from "../utils";

function WithHeader({ children, hideQuickView, hideVideo }) {
  // const router = useRouter();
  const location = useLocation();
  const [showTopNotice, setShowTopNotice] = useState(
    !Cookie.get("closeTopNotice")
  );

  function closeTopNotice() {
    setShowTopNotice(false);
    Cookie.set("closeTopNotice", true, { expires: 7, path: location.basePath });
  }

  useEffect(() => {
    window.addEventListener("scroll", stickyInit, { passive: true });
    window.addEventListener("scroll", scrollTopInit, { passive: true });
    window.addEventListener("resize", stickyInit);
    // hideQuickView();
    // console.log("Hide QuickView is -->", hideQuickView);
    // hideVideo();

    return () => {
      window.removeEventListener("scroll", stickyInit, { passive: true });
      window.removeEventListener("scroll", scrollTopInit, { passive: true });
      window.removeEventListener("resize", stickyInit);
    };
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <Header />

        {/* Here is the notification component */}
        {showTopNotice ? (
          <div className="top-notice bg-dark text-white">
            <div className="container text-center">
              <h5 className="d-inline-block mb-0">
                Get Up to <b>40% OFF</b> New-Season Styles
              </h5>
              <ALink href="/shop" className="category mr-1">
                MEN
              </ALink>
              <ALink href="/shop" className="category mr-3">
                WOMEN
              </ALink>
              <small className="ml-1">* Limited time only.</small>
              <button
                title="Close (Esc)"
                type="button"
                onClick={closeTopNotice}
                className="mfp-close"
              >
                x
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* {children} */}

        <Outlet />

        <Footer />

        <ToastContainer
          autoClose={3000}
          duration={300}
          newestOnTo={true}
          className="toast-container"
          position="bottom-right"
          closeButton={false}
          hideProgressBar={true}
          newestOnTop={true}
          draggable={false}
        />

        <QuickModal />

        <VideoModal />

        <div className="wishlist-popup">
          <div className="wishlist-popup-msg">Product added!</div>
        </div>
      </div>

      <MobileMenu />

      <StickyNavbar />

      <a
        id="scroll-top"
        href="#"
        title="Top"
        role="button"
        className="btn-scroll"
        onClick={scrollTopHandlder}
      >
        <i className="icon-angle-up"></i>
      </a>
    </>
  );
}

// export default connect(null, actions)(Layout);

export default WithHeader;
