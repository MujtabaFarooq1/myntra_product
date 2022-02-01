import SlideToggle from "react-slide-toggle";

// import { useRouter } from "next/router";
import { useLocation, useNavigate } from "react-router-dom";

import { useState, useEffect, useMemo } from "react";
// import { useQuery } from "@apollo/client";
import StickyBox from "react-sticky-box";
import Tree from "rc-tree";
import InputRange from "react-input-range";

import ALink from "../../../layouts/common/ALink";
import SidenavCategories from "../../../features/sidenavCategories";
import OwlCarousel from "../../../features/owl-carousel";

// import withApollo from "../../../../server/apollo";
// import { GET_SHOP_SIDEBAR_DATA } from "../../../../server/queries";

import { widgetFeaturedProductSlider } from "../../../utils/data/slider";
import { shopColors, shopSizes } from "../../../utils/data/shop";
import ProductThree from "../../../features/products/product-three";

import fakeData from "../../../FakeData/fakeData";
import SearchToggle from "../../../features/products/searchToggle";

const TreeNode = (props) => {
  return (
    <>
      {props.name}
      <span className="products-count">({props.count})</span>
    </>
  );
};

const customCategories = [
  "shirt",
  "pants",
  "socks",
  "shoes",
  "shirt",
  "pants",
  "socks",
  "shoes",
];

const brands = [
  "brand1",
  "brand2",
  "brand3",
  "brand4",
  "brand5",
  "brand6",
  "brand7",
  "brand1",
  "brand2",
  "brand3",
  "brand4",
  "brand5",
  "brand6",
  "brand7",
];

