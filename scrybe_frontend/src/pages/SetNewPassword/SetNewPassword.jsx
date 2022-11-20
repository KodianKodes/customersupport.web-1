import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../von.css";

function SetNewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  /* eslint-disable no-unused-vars */
  const [userInfo, setUserInfo] = useState();
  /* eslint-enable no-unused-vars */
  const onSubmit = (data) => {
    console.log(data);
    setUserInfo(data);
    console.log(errors);
  };

  // Watch event for disable button
  const password = watch("password");
  const password2 = watch("password2");

  console.log("password", password);
  console.log("password2", password2);

  const isValid = password && password2;
  return (
    <main className="signup-wrapper">
      <div className="signup">
        <div className="first signin other-than-signup">
          <h1>Set new password</h1>
          <h3>Your new password must be different from the previous one</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password at least 8 characters"
                className={`${errors.password && "error-input"} `}
                // eslint-disable-next-line
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </label>
            <p className="error-msg">{errors.password?.message}</p>

            <label htmlFor="password2">
              Password
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirm Password"
                className={`${errors.password && "error-input"} `}
                // eslint-disable-next-line
                {...register("password2", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password inputted did not match",
                  },
                })}
              />
            </label>
            <p className="error-msg">{errors.password2?.message}</p>
            <input
              type="submit"
              value="Reset password"
              className={`${isValid && "submit-valid"}`}
            />
          </form>
        </div>
        <div className="second">
          <img src="img/reset-pw.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default SetNewPassword;
