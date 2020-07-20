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
					{width <= 768 ? <div className="introducing">Introducing Ryze</div> : ''}
					<div
						className="h3 accumulate py-3"
						style={{
							fontSize: width <= 768 ? '100.04px' : '66.04px',
							marginTop: '4.2rem',
						}}
					>
						Accumulate {width <= 768 ? <br /> : ''} Bitcoin {width <= 768 ? '' : <br />} While{' '}
						{width <= 768 ? <br /> : ''} you
						<span className="change-word">
							{' '}
							<ReactTypingEffect text={['Sleep', 'Eat', 'Play', 'Relax']} speed={200} typingDelay={200} />
						</span>
					</div>
					<small
						ref={(el) => (deposit = el)}
						className={width <= 768 ? 'animate-deposit-mobile' : 'animate-deposit'}
						style={{
							marginTop: `${width <= 768 ? '30px' : '10px'}`,
							fontWeight: 400,
							fontSize: width <= 768 ? '22px' : 18,
						}}
					>
						<p className="px-5 my-5">Deposit every week, month or paycheck and {width <= 768 ? <br /> : ''}
							<strong> Ryze </strong> will buy the dip for you automatically.
						<br />
						Ryze helps you stack sats and build your Bitcoin savings.</p>
					</small>
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
