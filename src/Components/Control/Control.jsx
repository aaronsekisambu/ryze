import React, { Fragment } from 'react';
import wallet from '../../Assets/img/wallet.png';

const Control = () => {
	return (
		<Fragment>
			<section className="pt-5 pb-5 m-3">
				<div className="container text-center">
					<div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
						<div className="col-md-12" style={{ padding: 0 }}>
							<img src={wallet} alt="" className="wallet-img" />
							<div className=" stayincontrol">
								<h2 className="mt-3">
									<strong style={{ fontWeight: 800 }}>Stay in control</strong> of{' '}
									<b className="break-mobile" /> your money
								</h2>
							</div>
							<h3 className="text-light"></h3>
							<div className="row">
								<div className="col-md-2 col-sm-0"></div>
								<div className="col-md-8 col-sm-12">
									<h4 className="mt-3">
										<small
										className="invest-in-bitcoin"
										>
											Investing in Bitcfoin can be a rollercoaster. <b className="break-mobile" /> Let Ryze smooth the ride for
											you by helping you <b className="break-mobile" /> accumulate Bitfcoin over time.
										</small>
									</h4>
								</div>
								<div className="col-md-2 col-sm-0"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="mt-3">
								<button type="button" className="btn btn-outline-primary custom-btn01 custom-learn-more">
									<span>Learn More</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Control;
