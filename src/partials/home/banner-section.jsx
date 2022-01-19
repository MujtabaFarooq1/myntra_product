import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "../../layouts/common/ALink";
import OwlCarousel from "../../features/owl-carousel";
import {
  fadeInUpShorter,
  fadeInLeftShorter,
  fadeInRightShorter,
} from "../../utils/data/keyframes";

export default function BannerSection() {
  return (
    <OwlCarousel
      adClass="home-slider banners-container owl-theme"
      options={{
        nav: false,
        dots: false,
        loop: false,
        margin: 20,
        responsive: {
          480: {
            items: 2,
          },
          768: {
            items: 5,
          },
        },
      }}
    >
      <Reveal
        keyframes={fadeInLeftShorter}
        delay={500}
        duration={1000}
        triggerOnce
      >
        <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
          <LazyLoadImage
            alt="banner"
            src="/images/banners/customBanner3.png"
            width={265}
          />
        </div>
      </Reveal>
      <Reveal
        keyframes={fadeInLeftShorter}
        delay={500}
        duration={1000}
        triggerOnce
      >
        <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
          <LazyLoadImage
            alt="banner"
            src="/images/banners/customBanner3.png"
            width={265}
          />
        </div>
      </Reveal>
      <Reveal
        keyframes={fadeInLeftShorter}
        delay={500}
        duration={1000}
        triggerOnce
      >
        <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
          <LazyLoadImage
            alt="banner"
            src="/images/banners/customBanner3.png"
            width={265}
          />
        </div>
      </Reveal>
      <Reveal
        keyframes={fadeInLeftShorter}
        delay={500}
        duration={1000}
        triggerOnce
      >
        <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
          <LazyLoadImage
            alt="banner"
            src="/images/banners/customBanner3.png"
            width={265}
          />
        </div>
      </Reveal>
      <Reveal
        keyframes={fadeInLeftShorter}
        delay={500}
        duration={1000}
        triggerOnce
      >
        <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
          <LazyLoadImage
            alt="banner"
            src="/images/banners/customBanner3.png"
            width={265}
          />
        </div>
      </Reveal>

      {/* <Reveal
        keyframes={fadeInLeftShorter}
        delay={500}
        duration={1000}
        triggerOnce
      >
        <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100">
          <LazyLoadImage
            alt="banner"
            src="/images/banners/customBanner3.png"
            width={265}
            height={170}
          />
          <div className="banner-layer">
            <h3 className="m-b-2">Porto Watches</h3>
            <h4 className="m-b-4 text-primary">
              <sup className="text-dark">
                <del>20%</del>
              </sup>
              30%<sup>OFF</sup>
            </h4>
            <ALink href="/shop" className="text-dark text-uppercase ls-10">
              Shop Now
            </ALink>
          </div>
        </div>
      </Reveal> */}
    </OwlCarousel>
  );
}
