import React from "react";
import "./Events.scss";

import filterIcon from "./assets/filter-icon.svg";
import comingSoon from "./assets/comming-soon.png";
import jim from "./assets/jim.svg";
import angela from "./assets/angela.svg";
import stanley from "./assets/stanley.svg";
import kelly from "./assets/kelly.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import expect from "./assets/expect-icon.svg";

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
          <p>
            We understand the challenges young people looking to be
            professionals in their fields face- not being able to get the job
            because of lack of experience and not being able to get the
            experience because they can’t get the job. This career fest is
            designed to demystify the confusions surrounding landing your first
            job as a fresh graduate. We have put together an event that will
            leave you confident, empowered and emboldened at the end of the day.
          </p>

          <h1>Meet Our Speakers</h1>

          <div className="speaker-container">
            <div className="speaker">
              <img src={jim} alt="jim" />
              <p>Jim Hampert</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
            <div className="speaker">
              <img src={angela} alt="angela" />
              <p>Angela Brume</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
            <div className="speaker">
              <img src={stanley} alt="stanley" />
              <p>Stanley Hudson</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
            <div className="speaker">
              <img src={kelly} alt="kelly" />
              <p>Kelly Kapoor</p>
              <span>
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
          </div>

          <div className="expect-container">
            <h2>What To Expect?</h2>
            <div className="expect-talk">
              <div className="expect">
                <img src={expect} alt="expect" />
                <p>Expert Talks </p>
              </div>
              <div className="expect">
                <img src={expect} alt="expect" />
                <p>Interactive Sessions</p>
              </div>
              <div className="expect">
                <img src={expect} alt="expect" />
                <p>Networking</p>
              </div>
            </div>

            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
