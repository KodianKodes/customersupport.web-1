import React from "react";
import heroIcon from "../myAssets/hero__image.png";
import layoutIcon from "../myAssets/layout__three-hero.png";
import footIcon from "../myAssets/footer__init.png";
import google from "../myAssets/google.png";
import microsoft from "../myAssets/microsoft.png";
import hotel from "../myAssets/hotel.png";
import payooneer from "../myAssets/payooneer.png";
import oneIcon from "../myAssets/one__icon.png";
import twoIcon from "../myAssets/two__icon.png";
import threeIcon from "../myAssets/three__icon.png";
import fourIcon from "../myAssets/four__icon.png";

const index = () => {
  return (
    <div>
      <section className="first__sect">
        <div className="sect__container">
          <div>
            <div className="first__sect-right">
              <img src={heroIcon} alt="Hero icon of the page" />
            </div>
            <div className="first__sect-left">
              <div className="first__heading">
                <h1 className="first__sect-head">
                  Grow with us, Become a Partner
                </h1>
              </div>
              <div className="first__subhead">
                <p className="first__sect-subtext">
                  Once you become a partner, we recognize you officially as a
                  VIP User of Srcybe with added features and benefits.
                  Let&apos;s work together. Join our community of partners to
                  grow your business and solve the problems of others.
                  <span className="first__inline">
                    <a href="/" className="first__inline-text">
                      Learn more
                    </a>
                  </span>
                </p>
              </div>
              <div className="first__sect-input">
                <input
                  type="email"
                  placeholder="Email address"
                  className="first__input-field"
                />
                <input
                  type="submit"
                  value="Become a Partner"
                  className="first__input-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second__sect">
        <div className="sect__container">
          <div className="second__sect-content">
            <div className="second__each">
              <img src={google} alt="google-icon" />
            </div>
            <div className="second__each">
              <img src={microsoft} alt="microsoft-icon" />
            </div>
            <div className="second__each">
              <img src={hotel} alt=" hotel-icon" />
            </div>
            <div className="second__each">
              <img src={payooneer} alt="payooneer" />
            </div>
          </div>
        </div>
      </section>
      <section className="third__section">
        <div className="sect__container">
          <div className="third__sect-left">
            <img src={layoutIcon} alt="Layout three section hero icon" />
          </div>
          <div className="third__sect-right">
            <div className="third__heading">
              <h2 className="third__head">Why Join Our Partner Program</h2>
            </div>
            <div className="third__bottom-content">
              <div className="third__btm">
                <div className="third__btm-left">
                  <div className="third__btm-icon">
                    <img src={oneIcon} alt="Layout three section hero icon" />
                  </div>
                  <div />
                </div>
                <div className="third__btm-right">
                  <h4 className="third__btm-head">Service Offering </h4>
                  <div className="third__btm-subhead">
                    <p className="third__btm-subtext">
                      Increase the value of your customer service, get VIP
                      access to the most intelligent tool to help your business
                      grow
                    </p>
                  </div>
                </div>
              </div>
              <div className="third__btm">
                <div className="third__btm-left">
                  <div className="third__btm-icon">
                    <img src={twoIcon} alt="Layout three section hero icon" />
                  </div>
                  <div />
                </div>
                <div className="third__btm-right">
                  <h4 className="third__btm-head">VIP training & Onboarding</h4>
                  <div className="third__btm-subhead">
                    <p className="third__btm-subtext">
                      Full access to our learning library, for your entire team
                      to receive product training and our premium onboarding
                      packages
                    </p>
                  </div>
                </div>
              </div>
              <div className="third__btm">
                <div className="third__btm-left">
                  <div className="third__btm-icon">
                    <img src={threeIcon} alt="Layout three section hero icon" />
                  </div>
                  <div />
                </div>
                <div className="third__btm-right">
                  <h4 className="third__btm-head">Marketing Support</h4>
                  <div className="third__btm-subhead">
                    <p className="third__btm-subtext">
                      We will work together to create awareness of your
                      company/agency through opportunity, event
                      invitation/partnership, co-marketing initiatives, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="third__btm">
                <div className="third__btm-left">
                  <div className="third__btm-icon">
                    <img src={fourIcon} alt="Layout three section hero icon" />
                  </div>
                  <div />
                </div>
                <div className="third__btm-right">
                  <h4 className="third__btm-head">Shared Revenue</h4>
                  <div className="third__btm-subhead">
                    <p className="third__btm-subtext">
                      A special reward for each referral, measured with an
                      industry-leading revenue share
                    </p>
                  </div>
                </div>
              </div>
              <div className="third__btm-subhead">
                <p className="third__btm-subtext">
                  For more inquiries and questions on our partner&apos;s
                  program, send a mail to partner@scrybe.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth__section">
        <div className="sect__container">
          <div className="fourth__content">
            <div className="fourth__heading">
              <h3 className="fourth__head">
                Help more companies discover the power of Scrybe
              </h3>
            </div>
            <div className="fourth__action">
              <button type="button" className="fourth__btn">
                Join our Premium Partners Today
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth__section">
        <div className="sect__container">
          <div>
            <div className="form__top">
              <div className="form__heading">
                <h2 className="form__head">Partner with Scrybe</h2>
              </div>
              <div className="form__subhead">
                <p className="form__subtext">
                  Drop details below and we get back to you as soon as possible
                </p>
              </div>
            </div>
            <div className="form__section">
              <form className="form__container">
                <div className="input__overall">
                  <div className="input__content-flex">
                    <div className="input__flex">
                      <label htmlFor="company__name" className="label__name">
                        Company Name
                        <input
                          type="text"
                          id="company__name"
                          placeholder="Enter your company name"
                        />
                      </label>
                    </div>
                    <div className="input__flex">
                      <label htmlFor="company__email" className="label__name">
                        Company Email
                        <input
                          type="email"
                          id="company__email"
                          placeholder="Enter your company email"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="input__content-flex">
                    <div className="input__flex">
                      <label
                        htmlFor="employees__number"
                        className="label__name"
                      >
                        Number of Employees
                        <input
                          type="number"
                          id="employees__number"
                          placeholder="E.g:  24"
                        />
                      </label>
                    </div>
                    <div className="input__flex">
                      <label htmlFor="customer__number" className="label__name">
                        Number of Customers
                        <input
                          type="number"
                          id="customer__number"
                          placeholder="E.g:  24"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="input__flex">
                    <label htmlFor="customer__address" className="label__name">
                      Company Address
                      <input
                        type="text"
                        id="customer__address"
                        placeholder="Enter your company address"
                      />
                    </label>
                  </div>
                  <div className="input__content-flex">
                    <div className="input__flex">
                      <label htmlFor="city" className="label__name">
                        City
                        <input type="text" id="city" placeholder="City" />
                      </label>
                    </div>
                    <div className="input__flex">
                      <label htmlFor="state" className="label__name">
                        State/Province
                        <input
                          type="text"
                          id="state"
                          placeholder="State/Province"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="input__flex input__btn">
                    <input type="submit" id="submit__btn" value="SUBMIT" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="fifth__sect-btm">
            <div className="fifth__btm-content">
              <div className="fifth__btm-right">
                <img src={footIcon} alt="Icon before the footer" />
              </div>
              <div className="fifth__btm-left">
                <div className="fifth__left-heading">
                  <h5 className="fifth__left-head">Getting Started is Easy</h5>
                </div>
                <div className="fifth__left-subhead">
                  <p className="fifth__left-subtext">
                    We are confident that you will get the best value from our
                    products
                  </p>
                </div>
                <div className="fifth__sect-action">
                  <div className="fifth__btn-first">
                    <button type="button" className="btn__act-first">
                      Try for Free
                    </button>
                  </div>
                  <div className="fifth__btn-second">
                    <button type="submit" className="btn__act-second">
                      Schedule a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
