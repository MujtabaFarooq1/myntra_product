import React from "react";

import ALink from "./ALink";

function Footer() {
  return (
    <footer className="footer bg-dark position-relative">
      <div className="footer-middle">
        <div className="container position-static">
          {/* <div className="footer-ribbon">Get in touch</div> */}

          <div className="row">
            <div className="col-lg-2 col-sm-6 pb-2 pb-sm-0">
              <div className="widget">
                <h4 className="widget-title">ONLINE SHOPPING</h4>
                {/* <ALink href="/">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="logo-footer"
                  />
                </ALink> */}
                {/* <p className="m-b-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec vestibulum magna, et dapibus lacus. Duis nec vestibulum
                  magna, et dapibus lacus.
                </p> */}

                <ul className="links">
                  <li>
                    <ALink href="#">Men</ALink>
                  </li>
                  <li>
                    <ALink href="#">Women</ALink>
                  </li>
                  <li>
                    <ALink href="#">Kids</ALink>
                  </li>
                  <li>
                    <ALink href="#">Home & Living</ALink>
                  </li>
                  <li>
                    <ALink href="#">Beauty</ALink>
                  </li>
                  <li>
                    <ALink href="/pages/account">Gift Cards</ALink>
                  </li>
                  <li>
                    <ALink href="#">
                      Fastech Insider <span className="myntra-tag">new</span>
                    </ALink>
                  </li>
                </ul>

                {/* <ALink href="#" className="read-more text-white">
                  read more...
                </ALink> */}
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 pb-2 pb-sm-0">
              <div className="widget">
                <h4 className="widget-title pb-1">USEFUL LINKS</h4>

                <ul className="links">
                  <li>
                    <ALink href="#">Contact Us</ALink>
                  </li>
                  <li>
                    <ALink href="#">FAQ</ALink>
                  </li>
                  <li>
                    <ALink href="#">T&C</ALink>
                  </li>
                  <li>
                    <ALink href="#">Terms Of Use</ALink>
                  </li>
                  <li>
                    <ALink href="#">Track Orders</ALink>
                  </li>
                  <li>
                    <ALink href="#">Shipping</ALink>
                  </li>
                  <li>
                    <ALink href="#">Cancelation</ALink>
                  </li>
                  <li>
                    <ALink href="#">Returns</ALink>
                  </li>
                  <li>
                    <ALink href="#">Whitehate</ALink>
                  </li>
                  <li>
                    <ALink href="#">Blog</ALink>
                  </li>
                  <li>
                    <ALink href="#">Careers</ALink>
                  </li>
                  <li>
                    <ALink href="#">Privacy Policy</ALink>
                  </li>
                  <li>
                    <ALink href="#">Site Mape</ALink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 pb-4 pb-sm-0">
              <div className="widget mb-2">
                <h4 className="widget-title mb-11 pb-1">
                  EXPERIENCE FASTECH APP ON MOBILE
                </h4>
                {/* <ul className="contact-info m-b-4">
                  <li>
                    <span className="contact-info-label">Address:</span>123
                    Street Name, City, England
                  </li>
                  <li>
                    <span className="contact-info-label">Phone:</span>
                    <ALink href="tel:">(123) 456-7890</ALink>
                  </li>
                  <li>
                    <span className="contact-info-label">Email:</span>{" "}
                    <ALink href="mailto:mail@example.com">
                      mail@example.com
                    </ALink>
                  </li>
                  <li>
                    <span className="contact-info-label">
                      Working Days/Hours:
                    </span>
                    Mon - Sun / 9:00 AM - 8:00 PM
                  </li>
                </ul> */}

                <div className="row ml-0 mr-0 mt-2 mb-2">
                  <div className="span">
                    <img
                      className="footer-play-store-img1"
                      src="/images/FAS-1.png"
                      alt="play-store"
                    />
                  </div>
                  <div className="span">
                    <img
                      className="footer-play-store-img2"
                      src="/images/FAS-2.png"
                      alt="App-store"
                    />
                  </div>
                </div>

                <div className="row mr-0 ml-0 mb-1 footer-images-row">
                  KEEP IN TOUCH
                </div>

                <div className="row ml-0 mr-0">
                  <span>
                    <i className="fab fa-facebook-square footer-social-icon-fb"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter footer-social-icon-twiter"></i>
                  </span>
                  <span>
                    <i className="fab fa-youtube footer-social-icon-youtube"></i>
                  </span>
                  <span>
                    <i className="fab fa-whatsapp-square footer-social-icon-insta"></i>
                  </span>
                </div>

                {/* <div className="social-icons">
                  <ALink
                    href="#"
                    className="social-icon social-facebook icon-facebook"
                    title="Facebook"
                  ></ALink>
                  <ALink
                    href="#"
                    className="social-icon social-twitter icon-twitter"
                    title="Twitter"
                  ></ALink>
                  <ALink
                    href="#"
                    className="social-icon social-linkedin fab fa-linkedin-in"
                    title="Linkedin"
                  ></ALink>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 pb-0">
              <div className="row">
                <div className="col-12 footer-right-tags-col">
                  <img
                    className="footer-img-right-tags"
                    src="/images/FAS-3.png"
                    alt=""
                  />
                  <p className="footer-tags-p">
                    <span className="footer-highlights">100% ORIGINAL</span>{" "}
                    guarantee for all products at Fastech.com
                  </p>
                </div>
                <div className="col-12 footer-right-tags-col mt-2">
                  <img
                    className="footer-img-right-tags"
                    src="/images/FAS-4.png"
                    alt=""
                  />
                  <p className="footer-tags-p">
                    <span className="footer-highlights">
                      Return within 30days
                    </span>{" "}
                    of receiving your order
                  </p>
                </div>
              </div>

              {/* <div className="widget">
                <h4 className="widget-title">Popular Tags</h4>

                <div className="tagcloud">
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "bag" } }}
                    scroll={"false"}
                  >
                    Bag
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "black" } }}
                    scroll={"false"}
                  >
                    Black
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "blue" } }}
                    scroll={"false"}
                  >
                    Blue
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "clothes" } }}
                    scroll={"false"}
                  >
                    Clothes
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "fashion" } }}
                    scroll={"false"}
                  >
                    Fashion
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "hub" } }}
                    scroll={"false"}
                  >
                    Hub
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "jean" } }}
                    scroll={"false"}
                  >
                    Jean
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "shirt" } }}
                    scroll={"false"}
                  >
                    Shirt
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "skirt" } }}
                    scroll={"false"}
                  >
                    Skirt
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "sports" } }}
                    scroll={"false"}
                  >
                    Sports
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "sweater" } }}
                    scroll={"false"}
                  >
                    Sweater
                  </ALink>
                  <ALink
                    href={{ pathname: "/shop", query: { tag: "winter" } }}
                    scroll={"false"}
                  >
                    Winter
                  </ALink>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="container d-sm-flex align-items-center">
            <div className="footer-left">
              <span className="footer-copyright">
                {/* © Porto eCommerce. 2021. All Rights Reserved */}
                <p>
                  In case of any concern,{" "}
                  <span className="footer-contact">
                    <a href="#">Contact Us</a>
                  </span>
                </p>
              </span>
            </div>

            <div className="footer-right ml-auto mt-1 mt-sm-0">
              <p>© 2022 www.fastech.com. All rights reserved.</p>

              {/* <div className="payment-icons">
                <span
                  className="payment-icon visa"
                  style={{
                    backgroundImage: `url("images/payments/payment-visa.svg")`,
                  }}
                ></span>
                <span
                  className="payment-icon paypal"
                  style={{
                    backgroundImage: `url("images/payments/payment-paypal.svg")`,
                  }}
                ></span>
                <span
                  className="payment-icon stripe"
                  style={{
                    backgroundImage: `url("images/payments/payment-stripe.png")`,
                  }}
                ></span>
                <span
                  className="payment-icon verisign"
                  style={{
                    backgroundImage: `url("images/payments/payment-verisign.svg")`,
                  }}
                ></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
