import React, { Fragment, useState } from 'react';
import logo from '../../Assets/img/logo/logo.svg';
import { useWindowSize } from '../../Helpers/helper';

const Navigation = () => {
	const [width, height] = useWindowSize();
	const [show, setSHow] = useState(false);

	const showMenu = () => {
		setSHow(!show);
	};
	return (
		<Fragment>
			<section>
				<nav
					className="navbar navbar-expand-sm navbar-light sticky-top mt-5"
					style={{ backgroundColor: 'white' }}
				>
					<div className="container-fluid mx-4">
						<a className="navbar-brand" href="#">
							<img src={logo} alt="Logo" className="ryze-logo" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavbar"
							onClick={showMenu}
							style={{ outline: 'none', border: 'none' }}
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className={`collapse navbar-collapse ${
								show ? 'show d-flex flex-row justify-content-between' : ''
							}`}
							id="collapsibleNavbar"
						>
							<ul className={`navbar-nav ${width <= 576 ? 'my-3' : 'ml-auto'}`}>
								<li className="nav-item nav-item-pad pr-5">
									<a className="nav-link" href="#" style={{ fontSize: width <= 576 ? '25px' : '' }}>
										How it Works
									</a>
								</li>

								<li className="nav-item nav-item-pad pr-5">
									<a className="nav-link" href="#" style={{ fontSize: width <= 576 ? '25px' : '' }}>
										Blog
									</a>
								</li>
								<li className="nav-item nav-item-pad pr-5">
									<a className="nav-link" href="#" style={{ fontSize: width <= 576 ? '25px' : '' }}>
										FAQs
									</a>
								</li>
								<li className="nav-item nav-item-pad join-now-web">
									<button type="button" className="btn btn-outline-primary custom-btn">
										Join Now
									</button>
								</li>
							</ul>
							<button type="button" className="btn btn-outline-primary join-now custom-btn">
								Join Now
							</button>
						</div>
					</div>
				</nav>
			</section>
		</Fragment>
	);
};

export default Navigation;
