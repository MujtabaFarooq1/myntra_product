import ALink from "../../layouts/common/ALink";

export default function ProductNav(props) {
  const { next, prev, adClass = "" } = props;

  return (
    <>
      {!prev && !next ? (
        ""
      ) : (
        <div className={`product-nav ${adClass}`}>
          <div className={`product-prev ${!prev ? "disabled" : ""}`}>
            {prev ? (
              <ALink
                href={
                  prev ? { pathname: `/products/${prev.id}` } : "/nextProcut"
                }
              >
                <span className="product-link"></span>

                <span className="product-popup">
                  <span className="box-content">
                    <img
                      src={
                        process.env.REACT_APP_LOCAL_ASSET_URL +
                        prev.small_pictures[0].url
                      }
                      alt="product"
                      width={prev.small_pictures[0].width}
                      height={prev.small_pictures[0].height}
                    />

                    <span>{prev.name}</span>
                  </span>
                </span>
              </ALink>
            ) : (
              <ALink href="notFound">
                <span className="product-link"></span>
              </ALink>
            )}
          </div>

          <div className={`product-next ${!next ? "disabled" : ""}`}>
            {next ? (
              <ALink href={{ pathname: `/products/${next.id}` }}>
                <span className="product-link"></span>

                <span className="product-popup">
                  <span className="box-content">
                    <img
                      src={
                        process.env.REACT_APP_LOCAL_ASSET_URL +
                        next.small_pictures[0].url
                      }
                      alt="product"
                      width={next.small_pictures[0].width}
                      height={next.small_pictures[0].height}
                    />

                    <span>{next.name}</span>
                  </span>
                </span>
              </ALink>
            ) : (
              <ALink href="#">
                <span className="product-link"></span>
              </ALink>
            )}
          </div>
        </div>
      )}
    </>
  );
}
