import React from "react";
import NotificationCss from "./notification.module.scss";
import RedirectNav from "../../RedirectNav/RedirectNav";
import { Link } from "react-router-dom";

const Notification = () => {
	const cardDetails = [
		{
			title: "Stay Up-to-date",
			description: "Frequently send me App updates and new feature release.",
		},
		{
			title: "Sign up to newsletter",
			description: "Stay engaged with App news, updates and organization events around you.",
		},
		{
			title: "Get periodic summary",
			description:
				"Allow us to send you a weekly/monthly summary of all your activities including transcriptions and sentiment analysis conducted.",
			option1: "Get summary at the end of every week",
			option2: "Get summary at the end of every month",
		},
		{
			title: "Distribute report",
			mobileTitle: "Share a copy of reports",
			description:
				"Automatically send reports and summaries to officers within your organization via their organization’s email address.",
			emailTitle: "Enter recipient’s email address:",
		},
	];

	const [showMessage, setShowMessage] = React.useState(false);
	const [showEmail, setShowEmail] = React.useState(false);

	const toggleMessage = (index) => {
		if (index === "Get periodic summary") {
			setShowMessage((prevState) => !prevState);
		}
		if (index === "Distribute report") {
			setShowEmail((prevState) => !prevState);
		} else {
			setShowMessage((prevState) => prevState);
			setShowEmail((prevState) => prevState);
		}
	};

	// form validation
	const [email, setEmail] = React.useState("");

	// const handleEmail = (e) => {
	// 	setEmail(e.target.value);
	// };
	const handleEmailSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};

	return (
		<div>
			<div className={NotificationCss.container}>
				<RedirectNav />
				<div className={NotificationCss.wrapper}>
					<h2>Notification</h2>
					<div className={NotificationCss.card}>
						<p>Your primary notification email is set to:</p>
						<h3>johndoe.admin@businessemail...</h3>
						<Link to="">Change email</Link>
					</div>
					<div className={NotificationCss.options}>
						<h3>Custom settings</h3>
						<form action="" onSubmit={handleEmailSubmit}>
							<div className={NotificationCss.option}>
								{cardDetails.map((card, index) => (
									<div key={index} className={NotificationCss.optionCard}>
										<div className={NotificationCss.header}>
											<h3>{card.title}</h3>
											<div className={NotificationCss.toggleBtn}>
												<label htmlFor={index} className={NotificationCss.toggle}>
													<input
														onClick={() => toggleMessage(card.title)}
														id={index}
														type="checkbox"
														className={NotificationCss.toggleSwitch}
													/>
													<span className={NotificationCss.slider}></span>
												</label>
											</div>
										</div>
										<div className={NotificationCss.optMessage}>
											<p className={NotificationCss.messageDesc}>{card.description}</p>
											{card.emailTitle && (
												<div style={{ display: showEmail ? "block" : "none" }} className={NotificationCss.emailInput}>
													<label htmlFor="emailReport">{card.emailTitle}</label>
													<input onChange={(e) => setEmail(e.target.value)} type="email" name="emailReport" id="emailReport" />
												</div>
											)}
											{card.option1 && (
												<div style={{ display: showMessage ? "block" : "none" }} className={NotificationCss.message}>
													<label style={{ display: card.option2 ? "flex" : "none" }} htmlFor="weeklyMsg">
														<p className={NotificationCss.optMessage}>{card.option1}</p>
														{<input type="checkbox" name="weeklyMsg" id="weeklyMsg" />}
													</label>
												</div>
											)}
											{card.option2 && (
												<div style={{ display: showMessage ? "block" : "none" }} className={NotificationCss.message}>
													{
														<label style={{ display: card.option2 ? "flex" : "none" }} htmlFor="monthlyMsg">
															<p className={NotificationCss.optMessage}>{card.option2}</p>

															<input type="checkbox" name="monthlyMsg" id="monthlyMsg" />
														</label>
													}
												</div>
											)}
										</div>
									</div>
								))}
							</div>
							<button type="submit">Save changes</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
