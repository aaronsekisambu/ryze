import React, { Fragment } from 'react';
import logoWhite from '../../Assets/img/logo/logo-white.svg';
import svg5 from '../../Assets/img/5.svg';

const Balance = () => {
	return (
		<Fragment>
			<section style={{ marginTop: '110px' }}>
				<div className="container-fluid text-center">
					<div
						className="row mt-5"
						style={{ padding: 0, maxWidth: '888px', display: 'block', margin: '0 auto' }}
					>
						<div className="col-l2">
							<div className="card cutom-card-1 border shadow-sm">
								<div className="card-body">
									<div className="row">
										<div className="col-6">
											<div className="float-left">
												<img src={logoWhite} alt width="20" />
											</div>
										</div>
										<div className="col-6">
											<div className="float-right">
												<div className="dropdown">
													<button
														type="button"
														className="btn btn-outline-primary dropdown-toggle custom-btn3"
														data-toggle="dropdown"
													>
														Srikar
													</button>
												</div>
											</div>
										</div>
									</div>
									<h5 className="mb-2" style={{ paddingTop: '85px', paddingBottom: '10px' }}>
										<small
											className="text-light"
											style={{
												fontWeight: 600,
												fontSize: '20px',
												lineHeight: '23px',
											}}
										>
											Current Balance
										</small>
									</h5>
									<div className="row">
										<div className="col-12">
											<div
												className="text-center text-secondary h3"
												style={{ fontWeight: 'extra bold', fontSize: '50px', fontFamily: 'Inter' }}
											>
												{/* サ10300000.00 */}
												<img src={svg5} alt width="60%" />
											</div>
										</div>
									</div>
									<h5 className="mt-2">
										<small
											className="text-light"
											style={{ fontWeight: 'bold', fontSize: '14px' }}
										>
											Sats
										</small>
									</h5>

									<div className="row" style={{ paddingTop: '10px' }}>
										<div className="col-12">
											<div className="text-center">
												<div
													className="btn-group btn-group-sm"
													style={{
														border: '2px solid #E5E5E5',
														boxSizing: 'border-box',
														borderRadius: '36px',
													}}
												>
													<button
														type="button"
														className="btn btn-primary  custom-btn4 firstbtn"
													>
														$
													</button>
													<button
														type="button"
														className="btn btn-primary custom-btn4 firstbtn"
													>
														¥
													</button>
													<button
														type="button"
														className="btn btn-primary  custom-btn4 firstbtn"
													>
														₿
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="container-fluid">
										<div className="row flex-wrap justify-content-center" style={{ margin: '80px 0px 100px 0px' }}>
											<div className="m-4">
												<div className="float-right">
													<div className="btn btn-outline-secondary custom-btn5 custombtn">
														View Performance
													</div>
												</div>
											</div>

											<div className="m-4">
												<div className="float-left">
													<div className="btn btn-outline-primary  custom-btn5 custombtn">
														View Plan
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<h2 className="text-center stackingsats">
						Stacking Sats, on <strong>Autopilot</strong>
					</h2>
					<div className="row mb-5" style={{ padding: ' 0 12px', lineHeight: 1.5 }}>
						<div className="col-md-2 col-sm-0"></div>
						<div className="col-md-8 col-sm-12" style={{ padding: 0 }}>
							<h4 className="mt-4 p-1">
								<small className="stackingtext">
									Volatility can be distracting, <strong> Ryze </strong> helps you zoom out and focus
									on what's important: accumulating more Bitcoin. when you stack with{' '}
									<strong> Ryze </strong>, you'll never FOMO buy the top or miss the bottom again.
								</small>
							</h4>
						</div>
						<div className="col-md-2 col-sm-0"></div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Balance;
