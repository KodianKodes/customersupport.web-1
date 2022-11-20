import React from "react";
import Banner from "./Banner";
import "../Style/notHiring.scss";
<<<<<<< HEAD
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
=======
>>>>>>> 4e048e5397d3fae2a1ab16be8a7ba287fd565044

function NotHiring() {
  return (
    <div>
<<<<<<< HEAD
      <NavBar />
=======
>>>>>>> 4e048e5397d3fae2a1ab16be8a7ba287fd565044
      <Banner />
      <div className="not-hiring-container">
        <div className="not-hiring">
          <h1>We are currently not hiring!</h1>
          <p>
            There are currently no open positions, however you can join our
            newsletter to get updated on our company and future opportunities.{" "}
          </p>
        </div>
        <div className="subscribe">
<<<<<<< HEAD
          <form action="/" onSubmit={(e) => e.preventDefault()}>
=======
          <form action="#" onSubmit={(e) => e.preventDefault()}>
>>>>>>> 4e048e5397d3fae2a1ab16be8a7ba287fd565044
            <input type="text" placeholder="Enter Email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> 4e048e5397d3fae2a1ab16be8a7ba287fd565044
    </div>
  );
}

export default NotHiring;
