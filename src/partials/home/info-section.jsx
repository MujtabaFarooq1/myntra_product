import React from "react";

// Import Custom Component
import OwlCarousel from "../../features/owl-carousel";

// Import Settigns
import { infoBoxSlider } from "../../utils/data/slider";

export default function InfoSection() {
  return (
    <OwlCarousel
      adClass="info-boxes-slider owl-theme mb-2"
      options={infoBoxSlider}
    >
      <div className="info-box info-box-icon-left">
        <i className="icon-shipping"></i>

        <div className="info-box-content">
          <h4>FREE SHIPPING &amp; RETURN</h4>
          <p className="text-body">Free shipping on all orders over $99.</p>
        </div>
      </div>

      <div className="info-box info-box-icon-left">
        <i className="icon-money"></i>

        <div className="info-box-content">
          <h4>MONEY BACK GUARANTEE</h4>
          <p className="text-body">100% money back guarantee</p>
        </div>
      </div>

      <div className="info-box info-box-icon-left">
        <i className="icon-support"></i>

        <div className="info-box-content">
          <h4>ONLINE SUPPORT 24/7</h4>
          <p className="text-body">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </OwlCarousel>
  );
}