function ShopSidebarOne(props) {


  // const router = useRouter();
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.query;
  // const { data, loading, error } = useQuery(GET_SHOP_SIDEBAR_DATA, {
  //   variables: { featured: true },
  // });
  const data = fakeData;
  const [priceRange, setRange] = useState({ min: 0, max: 1000 });
  const categories = useMemo(() => {
    let cats = data ? data.productCategories : [];
    let stack = [],
      result = [];
    result = cats.reduce((acc, cur) => {
      if (!cur.parent) {
        let newNode = {
          key: cur.slug,
          title: <TreeNode name={cur.name} count={cur.count} />,
          children: [],
        };
        acc.push(newNode);
        stack.push({
          name: cur.name,
          children: newNode.children,
        });
      }
      return acc;
    }, []);

    let temp, children, childNode;

    while (stack.length) {
      temp = stack[stack.length - 1];
      stack.pop();
      children = cats.filter((item) => item.parent === temp.name);
      children.forEach((child) => {
        childNode = {
          key: child.slug,
          title: <TreeNode name={child.name} count={child.count} />,
          children: [],
        };
        temp.children.push(childNode);
        stack.push({
          name: child.name,
          children: childNode.children,
        });
      });
    }

    return result;
  }, [data]);

  useEffect(() => {
    return () => {
      closeSidebar();
    };
  }, []);

  useEffect(() => {
    if (query?.min_price && query?.max_price) {
      setRange({
        min: parseInt(query?.min_price),
        max: parseInt(query?.max_price),
      });
    } else {
      setRange({ min: 0, max: 1000 });
    }
  }, [query]);

  function onChangePriceRange(value) {
    setRange(value);
  }

  function filterByCategory(selected) {
    navigate(
      location.pathname.replace("[grid]", query?.grid) +
      "?category=" +
      (selected.length ? selected[0] : "")
    );
  }

  function containsAttrInUrl(type, value) {
    // const currentQueries = query[type] ? query[type].split(",") : [];
    const currentQueries = [];
    return currentQueries && currentQueries.includes(value);
  }

  function getUrlForAttrs(type, value) {
    // let currentQueries = query[type] ? query[type].split(",") : [];
    let currentQueries = [];
    currentQueries = containsAttrInUrl(type, value)
      ? currentQueries.filter((item) => item !== value)
      : [...currentQueries, value];
    return currentQueries.join(",");
  }

  function filterByPrice(e) {
    e.preventDefault();
    let url = location.pathname.replace("[grid]", query?.grid);
    let arr = [
      `min_price=${priceRange.min}`,
      `max_price=${priceRange.max}`,
      "page=1",
    ];
    for (let key in query) {
      if (
        key !== "min_price" &&
        key !== "max_price" &&
        key !== "page" &&
        key !== "grid"
      )
        arr.push(key + "=" + query[key]);
    }
    url = url + "?" + arr.join("&");
    navigate(url);
  }

  function closeSidebar() {
    document.querySelector("body").classList.contains("sidebar-opened") &&
      document.querySelector("body").classList.remove("sidebar-opened");
  }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return (
    <>
      <div className="sidebar-overlay" onClick={closeSidebar}></div>
      <aside
        className={`sidebar-shop col-lg-3  mobile-sidebar skeleton-body skel-shop-products ${true ? "loaded" : ""
          } ${props.display === "none" ? "d-lg-none" : ""} ${props.right ? "" : "order-lg-first"
          }`}
      >
        <StickyBox className="sidebar-wrapper" offsetTop={70}>
          <div className="widget">
            <SlideToggle>
              {({ onToggle, setCollapsibleElement, toggleState }) => (
                <>

                  <div className="SearchToggleWrapper">
                    <SearchToggle />
                  </div>


                  <h3 className="widget-title mt-1">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onToggle();
                      }}
                      className={toggleState === "COLLAPSED" ? "collapsed" : ""}
                    >
                      Categories
                    </a>
                  </h3>
                  <div className="overflow-hidden" ref={setCollapsibleElement}>
                    <div className="widget-body">
                      <SidenavCategories customCategories={customCategories} />
                    </div>
                  </div>
                </>
              )}
            </SlideToggle>
          </div>

          <div className="widget">
            <SlideToggle>
              {({ onToggle, setCollapsibleElement, toggleState }) => (
                <>
                  <h3 className="widget-title">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onToggle();
                      }}
                      className={toggleState === "COLLAPSED" ? "collapsed" : ""}
                    >
                      Brands
                    </a>
                  </h3>
                  <div className="overflow-hidden" ref={setCollapsibleElement}>
                    <div className="widget-body">
                      <SidenavCategories customCategories={brands} />
                    </div>
                  </div>
                </>
              )}
            </SlideToggle>
          </div>

          {(query?.category ||
            query?.sizes ||
            query?.colors ||
            query?.min_price ||
            query?.max_price) && (
              <div className="widget">
                <ALink
                  href={{ query: { grid: query?.grid } }}
                  scroll={"false "}
                  className="btn btn-primary reset-filter"
                >
                  Reset All Filters
                </ALink>
              </div>
            )}

          <div className="widget overflow-hidden">
            <SlideToggle>
              {({ onToggle, setCollapsibleElement, toggleState }) => (
                <>
                  <h3 className="widget-title">
                    <a
                      className={toggleState === "COLLAPSED" ? "collapsed" : ""}
                      href="/"
                      role="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onToggle();
                      }}
                    >
                      Price
                    </a>
                  </h3>

                  <div ref={setCollapsibleElement}>
                    <div className="widget-body pb-0">
                      <form action="#">
                        <div className="price-slider-wrapper">
                          <InputRange
                            maxValue={1000}
                            minValue={0}
                            step={50}
                            value={priceRange}
                            onChange={onChangePriceRange}
                          />
                        </div>

                        <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                          <div className="filter-price-text">
                            Price:{" "}
                            <span id="filter-price-range">
                              ${priceRange.min} &mdash; ${priceRange.max}
                            </span>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => filterByPrice(e)}
                          >
                            Filter
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </SlideToggle>
          </div>


          <div className="widget">
            <SlideToggle>
              {({ onToggle, setCollapsibleElement, toggleState }) => (
                <>
                  <h3 className="widget-title">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onToggle();
                      }}
                      className={toggleState === "COLLAPSED" ? "collapsed" : ""}
                    >
                      Colors
                    </a>
                  </h3>

                  {/* this is custom checkout for colors  */}



                  <div className="overflow-hidden" ref={setCollapsibleElement}>
                    <div className="widget-body">
                      <div className="widget-body pb-0">
                        <ul className="config-swatch-list colors_list_AW">
                          {shopColors.map((item, index) => (

                            <li
                              className={
                                containsAttrInUrl("colors rounded-colors", item.name)
                                  ? "active"
                                  : ""
                              }
                              key={`color-${index}`}
                            >
                              <input type="checkbox" className="colors_checkbox" />
                              <ALink
                                href={{
                                  query: {
                                    ...query,
                                    page: 1,
                                    colors: getUrlForAttrs("colors", item.name),
                                  },
                                }}
                                style={{ backgroundColor: item?.color, }}
                                scroll={"false "}
                              >
                                <div className="colors_item_name_AW">{item.name}</div>
                              </ALink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </SlideToggle>
          </div>



          <div className="widget widget-size">
            <SlideToggle>
              {({ onToggle, setCollapsibleElement, toggleState }) => (
                <>
                  <h3 className="widget-title">
                    <a
                      className={toggleState === "COLLAPSED" ? "collapsed" : ""}
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onToggle();
                      }}
                    >
                      Sizes
                    </a>
                  </h3>
                  <div className="overflow-hidden" ref={setCollapsibleElement}>
                    <div className="widget-body pb-0">
                      <ul className="config-size-list">
                        {shopSizes.map((item, index) => (
                          <li
                            className={
                              containsAttrInUrl("sizes", item.size)
                                ? "active"
                                : ""
                            }
                            key={`size-${index}`}
                          >
                            <ALink
                              href={{
                                query: {
                                  ...query,
                                  page: 1,
                                  sizes: getUrlForAttrs("sizes", item.size),
                                },
                              }}
                              scroll={"false "}
                            >
                              {item.size}
                            </ALink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </SlideToggle>
          </div>
        </StickyBox>
      </aside>
    </>
  );
}

// export default withApollo({ ssr: typeof window === "undefined" })(
//   ShopSidebarOne
// );

export default ShopSidebarOne;

