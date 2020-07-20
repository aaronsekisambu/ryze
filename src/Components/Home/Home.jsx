import React, { Fragment, useState, useEffect } from 'react';
import Accumulate from '../Accumulate/Accumulate';
import Balance from '../Balance/Balance';
import Automatic from '../Automatic/Automatic';
import Deposit from '../Deposit/Deposit';
import Gold from '../Gold/Gold';
import Control from '../Control/Control';
import Performance from '../Performance/Performance';
import Access from '../Access/Access';
import { Footer } from '../Footer/Footer';
import Phones from '../Phones/Phones';
// import { useWindowSize } from '../../Helpers/helper';

const Home = () => {
	// const [width, height] = useWindowSize();
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [width]);
	return (
		<Fragment>
			<Accumulate />
			{/* <Balance /> */}
			{width <= 768 ? '' : <Phones />}
			<Automatic />
			<Deposit />
			<Gold />
			<Control />
			<Performance />
			<Access />
			<Footer />
		</Fragment>
	);
};

export default Home;
