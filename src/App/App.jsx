import React, { Fragment, useEffect, useState, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import Home from '../Components/Home/Home';
import Navigation from '../Components/Navigation/Navigation';
import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

import { TweenMax, Power3 } from 'gsap';
import { useWindowSize } from '../Helpers/helper';

function App() {
	const [loading, setLoading] = useState(true);
	const [width, height] = useWindowSize();
	const [load, setLoad] = useState(true);
	let site = useRef(null);
	const override = css`
		display: block;
	`;
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			setLoad(false);
		}, 2000);
		TweenMax.to(site, 2, { opacity: 1, ease: Power3.easeInOut, delay: 2 });
	}, []);
	return (
		<Fragment>
			<div className="whole-site" style={{ display: loading ? 'none' : 'block' }} ref={(el) => (site = el)}>
				<BrowserRouter>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</BrowserRouter>
			</div>
			<div className="center-block" style={{ display: loading ? 'flex' : 'none' }}>
				<BounceLoader css={override} size={width <= 768 ? 20 : 50} color={'#881DEB'} loading={load} />
			</div>
		</Fragment>
	);
}

export default App;
