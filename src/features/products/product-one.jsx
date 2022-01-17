import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import { useRouter } from 'next/router';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Actions
// import { actions as WishlistAction } from "../../app/reducers/wishlist/wishlist";
// import { actions as CartAction } from "../../app/reducers/cart/cart";
import { modalActions } from "../../app/reducers/modal/modalSlice";

// Import Custom Component
import ALink from "../../layouts/common/ALink";

// Import Utils
import ProductCountdown from "../countdown";
import fakeData from "../../FakeData/fakeData";
import { cartActions } from "../../app/reducers/cart/cartSlice";
import { wishListActions } from "../../app/reducers/wishlist/wishlistSlice";

function ProductOne(props) {
  // console.log("I got props are ! ", props);
  // const router = useRouter();

  const product = fakeData.products[0];

  const navigate = useNavigate();
  let { adClass = "", link = "default" } = props;

  function isSale() {
    return product?.price?.length &&
      product.price[0] !== product.price[1] &&
      product.variants.length === 0
      ? "-" +
          (
            (100 * (product.price[1] - product.price[0])) /
            product.price[1]
          ).toFixed(0) +
          "%"
      : product.variants.find((variant) => variant.sale_price)
      ? "Sale"
      : false;
  }

  function isInWishlist() {
    return (
      product &&
      props?.wishlist?.findIndex((item) => item.slug === product.slug) > -1
    );
  }

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist()) {
      let target = e.currentTarget;
      target.classList.add("load-more-overlay");
      target.classList.add("loading");

      setTimeout(() => {
        target.classList.remove("load-more-overlay");
        target.classList.remove("loading");
        props.AddToWishlist({ product });
      }, 1000);
    } else {
      navigate("/wishlist");
    }
  }

  function onAddCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onQuickViewClick(e) {
    e.preventDefault();
    props.ShowQuick(product.slug);
  }

  return (
    <div
      className={`product-default inner-quickview inner-icon media-with-lazy ${adClass}`}
    >
      <figure>
        <ALink href={`/product/${link}/${product.slug}`}>
          <div className="lazy-overlay"></div>

          <LazyLoadImage
            alt="product"
            src={
              process.env.REACT_APP_LOCAL_ASSET_URL + product.pictures[0].url
            }
            threshold={500}
            effect="black and white"
            width="100%"
            height="auto"
          />
          {product.pictures.length >= 2 ? (
            <LazyLoadImage
              alt="product"
              src={
                process.env.REACT_APP_LOCAL_ASSET_URL + product.pictures[1].url
              }
              threshold={500}
              effect="black and white"
              wrapperClassName="product-image-hover"
            />
          ) : (
            ""
          )}
        </ALink>

        <div className="label-group">
          {product.is_hot ? (
            <div className="product-label label-hot">HOT</div>
          ) : (
            ""
          )}

          {isSale() ? (
            <div className="product-label label-sale">{isSale()}</div>
          ) : (
            ""
          )}
        </div>

        <div className="btn-icon-group">
          {product.variants.length > 0 ? (
            <ALink
              href={`/product/default/${product.slug}`}
              className="btn-icon btn-add-cart"
            >
              <i className="fa fa-arrow-right"></i>
            </ALink>
          ) : (
            <a
              href="/"
              className="btn-icon btn-add-cart product-type-simple"
              title="Add To Cart"
              onClick={onAddCartClick}
            >
              <i className="icon-shopping-cart">shop cart</i>
            </a>
          )}
        </div>

        {product.until && product.until !== null && (
          <ProductCountdown product={product} />
        )}

        <a
          href="/"
          className="btn-quickview"
          title="Quick View"
          onClick={onQuickViewClick}
        >
          Quick View
        </a>
      </figure>

      <div className="product-details">
        <div className="category-wrap">
          <div className="category-list">
            {product.categories
              ? product.categories.map((item, index) => (
                  <React.Fragment key={item.slug + "-" + index}>
                    <ALink
                      href={{
                        pathname: "/shop",
                        query: { category: item.slug },
                      }}
                    >
                      {item.name}
                    </ALink>
                    {index < product.categories.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))
              : ""}
          </div>

          <a
            href="/"
            className={`btn-icon-wish ${
              isInWishlist() ? "added-wishlist" : ""
            }`}
            onClick={onWishlistClick}
            title={`${
              isInWishlist() === true ? "Go to Wishlist" : "Add to Wishlist"
            }`}
          >
            <i className="icon-heart"></i>
          </a>
        </div>

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
          {product?.price?.length && product?.price[0] === product?.price[1] ? (
            <span className="product-price">{"$" + product.price[0]}</span>
          ) : product.variants.length > 0 ? (
            <span className="product-price">
              {/* {"$" + product.price[0].toFixed(2)} &ndash;{" "}
              {"$" + product.price[1].toFixed(2)} */}
              {"$" + product.variants[0].price.toFixed()}
              {/* {product.variants.map((pd) => (
                <p key={uuidv4()}>$ {pd.price.toFixed()}</p>
              ))} */}
            </span>
          ) : (
            <>
              <span className="old-price">
                {"$" + product?.price[1]?.toFixed(2) || 0}
              </span>
              <span className="product-price">
                {"$" + product?.price[0]?.toFixed(2) || 0}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    wishlist: state?.wishList?.list ? state.wishList.list : [],
  };
};

export default connect(mapStateToProps, {
  ...wishListActions,
  ...cartActions,
  ...modalActions,
})(React.memo(ProductOne));
