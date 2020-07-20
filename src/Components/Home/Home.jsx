import React, { Fragment } from 'react';
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

const Home = () => {
	return (
		<Fragment>
			<Accumulate />
			{/* <Balance /> */}
			<div className="phone-mobile"><Phones /></div>
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
