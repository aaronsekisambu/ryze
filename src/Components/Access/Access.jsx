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
							<div className="card custom-card-2 gradient-back2" style={{ borderRadius: '18.3018px' }}>
								<div style={{ background: 'transparent' }}>
									<div className="float-left">
										<h4
											className="card-title text-light p-4"
											style={{
												marginBottom: '0px',
												paddingBottom: '0px',
												textAlign: width <= 576 ? 'left' : 'right',
											}}
										>
											<strong
												style={{
													fontWeight: 800,
													fontSize: width <= 576 ? '35px' : '25.8378px',
												}}
											>
												Get Early Access to Ryze
												<span>
													<img src={svg4} style={{ paddingBottom: '5px' }} />
												</span>
											</strong>
										</h4>
									</div>
									{width <= 576 ? (
										''
									) : (
										<div className="float-right" id="getearlylogo">
											<h4
												className="card-title text-light p-4"
												style={{ marginBottom: 0, paddingBottom: 0 }}
											>
												<img src={logoWhite} alt="" />
											</h4>
										</div>
									)}
								</div>

								<div className="card-body" style={{ paddingTop: 0 }}>
									<div className="row">
										<div className="col-md-6">
											<h4 className="text-light" style={{ textAlign: 'left', marginTop: 0 }}>
												<small style={{ fontSize: '17px', lineHeight: '28px' }}>
													We are slowly bringing on Bitcoiners who want to stack more sats!
												</small>
											</h4>
											<br />
											<div
												className="input1-bottom p-2"
												style={{ background: 'rgba(256, 256, 256, 0.2)' }}
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
															<button className="btn btn-primary custom-btn2 custom-btn2input">
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
