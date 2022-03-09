import React from "react";
import Reveal from "react-awesome-reveal";
// import { useQuery } from "@apollo/client";

// Import Apollo Server and Query
// import withApollo from "../../../../server/apollo";
// import { GET_SPECIAL_PRODUCTS } from "../../../../server/queries";

// Import Custom Component
import ProductThree from "../../../features/products/product-three";
import ProductOne from "../../../features/products/product-one";

// Import Keyframes
import { fadeInLeftShorter } from "../../../utils/data/keyframes";
import fakeData from "../../../FakeData/fakeData";

function ProductWidgetContainer(props) {
  const { adClass = "" } = props;
  const loading = false;
  const error = false;
  const data = fakeData;
  //   const { data, loading, error } = useQuery(GET_SPECIAL_PRODUCTS, {
  //     variables: {
  //       featured: true,
  //       bestSelling: true,
  //       latest: true,
  //       topRated: true,
  //       count: 3,
  //     },
  //   });
  const featured = data && data.products.slice(5, 10);
  const bestSelling = data && data.products.slice(5, 10);
  const latest = data && data.products.slice(5, 10);
  const topRated = data && data.products.slice(5, 10);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section
      className={`product-widgets-container pb-2 skeleton-body skel-shop-products ${loading ? "" : "loaded"
        } ${adClass}`}
    >
      <div className="container">
        <h4 className="section-sub-title">Featured Products</h4>

        <div className="row">

          <div className="col-lg-3 col-md-4 col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {loading
                  ? [0, 1, 2, 3].map((item, index) => (
                    <div
                      className="skel-pro skel-pro-grid"
                      key={"product-skel" + index}
                    ></div>
                  ))
                  : data.products.slice(0, 3).map((item, index) => (
                    <ProductOne product={item} key={"product-one" + index} />
                  ))}
              </>
            )}
          </div>

          <div className="col-lg-3 col-md-4  col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {loading
                  ? [0, 1, 2, 3].map((item, index) => (
                    <div
                      className="skel-pro skel-pro-grid"
                      key={"product-skel" + index}
                    ></div>
                  ))
                  : data.products.slice(0, 3).map((item, index) => (
                    <ProductOne product={item} key={"product-one" + index} />
                  ))}
              </>
            )}
          </div>

          <div className="col-lg-3 col-md-4  col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {loading
                  ? [0, 1, 2, 3].map((item, index) => (
                    <div
                      className="skel-pro skel-pro-grid"
                      key={"product-skel" + index}
                    ></div>
                  ))
                  : data.products.slice(0, 3).map((item, index) => (
                    <ProductOne product={item} key={"product-one" + index} />
                  ))}
              </>
            )}
          </div>

          <div className="col-lg-3 col-md-4  col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {loading
                  ? [0, 1, 2, 3].map((item, index) => (
                    <div
                      className="skel-pro skel-pro-grid"
                      key={"product-skel" + index}
                    ></div>
                  ))
                  : data.products.slice(0, 3).map((item, index) => (
                    <ProductOne product={item} key={"product-one" + index} />
                  ))}
              </>
            )}
          </div>

          {/* <div className="col-lg-2 col-md-4  col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {loading
                  ? [0, 1, 2, 3].map((item, index) => (
                    <div
                      className="skel-pro skel-pro-grid"
                      key={"product-skel" + index}
                    ></div>
                  ))
                  : data.products.slice(0, 3).map((item, index) => (
                    <ProductOne product={item} key={"product-one" + index} />
                  ))}
              </>
            )}
          </div>

          <div className="col-lg-2 col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {loading
                  ? [0, 1, 2, 3].map((item, index) => (
                    <div
                      className="skel-pro skel-pro-grid"
                      key={"product-skel" + index}
                    ></div>
                  ))
                  : data.products.slice(0, 3).map((item, index) => (
                    <ProductOne product={item} key={"product-one" + index} />
                  ))}
              </>
            )}
          </div> */}






          {/* <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>
                {bestSelling.slice(0, 3).map((product, index) => (
                  <ProductThree
                    product={product}
                    key={(`ProductThree`, index)}
                  />
                ))}
              </>
            )}
          </div>

          <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>

                {latest.slice(0, 3).map((product, index) => (
                  <ProductThree
                    product={product}
                    key={(`ProductThree`, index)}
                  />
                ))}
              </>
            )}
          </div>

          <div className="col-lg-3 col-sm-6 pb-0">
            {loading ? (
              [0, 1, 2].map((item, index) => (
                <div
                  className="skel-product-col skel-pro mb-2"
                  key={"ProductThree" + index}
                ></div>
              ))
            ) : (
              <>

                {topRated.slice(0, 3).map((product, index) => (
                  <ProductThree
                    product={product}
                    key={(`ProductThree`, index)}
                  />
                ))}
              </>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}

// export default withApollo({ ssr: typeof window === "undefined" })(
//   ProductWidgetContainer
// );

export default ProductWidgetContainer;
