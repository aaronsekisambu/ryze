import React, { Fragment, useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

export const EmailConfirmation = (props) => {
	const { image, type } = props;
	let sendMail = useRef(null);

	useEffect(() => {
		TweenMax.to(sendMail, {
			duration: 2,
			opacity: 1,
			x: 0,
			y: 0,
			ease: Power3.easeOut,
		});
	}, []);
	return (
		<Fragment>
			<div className={type === 'web' ? 'email-web' : 'email-mobile'} ref={(el) => (sendMail = el)}>
				<img src={image} alt="" />
			</div>
		</Fragment>
	);
};

export default EmailConfirmation;
