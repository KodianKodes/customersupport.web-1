import React, { useState } from "react";
import "../../assets/styles/account.scss";
import profileImage from "../../assets/images/profile-image.png";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import plus from "../../assets/icons/plus.svg";

function Account() {
  const [accountModalIsActive, setAccountModalIsActive] = useState(false);
  const toggleAccountModal = () => {
    setAccountModalIsActive((current) => !current);
  };

  return (
    <>
      <div
        className={
          accountModalIsActive
            ? "active account_add-agent__div"
            : "account_add-agent__div"
        }
      >
        <div className="account_add-agent-modal__div">
          <h2>Add new agent</h2>
          <p>Input the following information to add a new agent to your team</p>
          <form>
            <label htmlFor="full-name">
              <span>Full name</span>
              <input type="text" id="full-name" name="full-name" />
            </label>
            <label htmlFor="email">
              <span>Email address</span>
              <input type="email" id="email" name="email" />
            </label>
            <label htmlFor="location">
              <span>Location</span>
              <input type="text" id="location" name="location" />
            </label>
            <label htmlFor="consent-to-email">
              <input
                type="checkbox"
                id="consent-to-email"
                name="consent-to-email"
                value="true"
              />
              <span>Send a welcome email</span>
            </label>
            <div />
            <div>
              <label htmlFor="submit-btn">
                <input
                  type="button"
                  id="submit-btn"
                  value="Submit"
                  name="submit-btn"
                  onClick={toggleAccountModal}
                />
              </label>
              <label htmlFor="submit-btn">
                <input
                  type="button"
                  id="cancel-btn"
                  value="Cancel"
                  name="cancel-btn"
                  onClick={toggleAccountModal}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="account">
        <section className="account_mobile-head__section">
          <span>
            <img src={chevronLeft} alt="left arrow" />
          </span>
          <h1>Profile</h1>
        </section>
        <h1 className="account_salutation">Hi Scryber</h1>
        <div className="account_main-content__div">
          <section className="account_profile__section">
            <img src={profileImage} alt="User's profile" />
            <div>
              <p>Jane Doe</p>
              <p>Administrator</p>
            </div>
          </section>
          <section className="account_body__section">
            <div className="account_personal-info__div">
              <p>Personal Information</p>
              <div>
                <div>
                  <p>Email address</p>
                  <p>johndoe.admin@businessemail.com</p>
                </div>
                <div>
                  <p>Phone Number</p>
                  <p>0803 123 4567</p>
                </div>
              </div>
            </div>
            <div className="account_company-info__div">
              <p>Company Information</p>
              <div>
                <div>
                  <p>Company name</p>
                  <p>Brainbox Inc</p>
                </div>
                <div>
                  <p>Address</p>
                  <p>Suite A1, Lenu Building, Asokoro, Abuja</p>
                </div>
              </div>
            </div>
            <div className="account_agents__div">
              <span>
                <p>Agents</p>
                <button type="button" onClick={toggleAccountModal}>
                  <span>Add new</span>
                  <span>
                    <img src={plus} alt="plus icon" />
                  </span>
                  &nbsp;
                </button>
              </span>
              <div>
                <ul>
                  <li>
                    <p>Leslier Alexander</p>
                    <p>Abuja</p>
                  </li>
                  <li>
                    <p>Jenny Wilson</p>
                    <p>Lagos</p>
                  </li>
                  <li>
                    <p>Jacob Fisher</p>
                    <p>Lagos</p>
                  </li>
                  <li>
                    <p>Savannah Nguyen</p>
                    <p>Rivers</p>
                  </li>
                  <li>
                    <p>Theresa Wenn</p>
                    <p>Kaduna</p>
                  </li>
                  <li>
                    <p>Leslier Alexander</p>
                    <p>Abuja</p>
                  </li>
                  <li>
                    <p>Jenny Wilson</p>
                    <p>Lagos</p>
                  </li>
                  <li>
                    <p>Jacob Fisher</p>
                    <p>Lagos</p>
                  </li>
                  <li>
                    <p>Savannah Nguyen</p>
                    <p>Rivers</p>
                  </li>
                  <li>
                    <p>Theresa Wenn</p>
                    <p>Kaduna</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="account_developer-tools__div">
              <p>Developer tools</p>
              <div>
                <p>API Key</p>
                <div>
                  <p>0123456789AC</p>
                  <p>Refresh</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="account_plan-info__div">
          <p>You are using the limited free plan.</p>
          <p>Go unlimited with Pro version</p>
        </div>
      </div>
    </>
  );
}

export default Account;
