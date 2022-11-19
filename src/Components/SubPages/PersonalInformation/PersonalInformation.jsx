import React from "react";
import PersonalInfo from "./personalInformation.module.scss";
import RedirectNav from "../../RedirectNav/RedirectNav";
import { Link } from "react-router-dom";

const PersonalInformation = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		window.scrollTo(0, 0);
	};

	return (
		<div className="container">
			<RedirectNav />
			<div className={PersonalInfo.wrapper}>
				<div className={PersonalInfo.header}>
					<img src="" alt="" />
					<div className={PersonalInfo.changeImg}>
						<img src="./assets/icons/blue-pencil.png" alt="pencil icon to edit profile image" />
						<Link to="/">Change profile picture</Link>
					</div>
				</div>
				<div className={PersonalInfo.form}>
					<form
						action="
							  "
					>
						<div className={PersonalInfo.row}>
							<div className={PersonalInfo.formGroup}>
								<label htmlFor="">First name</label>
								<input type="text" placeholder="Doe" />
							</div>
							<div className={PersonalInfo.formGroup}>
								<label htmlFor="">Last name</label>
								<input type="text" placeholder="John" />
							</div>
						</div>
						<div className={PersonalInfo.formGroup}>
							<label htmlFor="">Phone number</label>
							<input type="tel" placeholder="+23470984995736" />
						</div>
						<div className={`${PersonalInfo.formGroup} ${PersonalInfo.editInput}`}>
							<label htmlFor="">Email address</label>
							<input type="email" placeholder="test@email.com" />
							<div className={PersonalInfo.verified}>
								{/* <p className={PersonalInfo.message}>{isVerified ? "Verified" : "Unverified"}</p> */}
							</div>
							<Link to="/personal-information/edit" className={PersonalInfo.edit}>
								<img src="./assets/icons/pencil.svg" alt="" />
								<p>EDIT</p>
							</Link>
						</div>
						<div className={`${PersonalInfo.formSubmit} formSubmit`}>
							<button onClick={handleSubmit}>Save changes</button>
							<Link to="">Verify email</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PersonalInformation;
