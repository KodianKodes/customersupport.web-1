import React from "react";
import RedirectNav from "../../RedirectNav/RedirectNav";
import AccountPageCss from "./accountSettings.module.scss";
import { Link } from "react-router-dom";

const AccountSettings = () => {
	const currentDate = new Date().toLocaleDateString("en-GB");

	return (
		<div className="">
			<RedirectNav />
			<div className={AccountPageCss.wrapper}>
				<div className={AccountPageCss.header}>
					<h2>Account security</h2>
					<p>Change your password</p>
				</div>
				<form action="">
					<div className={AccountPageCss.formGroup}>
						<label htmlFor="Password">Enter new password:</label>
						<input type="password" id="Password" placeholder="Enter a new password" />
					</div>
					<div className={AccountPageCss.formGroup}>
						<label htmlFor="confirmPassword">Retype password:</label>
						<input type="password" id="confirmPassword" placeholder="Enter Password again" />
					</div>
					<div className={AccountPageCss.formSubmit}>
						<button type="submit">Save changes</button>
					</div>
				</form>
				<div className={AccountPageCss.apps}>
					<h2>Connected Apps</h2>
					<div className={AccountPageCss.app}>
						<div className={AccountPageCss.appsList}>
							<h3>Google.com</h3>
							<p>Signed in on {currentDate}</p>
						</div>
						<Link to="">Disconnect App</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountSettings;
