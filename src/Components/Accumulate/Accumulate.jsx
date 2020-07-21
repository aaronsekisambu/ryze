import React, { Fragment, useRef, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useWindowSize } from '../../Helpers/helper';
import { TweenMax, Power3 } from 'gsap';

const Accumulate = () => {
	const [width, height] = useWindowSize();
	let deposit = useRef(null);

	useEffect(() => {
		TweenMax.to(deposit, 2, { opacity: 1, ease: Power3.easeInOut });
	}, []);
	return (
		<Fragment>
			<section>
				<div className={`container text-center my-5`}>
					<div className="introducing">Introducing Ryze</div>
					<div className="h3 accumulate py-3">
						Accumulate <br className="break-mobile" /> Bitcoin <br className="break-web break-tabs break-XL" /> While{' '}
						<br className="break-mobile" /> you 
						<span className="change-word">
							{' '}
							<ReactTypingEffect text={['Sleep', 'Eat', 'Play', 'Relax']} speed={200} typingDelay={200} />
						</span>
					</div>
					<small ref={(el) => (deposit = el)}>
						<p className="px-3 my-2 deposit-every-week">
							Deposit every week, month or paycheck and <br className="break-mobile" />
							<strong> Ryze </strong> will buy the dip for you automatically.
							<br />
							Ryze helps you stack sats and build your Bitcoin savings.
						</p>
					</small>
					<div className="row justify-content-center" style={{ marginTop: '30px' }}>
						<div className="input1">
							<div className="py-2 input-mobile">
								<input type="text" className="input1-top" placeholder="> request access " />
							</div>
							<button className="btn btn-primary custom-btn2 mx-3 my-2">Join Now</button>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Accumulate;
