import React from "react";
import Reveal from "react-awesome-reveal";

// Import Custom Component
import ProductOne from "../../features/products/product-one";
import OwlCarousel from "../../features/owl-carousel";

// Import Settings
import { productSlider } from "../../utils/data/slider";
import { fadeInRightShorter } from "../../utils/data/keyframes";

export default function NewCollection(props) {
  const { product, loading } = props;
  const sliderOptions = {
    ...productSlider,
    responsive: { ...productSlider.responsive, 1200: { items: 5 } },
  };

  return (
    <section className="new-products-section pb-0">
      <div className="container">
        <h2 className="section-title heading-border ls-20 border-0">
          New Arrivals
        </h2>

        <OwlCarousel
          adClass="products-slider owl-theme custom-products nav-outer show-nav-hover nav-image-center mb-2"
          options={sliderOptions}
        >
          {loading
            ? [0, 1, 2, 3, 4].map((item, index) => (
                <div
                  className="skel-pro skel-pro-grid"
                  key={"product-one" + index}
                ></div>
              ))
            : product.map((item, index) => (
                <Reveal
                  keyframes={fadeInRightShorter}
                  delay={100}
                  duration={1000}
                  triggerOnce
                  key={"product-one" + index}
                >
                  <ProductOne product={item} />
                </Reveal>
              ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
