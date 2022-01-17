import React from "react";
import Reveal from "react-awesome-reveal";

// Import Settigns
import { fadeInUpShorter } from "../../utils/data/keyframes";

function FeatureBoxSection() {
  return (
    <section className="feature-boxes-container overflow-hidden">
      <Reveal
        keyframes={fadeInUpShorter}
        delay={100}
        duration={1000}
        triggerOnce
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box px-sm-5 feature-box-simple text-center">
                <div className="feature-box-icon">
                  <i className="icon-earphones-alt"></i>
                </div>

                <div className="feature-box-content p-0">
                  <h3>Customer Support</h3>
                  <h5>You Won't Be Alone</h5>

                  <p>
                    We really care about you and your website as much as you do.
                    Purchasing Porto or any other theme from us you get 100%
                    free support.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box px-sm-5 feature-box-simple text-center">
                <div className="feature-box-icon">
                  <i className="icon-credit-card"></i>
                </div>

                <div className="feature-box-content p-0">
                  <h3>Fully Customizable</h3>
                  <h5>Tons Of Options</h5>

                  <p>
                    With Porto you can customize the layout, colors and styles
                    within only a few minutes. Start creating an amazing website
                    right now!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box px-sm-5 feature-box-simple text-center">
                <div className="feature-box-icon">
                  <i className="icon-action-undo"></i>
                </div>

                <div className="feature-box-content p-0">
                  <h3>Powerful Admin</h3>
                  <h5>Made To Help You</h5>

                  <p>
                    Porto has very powerful admin features to help customer to
                    build their own shop in minutes without any special skills
                    in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default React.memo(FeatureBoxSection);
