import React from 'react'
import RedirectNavCss from './redirectNav.module.scss'
import { Link } from "react-router-dom";

const RedirectNav = () => {
  return (
		<div>
			<div className={RedirectNavCss.nav}>
				<Link to="/" className={RedirectNavCss.nav__link}>
					<img src="/assets/icons/chevron-left.svg" alt="" />
				</Link>
				<div className={RedirectNavCss.redirect}>
					<h1 className={RedirectNavCss.nav__title}>Settings</h1>
					<p>
						You are using the limited free plan. <Link to="">Go unlimited with Pro version</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default RedirectNav