import React, { Fragment } from 'react';
import upArrow from '../../Assets/img/up-arrow.svg';

const Features = () => {
	return (
		<Fragment>
			<div>
				<div className="row mt-3">
					<div className="col-2  col-md-3 col-sm-3 pt-1 col-lg-1">
						<img src={upArrow} alt="" className="float-right pt-1 features-img" />
					</div>
					<div className="col-10 col-md-9 col-sm-9 col-lg-11">
						<h4 className="features-para">
							<small>
								Set up<strong> recurring</strong> deposits, or invest just once. <br/> Its your choice.
							</small>
						</h4>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-2 pt- col-md-3 col-lg-1">
						<img src={upArrow} alt="" className="float-right pt-1" />
					</div>
					<div className="col-10 col-md-9 col-lg-11">
						<h4 className="featurespara">
							<small>
								<strong>Speed</strong> up, slow down, or skip a deposit at any <br />time.
							</small>
						</h4>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-2 pt-1 col-md-3 col-lg-1">
						<img src={upArrow} alt="" className="float-right pt-1" />
					</div>
					<div className="col-10 col-md-9 col-lg-11">
						<h4 className="featurespara">
							<small>
								Ryze buys the dip with the cash <strong>saved</strong> up in <br />your account.
							</small>
						</h4>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Features;
