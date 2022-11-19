import React from "react";
import logoutIllusration from "../../assets/images/logout-illustration.png";

function Logout() {
  return (
    <>
      <div className="logout_login-form__div">
        <form>
          <h1>You’ve succesfully signed out.</h1>
          <p>Please enter your details to login again</p>
          <div>
            <label htmlFor="email">
              <span>Email address</span>
              <input type="email" id="email" name="email" />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input type="password" id="password" name="password" />
            </label>
          </div>
          <div>
            <label htmlFor="remember-me">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="true"
              />
              <span>Remember me</span>
            </label>
            <button type="button">Forgot Password</button>
          </div>
          <label htmlFor="signin-btn">
            <input
              type="button"
              id="signin-btn"
              value="Sign in"
              name="signin-btn"
            />
          </label>
        </form>
        <p>
          Don’t have an account?
          <span> Sign up</span>
        </p>
      </div>
      <div className="logout_desktop-illustration__div">
        <img src={logoutIllusration} alt="logout vector illustration" />
      </div>
    </>
  );
}

export default Logout;
