import React, { Fragment } from 'react';
import logoryze from '../../Assets/img/logo/logo.svg';
import { useWindowSize } from '../../Helpers/helper';

export const Footer = () => {
	const [width, height] = useWindowSize();
	return (
		<Fragment>
			<section id="desktop-brand1 phone_footer" style={{ display: width >= 576 ? 'block' : 'none' }}>
				<nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: 'white' }}>
					<div className="container">
						<a className="navbar-brand" href="#" style={{ fontSize: '16px' }}>
							<img src={logoryze} alt="Logo" style={{ width: '20px' }} />
							&nbsp;&nbsp;Ryze - Made with 🔥 in ATL
						</a>

						<ul className="navbar-nav">
							<li className="nav-item nav-item-pad">
								<a className="nav-link" href="#">
									Twitter
								</a>
							</li>

							<li className="nav-item nav-item-pad">
								<a className="nav-link" href="#">
									Medium
								</a>
							</li>
							<li className="nav-item nav-item-pad">
								<a className="nav-link" href="#">
									LinkedIn
								</a>
							</li>
							<li className="nav-item nav-item-pad">
								<a className="nav-link" href="#">
									Terms of Service
								</a>
							</li>
							<li className="nav-item nav-item-pad">
								<a className="nav-link" href="#">
									Privacy
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</section>

			<section className="phone_footer" style={{ display: width <= 576 ? 'block' : 'none' }}>
				<nav
					className="navbar navbar-expand-sm navbar-light justify-content-center"
					style={{ backgroundColor: 'white' }}
				>
					<ul className="navbar-nav">
						<li className="nav-item nav-item-pad">
							<a className="navbar-brand" href="#" style={{ fontSize: '16px' }}>
								<img src={logoryze} alt="Logo" style={{ width: '20px' }} />
							</a>
						</li>
					</ul>
				</nav>
			</section>

			<section className="phone_footer" style={{ display: width <= 576 ? 'block' : 'none' }}>
				<nav
					className="navbar navbar-expand-sm navbar-light justify-content-center"
					style={{ backgroundColor: 'white' }}
				>
					<ul className="navbar-nav text-center">
						<li className="nav-item nav-item-pad">
							<a className="nav-link" href="#">
								Twitter
							</a>
						</li>

						<li className="nav-item nav-item-pad">
							<a className="nav-link" href="#">
								Medium
							</a>
						</li>
						<li className="nav-item nav-item-pad">
							<a className="nav-link" href="#">
								LinkedIn
							</a>
						</li>
						<li className="nav-item nav-item-pad">
							<a className="nav-link" href="#">
								Terms of Service
							</a>
						</li>
						<li className="nav-item nav-item-pad">
							<a className="nav-link" href="#">
								Privacy
							</a>
						</li>
					</ul>
				</nav>
			</section>

			<section className="phone_footer" style={{ display: width <= 576 ? 'block' : 'none' }}>
				<nav
					className="navbar navbar-expand-sm navbar-light justify-content-center"
					style={{ backgroundColor: 'white' }}
				>
					<ul className="navbar-nav">
						<li className="nav-item nav-item-pad">
							<a className="navbar-brand" href="#" style={{ fontSize: '16px' }}>
								&nbsp;&nbsp;Ryze - Made with 🔥 in ATL
							</a>
						</li>
					</ul>
				</nav>
			</section>
		</Fragment>
	);
};
