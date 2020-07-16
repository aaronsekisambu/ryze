import React, { Fragment } from 'react';
import clockLogo from '../../Assets/img/clock-logo.png';
import whiteLogo from '../../Assets/img/logo/logo-white.svg';
import svg1 from '../../Assets/img/1.svg';
import svg2 from '../../Assets/img/2.svg';
import plaid from '../../Assets/img/plaid.svg';
import leftArrow from '../../Assets/img/left-arrow.svg';
import { useWindowSize } from '../../Helpers/helper';
import Features from './Features';
import exit from '../../Assets/img/exit.svg';

const Deposit = () => {
	const [width, height] = useWindowSize();
	return (
		<Fragment>
			<section className={`${width <= 576 ? '' : 'pt-5 mx-3'} pb-5`}>
				<div className="row" style={{ marginRight: '0', marginLeft: '0' }}>
					<div className="col-lg-1"></div>
					<div className="col-lg-5 " style={{ padding: '80px 0 0 0', overflowX: 'hidden' }}>
						<div className={`${width <= 576 ? 'd-flex flex-column align-items-center' : ''}`}>
							<img src={clockLogo} alt="" width="60" />
							<h3 className="mt-3 invest" style={{ paddingTop: '15px' }}>
								<strong>Invest at your own pace.</strong>
							</h3>
							<h3 className="pb-3 invest">With a little as $10</h3>
						</div>
						{width <= 576 ? '' : <Features />}
					</div>

					<div className="col-lg-6">
						<div className="div" id="deposit" style={{ margin: width <= 576 ? '1.5rem' : '' }}>
							<div
								className="container depositmobile"
								style={{
									position: 'relative',
									height: '180px',
									display: width <= 576 ? 'block' : 'none',
								}}
							>
								<div className="row" id="depositmobile" style={{ height: '240px' }}>
									<div className="col-6 float-left">
										<div className="float-left" style={{ padding: '30px 0 0 15px' }}>
											<img src={whiteLogo} alt="" width="20" />
										</div>
									</div>
									<div className="col-6 float-right">
										<div className="float-right" style={{ padding: '30px 15px 0 0px' }}>
											<div className="dropdown">
												<button
													type="button"
													className="btn btn-outline-primary dropdown-toggle custom-btn custom-btn3"
													data-toggle="dropdown"
												>
													Srikar
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card custom-card-2 deposit">
								<div className="card-body">
									<div className="d-flex flex-row justify-content-between">
										<h4 className="card-title">
											<strong>Deposit</strong>
										</h4>
										<img src={exit} alt="" style={{ width: '7%', marginTop: '-30px' }} />
									</div>
									<div className="text-center">
										<input type="text" className="input2"  placeholder="$25" />
										<p
											className="pt-2"
											style={{
												fontSize: '11px',
												lineHeight: '12px',
												color: 'rgba(73, 76, 85, 0.67)',
											}}
										>
											How Much?
										</p>

										<div className="card">
											<div className="card-body" style={{ padding: '.4rem 1.25rem' }}>
												<div className="row justify-content-round">
													<div className="d-flex flex-column ml-2">
														<div
															className="shadow-sm"
															style={{
																borderRadius: '200px',
																padding: '12px 2px',
															}}
														>
															<img src={svg1} alt="" style={{ width: '55%' }} />
														</div>
														<small
															className="text-secondary pt-1"
															style={{ fontSize: '10px' }}
														>
															How often?
														</small>
													</div>
													<div className="ml-5">
														<div className="btn-group btn-group-sm py-2">
															<button
																type="button"
																className="btn custom-btn-category p-2  ml-1 text-dark border"
																style={{ color: '#494C55' }}
															>
																Weekly
															</button>
															<button
																type="button"
																className="btn btn-outline-light text-dark  custom-btn4 custom-btn6 border"
																style={{ color: '#494C55' }}
															>
																Bi-Weekly
															</button>
															<button
																type="button"
																className="btn btn-outline-light text-dark mr-1 custom-monthly px-2 custom-btn6 border"
																style={{ padding: '0', color: '#494C55', MozBorderRadiusTopright: "20px !important" }}
															>
																Monthly
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="card" style={{ marginTop: '35px' }}>
											<div className="card-body" style={{ padding: '.4rem 1.25rem' }}>
												<div className="row">
													<div className="d-flex flex-column ml-2">
														<div
															style={{
																borderRadius: '200px',
																padding: '10px 1px',
															}}
															className="shadow-sm"
														>
															{' '}
															<img src={svg2} alt="" style={{ width: '50%' }} />
														</div>
														<small
															className="text-secondary pt-1"
															style={{ fontSize: '10px' }}
														>
															From where?
														</small>
													</div>
													<div className="p-2 mx-5">
														<p
															style={{
																fontWeight: '600',
																color: '#494c55',
																textAlign: 'left',
																marginBottom: '0px',
															}}
														>
															Chase Bank
														</p>
														{width <= 576 ? (
															<small className="float-left zee-fee">Zee fee</small>
														) : (
															<p
																style={{
																	fontWeight: 600,
																	color: '#ca44e9',
																	textAlign: 'left',
																	marginBottom: '0px',
																	fontSize: '10px',
																}}
															>
																**********1234
															</p>
														)}
													</div>
												</div>
												<div
													className="float-right d-flex flex-column align-items-end"
													style={{ margin: '-3rem 0 0' }}
												>
													<img src={leftArrow} alt="" />
													<small
														style={{
															margin: '1rem -6px 0px 0',
															fontSize: '12px',
															textAlign: 'float-right',
														}}
														className="text-secondary"
													>
														{' '}
														Secured by{' '}
														<img
															src={plaid}
															alt=""
															style={{ width: '40%', textAlign: 'float-right' }}
														/>
													</small>
												</div>
											</div>
										</div>

										<div className="pb-3" style={{ paddingTop: '32px' }}>
											<div className="row">
												<div className="col-12">
													<button
														className="btn btn-primary custom-btn custom-btn2 btn-block"
														style={{ width: '100%' }}
													>
														Confirm Deposit
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{width <= 576 ? <Features /> : ''}
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Deposit;
