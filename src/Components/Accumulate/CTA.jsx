import React, { Fragment, useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

export const CTA = (props) => {
	const { saveMail, handelEmail, type } = props;
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
			{type === 'up' ? (
				<div className="input1 input-animation" ref={(el) => (sendMail = el)}>
					<div className="py-2 input-mobile">
						<input
							type="email"
							className="input1-top"
							placeholder="> request access "
							onChange={handelEmail}
						/>
					</div>
					<button className="btn btn-primary custom-btn2 mx-3 my-2" onClick={saveMail}>
						Join Now
					</button>
				</div>
			) : (
				<div className="input1-bottom p-2 mb-4 input-animation" ref={(el) => (sendMail = el)}>
					<div className="row">
						<div className="col-lg-6 col-8">
							<input
								type="email"
								onChange={handelEmail}
								className="input1-a big-dog"
								style={{ color: 'white' }}
								placeholder="> join the waitlist"
							/>
						</div>
						<div className="col-lg-6 col-4">
							<div className="float-right">
								<button
									className="btn btn-primary custom-btn2-access custom-btn2input"
									onClick={saveMail}
								>
									Join Now
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default CTA;
