import React from "react";
import Reveal from "react-awesome-reveal";

// Import Custom Component
import ALink from "../../layouts/common/ALink";

// Import Settings
import { fadeInUpShorter } from "../../utils/data/keyframes";

function SaleBanner() {
  return (
    <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
      <div
        className="banner banner-big-sale"
        style={{ backgroundImage: "url(images/home/banners/banner-4.jpg)" }}
      >
        <div className="banner-content row align-items-center mx-0">
          <div className="col-md-9 col-sm-8">
            <h2 className="text-white text-uppercase text-center text-sm-left ls-n-20 mb-md-0 px-4">
              <b className="d-inline-block mr-4 mb-1 mb-md-0">Big Sale</b>
              All new fashion brands items up to 70% off
              <small className="text-transform-none align-middle">
                Online Purchases Only
              </small>
            </h2>
          </div>
          <div className="col-md-3 col-sm-4 text-center text-sm-right">
            <ALink className="btn btn-light btn-white btn-lg" href="/shop">
              View Sale
            </ALink>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default React.memo(SaleBanner);
