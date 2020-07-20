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
			<section
				className={`${width <= 576 ? 'gradient-back-mobile' : 'gradient-back pb-5'} pt-5`}
				style={{ overflowX: 'hidden', marginTop: width <= 786 ? '' : '-12rem' }}
			>
				<div className="container-fluid">
					<div className="text-center" style={{ display: width <= 576 ? 'block' : 'none' }}>
						<img src={bitcoinLogo} alt="" className="shadow-lg" />
						<h3 className="mt-3 text-light buy" style={{ fontSize: '30px', fontWeight: '350' }}>
							Buy the dip,
						</h3>
						<h3
							className="text-light buy"
							style={{ fontSize: '42px', marginTop: '-10px', fontWeight: 'bolder' }}
						>
							<strong>Automatically</strong>
						</h3>
					</div>
					<div className="row flex-wrap" style={{ width: width <= 576 ? '' : 'fit-content' }}>
						<div className={`col-12 col-lg-7 col-sm-7 col-md-7 ${width <= 576 ? 'my-5' : ''}`}>
							<img
								src={width <= 576 ? performanceMobile : performance}
								alt=""
								style={{
									width: width <= 576 ? '100%' : '',
									height: width <= 576 ? '' : 'fit-content',
								}}
							/>
						</div>
						<div
							className={`col-12 col-lg-5 col-sm-5 col-md-5 ${width <= 576 ? '' : 'my-4 w-50'}`}
							style={{
								paddingTop: `${width <= 576 ? '' : '4.5rem'}`,
								fontSize: '25px',
							}}
						>
							<div style={{ display: width >= 576 ? 'block' : 'none' }}>
								<img src={bitcoinLogo} alt="" style={{ width: '55px' }} />
								<div className="mt-3 text-light buy" style={{ fontWeight: 400 }}>
									Buy the dip,
								</div>
								<h3 className="text-light buy">
									<strong>Automatically</strong>
								</h3>
							</div>
							<h4
								className={`${width <= 576 ? '' : 'mt-3'} text-light mr-5 pr-3`}
								style={{ fontSize: '18px', lineHeight: '35px', fontWeight: 400 }}
							>
								Stack sats automatically when Bitcoin is on sale. Never worry about timing buys again.
								Its like DCA, but <strong>smarter.</strong>
							</h4>
							<h4
								className="mt-3 text-light mr-5"
								style={{ fontSize: '18px', lineHeight: '35px', fontWeight: 400 }}
							>
								Investing <strong>$25</strong> a week for the last 2.5 years through Ryze turned{' '}
								<strong>$3,175</strong> into
								<strong> $5,205.</strong>
							</h4>
							<div className={`my-4 ${width <= 576 ? 'd-flex flex-row justify-content-center' : ''} `}>
								<button className="btn btn-outline-warning custom-btn5" style={{ width: '146px' }}>
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
