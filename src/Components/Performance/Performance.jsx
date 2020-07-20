import React, { Fragment } from 'react';
import graph2 from '../../Assets/img/graph2.svg';
import exit from '../../Assets/img/exit.svg';
import card from '../../Assets/img/card.svg';
import money from '../../Assets/img/money.svg';
import padlock from '../../Assets/img/padlock.svg';

const Performance = () => {
	return (
		<Fragment>
			{' '}
			<section className="pt-5 pb-5 m-3">
				<div className="container text-center">
					<div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
						<div className="col-md-2 col-sm-0"></div>

						<div className="col-md-8 col-sm-12">
							<div className="card custom-card-2 ">
								<div className="card-header" style={{ background: 'transparent' }}>
									<div className="d-flex flex-row justify-content-between">
										<h4 className="card-title my-3">
											<strong>Performance</strong>
										</h4>
										<img src={exit} alt="" style={{ width: '5%', marginTop: -10 }} />
									</div>
								</div>
								<img className="card-img-top" src={graph2} alt="Card image" />
								<div className="card-body" style={{ padding: 0 }}>
									<div
										className="container-fluid border-bottom w-100"
										style={{ textAlign: 'left', borderBottom: '0.568182px', solid: '#E5E5E5' }}
									>
										<p
											style={{
												fontSize: '16px',
												fontWeight: 'bold',
												padding: '1.25rem .5rem 0',
											}}
										>
											Activity
										</p>
									</div>

									<div
										className="row border py-1"
										style={{
											borderRadius: '12px',
											margin: '1.5rem 1.25rem',
										}}
									>
										<div className="col-lg-1 col-sm-2 col-3">
											<div className="rounded-cir1 text-secondary">
												APR
												<br />
												<span className="date-number">28</span>
											</div>
										</div>
										<div className="col-lg-8 col-sm-7 col-5  pt-1">
											<div
												style={{
													textAlign: 'left',
													fontSize: '10px',
													position: 'relative',
													top: '50%',
													transform: 'translateY(-50%)',
												}}
											>
												<div className="d-flex flex-row">
													<strong>Brought</strong>
													<img src={card} alt="" className="card-img" />
												</div>
												<small
													className="text-secondary"
													style={{
														borderRadius: '8px',
													}}
												>
													{' '}
													Using Truist Bank ****1234
												</small>
											</div>
										</div>
										<div className="col-lg-3 col-sm-3 col-4">
											<div
												style={{
													textAlign: 'right',
													fontSize: '10px',
													position: 'relative',
													top: '50%',
													transform: 'translateY(-50%)',
												}}
											>
												<strong>+ 0.1 BTC</strong>
												<br />
												<p> $820.33</p>
											</div>
										</div>
									</div>

									<div
										className="row border py-1 "
										style={{
											borderRadius: '12px',
											margin: '1.5rem 1.25rem',
										}}
									>
										<div className="col-lg-1 col-sm-2 col-3">
											<div className="rounded-cir1 text-secondary">
												APR
												<br />
												<span className="date-number">29</span>
											</div>
										</div>
										<div className="col-lg-8 col-sm-7 col-5 pt-1">
											<div
												style={{
													textAlign: 'left',
													fontSize: '10px',
													position: 'relative',
													top: '50%',
													transform: 'translateY(-50%)',
												}}
											>
												<div className="d-flex flex-row">
													<strong>Withdrawal</strong>
													<img src={padlock} alt="" className="card-img" />
												</div>
												<small
													className="text-secondary"
													style={{
														borderRadius: '8px',
													}}
												>
													{' '}
													To Srikar's Ledger Wallet
												</small>
											</div>
										</div>
										<div className="col-lg-3 col-sm-3 col-4">
											<div
												style={{
													textAlign: 'right',
													fontSize: '10px',
													position: 'relative',
													top: '50%',
													transform: 'translateY(-50%)',
												}}
											>
												<strong>- 0.05 BTC</strong>
												<br />
												<p> $410.16</p>
											</div>
										</div>
									</div>

									<div
										className="row border py-1"
										style={{
											borderRadius: '12px',
											margin: '1.5rem 1.25rem',
										}}
									>
										<div className="col-lg-1 col-sm-2 col-3">
											<div className="rounded-cir1 text-secondary">
												APR
												<br />
												<span className="date-number">30</span>
											</div>
										</div>
										<div className="col-lg-8 col-sm-7 col-5">
											<div
												style={{
													textAlign: 'left',
													fontSize: '10px',
													position: 'relative',
													top: '50%',
													transform: 'translateY(-50%)',
												}}
											>	<div className="d-flex flex-row">
													<strong>Weekly Deposit</strong>
													<img src={money} alt="" className="card-img" />
												</div>

												<small
													className="text-secondary"
													style={{
														borderRadius: '8px',
													}}
												>
													{' '}
													Using Truist Bank ****1234
												</small>
											</div>
										</div>
										<div className="col-lg-3 col-sm-3 col-4">
											<div
												style={{
													textAlign: 'right',
													fontSize: '10px',
													position: 'relative',
													top: '50%',
													transform: 'translateY(-50%)',
												}}
											>
												<strong>+ 0.06 BTC</strong>
												<br />
												<p> $510.16</p>
											</div>
										</div>
									</div>

									<div className="text-center">
										<i
											className="fas fa-angle-down"
											style={{ fontSize: '30px', color: '#E5E5E5' }}
										></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-2 col-sm-0"></div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Performance;
