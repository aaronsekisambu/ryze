import React, { Fragment } from 'react';
import svg4 from '../../Assets/img/4.svg';
import logoWhite from '../../Assets/img/logo/logo-white.svg';
import { useWindowSize } from '../../Helpers/helper';

const Access = () => {
	const [width, height] = useWindowSize();
	return (
		<Fragment>
			{' '}
			<section className="pb-5 mb-5" style={{ paddingTop: '100px' }} id="getearly">
				<div className="container text-center">
					<div className="row" style={{ maxWidth: '1010px', margin: '0 auto' }}>
						<div className="col-md-0 col-sm-0"></div>

						<div className="col-md-12 col-sm-12">
							<div className="card custom-card-2 gradient-back2-access" style={{ borderRadius: '18.3018px' }}>
								<div style={{ background: 'transparent' }}>
									<div className="float-left">
										<h4 className="card-title text-light p-4 ryze-early">
											<strong className="get-early-access">
												Get Early Access to <b className="break-mobile" /> Ryze
												<span>
													<img src={svg4} style={{ paddingBottom: '5px' }} />
												</span>
											</strong>
										</h4>
									</div>
									<div className="float-right get-early-logo">
										<h4
											className="card-title text-light p-4"
											style={{ marginBottom: 0, paddingBottom: 0 }}
										>
											<img src={logoWhite} alt="" />
										</h4>
									</div>
								</div>

								<div className="card-body" style={{ paddingTop: 0 }}>
									<div className="row">
										<div className="col-md-6">
											<h4 className="text-light slowly-bitcoiner ">
												<small>
													We are slowly bringing on Bitcoiners <b className="break-mobile" />{' '}
													who want to stack more sats!
												</small>
											</h4>
											<br />
											<div
												className="input1-bottom p-2"
											>
												<div className="row">
													<div className="col-lg-6 col-8">
														<input
															type="text"
															className="input1-a big-dog"
															style={{ color: 'white' }}
															placeholder="> join the waitlist"
														/>
													</div>
													<div className="col-lg-6 col-4">
														<div className="float-right">
															<button className="btn btn-primary custom-btn2-access custom-btn2input">
																Join Now
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-0 col-sm-0"></div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Access;
