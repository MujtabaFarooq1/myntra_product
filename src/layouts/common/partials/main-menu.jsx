// import { withRouter } from 'next/router';

// Import Custom Component
import ALink from "../ALink";

// Import Utils
import { mainMenu } from "../../../utils/data/menu";

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
}

function MainMenu({ router }) {
  // const pathname = router.pathname;
  //   console.log("main menu");
  const pathname = useLocation().pathname;
  //   console.log("Path from main menu -->", pathname);

  function isOtherPage() {
    return mainMenu.other.find((variation) => variation.url === pathname);
  }

  return (
    <>
      <nav className="main-nav w-100">
        <ul className="menu sf-js-enabled sf-arrows">
          <li className={pathname === "/" ? "active" : ""}>
            <ALink href="/">Men</ALink>
          </li>
          <li className={pathname.startsWith("/shop") ? "active" : ""}>
            <ALink href="/shop" className="sf-with-ul">
              Women
            </ALink>
            <div className="megamenu megamenu-fixed-width megamenu-3cols">
              <div className="row">
                <div className="col-lg-4">
                  <ALink href="#" className="nolink">
                    Kids
                  </ALink>
                  <ul className="submenu">
                    {mainMenu.shop.variation1.map((variations, index) => (
                      <li key={"menu-item" + index}>
                        <ALink href={`${variations.url}`}>
                          {variations.title}
                        </ALink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-4 mega_menu_next_bar">
                  <ALink href="#" className="nolink">
                    VARIATION 2
                  </ALink>
                  <ul className="submenu mega_menu_next_bar">
                    {mainMenu.shop.variation2.map((variations, index) => (
                      <li key={"menu-item" + index}>
                        <ALink href={`${variations.url}`}>
                          {variations.title}
                        </ALink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-4 p-0">
                  <div className="menu-banner">
                    <figure>
                      <img
                        src="images/menu-banner.jpg"
                        alt="Menu banner"
                        width="300"
                        height="300"
                      />
                    </figure>
                    <div className="banner-content">
                      <h4>
                        <span className="">UP TO</span>
                        <br />
                        <b className="">50%</b>
                        <i>OFF</i>
                      </h4>
                      <ALink href="/shop" className="btn btn-sm btn-dark">
                        SHOP NOW
                      </ALink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={pathname.startsWith("/product") ? "active" : ""}>
            <ALink
              href="/product/default/battery-charger"
              className="sf-with-ul"
            >
              Kids
            </ALink>
            <div className="megamenu megamenu-fixed-width">
              <div className="row">
                <div className="col-lg-4">
                  <ALink href="#" className="nolink">
                    PRODUCT PAGES
                  </ALink>
                  <ul className="submenu">
                    {mainMenu.product.pages.map((variations, index) => (
                      <li key={"menu-item" + index}>
                        <ALink href={`${variations.url}`}>
                          {variations.title}
                        </ALink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-4 mega_menu_next_bar">
                  <ALink href="#" className="nolink">
                    PRODUCT LAYOUTS
                  </ALink>
                  <ul className="submenu mega_menu_next_bar">
                    {mainMenu.product.layout.map((variations, index) => (
                      <li key={"menu-item" + index}>
                        <ALink href={`${variations.url}`}>
                          {variations.title}
                        </ALink>
                      </li>
                    ))}
                    <li>
                      <ALink href="#">BUILD YOUR OWN</ALink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 p-0">
                  <div className="menu-banner menu-banner-2">
                    <figure>
                      <img
                        src="images/menu-banner-1.jpg"
                        alt="Menu banner"
                        width="380"
                        height="790"
                        className="product-promo"
                      />
                    </figure>
                    <i>OFF</i>
                    <div className="banner-content">
                      <h4>
                        <span className="">UP TO</span>
                        <br />
                        <b className="">50%</b>
                      </h4>
                    </div>

                    <ALink href="/shop" className="btn btn-sm btn-dark">
                      SHOP NOW
                    </ALink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={isOtherPage() ? "active newMenuItem" : "newMenuItem"}>
            <ALink href="#" className="sf-with-ul ">
              Arrival
            </ALink>
            <ul>
              {mainMenu.other.map((variations, index) => (
                <li key={"menu-item" + index}>
                  <ALink href={`${variations.url}`}>{variations.title}</ALink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainMenu;
