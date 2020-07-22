import React, { Fragment, useEffect, useState } from 'react';
import svg4 from '../../Assets/img/4.svg';
import logoWhite from '../../Assets/img/logo/logo-white.svg';
import { useWindowSize, validateEmail } from '../../Helpers/helper';
import { db } from '../../database/firebase';
import emailAccessMobile from '../../Assets/img/emailAccessMobile.svg';
import EmailConfirmation from '../Accumulate/EmailConfirmation';
import CTA from '../Accumulate/CTA';

const Access = () => {
	const [width, height] = useWindowSize();
	const [email, setEmail] = useState('');
	const [received, setReceived] = useState(false);
	const [done, setDone] = useState(false);
	const [error, setError] = useState('');

	const handelEmail = (e) => {
		e.preventDefault();
		setError('');
		setEmail(e.target.value);
	};
	const saveEmail = async () => {
		try {
			const duplicate = localStorage.getItem('email');
			const validMail = validateEmail(email);
			if (!validMail) {
				return setError('Please insert a valid email address');
			}
			if (duplicate) {
				setDone(true);
				return setTimeout(() => {
					setDone(false);
				}, 2000);
			}
			const sendData = await db.collection('users').add({ email });
			if (sendData) {
				setReceived(true);
				setError('');
				localStorage.setItem('email', true);
				return setTimeout(() => {
					setReceived(false);
				}, 2000);
			}
			setError('Something went wrong try again');
		} catch (error) {
			setError('Oops its our problem, try again later');
		}
	};
	return (
		<Fragment>
			{' '}
			<section className="pb-5 mb-5" style={{ paddingTop: '100px' }} id="getearly">
				<div className="container text-center">
					<div className="row" style={{ maxWidth: '1010px', margin: '0 auto' }}>
						<div className="col-md-0 col-sm-0"></div>

						<div className="col-md-12 col-sm-12">
							<div
								className="card custom-card-2 gradient-back2-access"
								style={{ borderRadius: '18.3018px' }}
							>
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
													We're bringing on Bitcoiners <b className="break-mobile" /> who want
													to stack more sats!
												</small>
											</h4>
											<br />
											<div>
												{done ? (
													<div className="col-lg-6 col-8 ">
														<EmailConfirmation image={emailAccessMobile} type="web" />
														<EmailConfirmation image={emailAccessMobile} type="mobile" />
													</div>
												) : (
													<CTA type="below" saveMail={saveEmail} handelEmail={handelEmail} />
												)}
												<p style={{ marginTop: '10px' }}>
													<small className="text-warning">{error}</small>
												</p>
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
