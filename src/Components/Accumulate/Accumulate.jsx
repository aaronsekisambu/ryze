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
				<div className="container text-center my-5">
					<div
						className="h3 accumulate py-3"
						style={{
							fontSize: width <= 425 ? '44.04px' : '66.04px',
							marginTop: '4.2rem',
						}}
					>
						Accumulate {width <= 425 ? <br /> : ''} Bitcoin {width >= 786 ? <br /> : ''} While{' '}
						{width <= 425 ? <br /> : ''} you
						<span className="change-word">
							{' '}
							<ReactTypingEffect text={['Sleep', 'Eat', 'Play', 'Relax']} speed={200} typingDelay={200} />
						</span>
					</div>
					<h4 style={{ marginTop: '10px', fontWeight: 400 }}>
						<small ref={(el) => (deposit = el)} className="animate-deposit">
							Deposit every week, month or paycheck and <strong> Ryze </strong> will buy the dip for you
							automatically.
							<br />
							Ryze helps you stack sats and build your Bitcoin savings.
						</small>
					</h4>
					<div className="row justify-content-center" style={{ marginTop: '60px' }}>
						<div className={`row ${width <= 576 ? '' : 'input1 justify-content-between'}`}>
							<div className={` py-2  ${width <= 576 ? 'input-mobile mb-3' : ''}`}>
								<input type="text" className="input1-a input1-atop" placeholder="> request access " />
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
