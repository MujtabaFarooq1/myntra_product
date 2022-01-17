import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuid } from "uuid";

// Import Custom Component
import ALink from "../../layouts/common/ALink";

export default function ProductThree(props) {
  const { adClass = "", link = "default", product } = props;

  return (
    <div
      className={`product-default media-with-lazy left-details product-widget ${adClass}`}
    >
      <figure>
        <ALink href={`/product/${link}/${product.slug}`}>
          <div className="lazy-overlay"></div>

          <LazyLoadImage
            alt="product"
            src={
              process.env.REACT_APP_LOCAL_ASSET_URL +
              product.small_pictures[0].url
            }
            threshold={500}
            effect="black and white"
            width={84}
          />
          {product.small_pictures.length >= 2 ? (
            <LazyLoadImage
              alt="product"
              src={
                process.env.REACT_APP_LOCAL_ASSET_URL +
                product.small_pictures[1].url
              }
              threshold={500}
              effect="black and white"
              wrapperClassName="product-image-hover"
            />
          ) : (
            ""
          )}
        </ALink>
      </figure>

      <div className="product-details">
        <h3 className="product-title">
          <ALink href={`/product/default/${product.slug}`}>
            {product.name}
          </ALink>
        </h3>

        <div className="ratings-container">
          <div className="product-ratings">
            <span
              className="ratings"
              style={{ width: 20 * product.ratings + "%" }}
            ></span>
            <span className="tooltiptext tooltip-top">
              {product.ratings.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="price-box">
          {product?.price ? (
            <span className="product-price">
              {"$" + product?.price?.length
                ? product?.price[0]?.toFixed(2)
                : product?.price || 0}
            </span>
          ) : product.variants.length > 0 ? (
            <span className="product-price">
              {product.variants.map((item) => {
                return (
                  <p key={uuid()}>{"$" + item.price.toFixed(2)} &ndash;</p>
                );
              })}
              {/* {"$" + product.price[0].toFixed(2)} &ndash;{" "}
              {"$" + product.price[1].toFixed(2)} */}
            </span>
          ) : (
            <>
              <span className="old-price">
                {"$" + product?.price ? product.price.toFixed(2) : 0}
              </span>
              <span className="product-price">
                {"$" + product?.price ? product.price.toFixed(2) : 0}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
