import React from "react";
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../../layouts/common/ALink";
import OwlCarousel from "../../features/owl-carousel";

// Import Settings
import { HomeSlider } from "../../utils/data/slider";

// Import Keyframes
import { fadeInUpShorter } from "../../utils/data/keyframes";

function HomeSection() {
  return (
    <OwlCarousel
      adClass="home-slider owl-theme slide-animate show-nav-hover nav-big mb-2 text-uppercase"
      options={HomeSlider}
    >
      <div className="home-slide home-slide1 banner">
        <figure>
          <LazyLoadImage
            alt="slider image"
            src="images/home/slider/slide-1.jpg"
            threshold={500}
            effect="black and white"
            width="100%"
            height={499}
          />
        </figure>
        <div className="container d-flex align-items-center">
          <div className="banner-layer">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <>
                <h4 className="text-transform-none m-b-3">
                  Find the Boundaries. Push Through!
                </h4>
                <h2 className="text-transform-none mb-0">Summer Sale</h2>
                <h3 className="m-b-3">70% Off</h3>
                <h5 className="d-inline-block mb-0">
                  <span>Starting At</span>
                  <b className="coupon-sale-text text-white bg-secondary align-middle">
                    <sup>$</sup>
                    <em className="align-text-top">199</em>
                    <sup>99</sup>
                  </b>
                </h5>
                <ALink href="/shop" className="btn btn-dark btn-lg">
                  Shop Now!
                </ALink>
              </>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="home-slide home-slide2 banner banner-md-vw">
        <figure>
          <LazyLoadImage
            alt="slider image"
            src="images/home/slider/slide-2.jpg"
            threshold={500}
            effect="black and white"
            width="100%"
            height={499}
          />
        </figure>
        <div className="container d-flex align-items-center">
          <div className="banner-layer d-flex justify-content-center">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <div className="mx-auto">
                <h4 className="m-b-1">Extra</h4>
                <h3 className="m-b-2">20% off</h3>
                <h3 className="mb-2 heading-border">Accessories</h3>
                <h2 className="text-transform-none m-b-4">Summer Sale</h2>
                <ALink href="/shop" className="btn btn-dark btn-block">
                  Shop All Sale
                </ALink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default React.memo(HomeSection);
