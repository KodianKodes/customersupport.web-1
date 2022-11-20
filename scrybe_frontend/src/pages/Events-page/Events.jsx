import React from "react";
import "./Events.scss";

import filterIcon from "./assets/filter-icon.svg";
import comingSoon from "./assets/comming-soon.png";

const Events = () => {
  return (
    <div className="event-section">
      <div className="header-section">
        <div className="container">
          <div className="event-flex">
            <div className="events">
              <h1>Events</h1>
              <p>
                Join our events either in person or virtually, any where and on
                any device near you. Explore our upcoming events and save a
                date. You’ll be glad you did!
              </p>
              <button>view calender</button>
            </div>

            <button>
              Filter Events
              <img src={filterIcon} alt="filter" />
            </button>
          </div>
        </div>

        <div className="comingsoon">
          <div className="container">
            <h1>Coming Soon</h1>
            <div className="coming-flex">
              <div className="comin-img">
                <img src={comingSoon} alt="commingSoon" />
              </div>
              <div className="comin-txt">
                <p>17th November, 2022</p>
                <div className="line"></div>
                <p>Mom Civic Center, Maitama, Abuja</p>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <div className="container">
          <h1>Our Mission</h1>
        </div>
      </div>
    </div>
  );
};

export default Events;
