import React, { Fragment } from 'react';
import svgB from '../../Assets/img/B.svg';
import ReactTypingEffect from 'react-typing-effect';

const Gold = () => {
	return (
		<Fragment>
			{' '}
			<section className="gradient-back1 pt-5 pb-5">
				<div className="container text-center">
					<div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
						<div className="col-md-12" style={{ padding: 0 }}>
							<img src={svgB} alt="" width="45" />
							<h2 className="mt-4 text-light digital">
								Bitcoin is <b className="break-mobile" />{' '}
								<strong>
									<ReactTypingEffect
										text={['Digital Gold', 'Sovereignty', ' Uncorrelated', 'Deflationary']}
										speed={100}
										typingDelay={200}
									/>
								</strong>
							</h2>
							<h3 className="text-light"></h3>
							<div className="row">
								<div className="col-md-3 col-sm-0 col-lg-2"></div>
								<div className="col-md-6 col-sm-12 col-lg-8">
									<h4 className="mt-3 text-light">
										<small className="we-bitcoin">
											We believer Bitcoin has a place in everyone's life.
											<b className="break-mobile" /> <strong> Whether </strong> 
											you're protecting your wealth, looking  <b className="break-mobile" /> for
											<strong> diversification,</strong> or simply
											<strong> stacking sats,</strong> we're <b className="break-mobile" /> here to help you accumulate{' '}
											Bitcoin over time, <b className="break-mobile" />
											<strong> on your own terms.</strong>
										</small>
									</h4>
								</div>
								<div className="col-md-3 col-sm-0 col-lg-2"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Gold;
