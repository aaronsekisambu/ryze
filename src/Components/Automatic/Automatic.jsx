import React, { Fragment } from 'react';
import logoWhite from '../../Assets/img/logo/logo-white.svg';
import performance from '../../Assets/img/performance-check.svg';
import performanceMobile from '../../Assets/img/performance-mobile.svg';
import bitcoinLogo from '../../Assets/img/bitcoin-logo.svg';
import { useWindowSize } from '../../Helpers/helper';

const Automatic = () => {
	const [width, height] = useWindowSize();
	return (
		<Fragment>
			<section className="gradient-back-mobile pb-5">
				<div className="container">
					<div className="text-center buy-dip-mobile">
						<img src={bitcoinLogo} alt="" className="shadow-lg" />
						<h3 className="mt-3 text-light buy-top">Buy the dip,</h3>
						<h3 className="text-light buy-big">
							<strong>Automatically</strong>
						</h3>
					</div>
					<div className="d-flex flex-row justify-content-between flex-wrap">
						<div className="image-side">
							<img className="performance perform-big" src={performance} alt="" />
							<img className="performance-mobile" src={performanceMobile} alt="" />
						</div>
						<div className="stats-tats-mobile">
							<div>
								<img src={bitcoinLogo} alt="" className="performance perform-bitcoin" />
								<div className="mt-3 text-light buy buy-dip">Buy the dip,</div>
								<h3 className="text-light buy">
									<strong>Automatically</strong>
								</h3>
							</div>
							<h4 className="text-light stack-stats">
								Stack sats automatically when Bitcoin is on sale. Never worry about timing buys again.
								Its like DCA, but <strong>smarter.</strong>
							</h4>
							<h4
								className="mt-3 text-light stack-stats-below"
						
							>
								Investing <strong>$25</strong> a week for the last 2.5 years through Ryze turned{' '}
								<strong>$3,175</strong> into
								<strong> $5,205.</strong>
							</h4>
							<div className="my-4 learn-more-automatic">
								<button className="btn btn-outline-warning custom-btn5" style={{ width: '140px' }}>
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Automatic;
