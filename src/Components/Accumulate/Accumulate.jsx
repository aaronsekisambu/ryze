import React, { Fragment, useRef, useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useWindowSize, validateEmail } from '../../Helpers/helper';
import { TweenMax, Power3 } from 'gsap';
import emailWeb from '../../Assets/img/emailWeb.svg';
import emailMobile from '../../Assets/img/emailMobile.svg';
import EmailConfirmation from '../../Components/Accumulate/EmailConfirmation';
import { db } from '../../database/firebase';
import CTA from './CTA';

const Accumulate = () => {
	const [width, height] = useWindowSize();
	const [email, setEmail] = useState('');
	const [received, setReceived] = useState(false);
	const [done, setDone] = useState(false);
	const [error, setError] = useState('');
	let deposit = useRef(null);

	useEffect(() => {
		TweenMax.to(deposit, 2, { opacity: 1, ease: Power3.easeInOut });
	}, []);
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
				}, 5000);
			}
			const sendData = await db.collection('users').add({ email });
			if (sendData) {
				setReceived(true);
				setError('');
				localStorage.setItem('email', true);
				return setTimeout(() => {
					setReceived(false);
				}, 5000);
			}
			setError('Something went wrong try again');
		} catch (error) {
			setError('Oops its our problem, try again later');
		}
	};
	return (
		<Fragment>
			<section>
				<div className={`container text-center my-5`}>
					<div className="introducing">Introducing Ryze</div>
					<div className="h3 accumulate py-3">
						Accumulate <br className="break-mobile" /> Bitcoin{' '}
						<br className="break-web break-tabs break-XL" /> while <br className="break-mobile" /> you
						<span className="change-word">
							{' '}
							<ReactTypingEffect
								text={['Sleep', 'Work', 'Tweet', 'Relax']}
								speed={100}
								typingDelay={200}
							/>
						</span>
					</div>
					<small ref={(el) => (deposit = el)}>
						<p className="px-3 my-2 deposit-every-week">
							Deposit every week, month or paycheck and <br className="break-mobile" />
							buy the dip automatically.
							<br />
							<strong> Ryze </strong> helps you stack sats and build your Bitcoin savings.
						</p>
					</small>
					<div className="row justify-content-center" style={{ marginTop: '30px' }}>
						{done ? (
							<div className="email-web-anim">
								<EmailConfirmation image={emailWeb} type="web" />
								{/* <EmailConfirmation image={emailWeb} /> */}
							</div>
						) : (
							<CTA saveMail={saveEmail} handelEmail={handelEmail} type="up" />
						)}
					</div>
					<small className="text-danger">{error}</small>
				</div>
			</section>
		</Fragment>
	);
};

export default Accumulate;
