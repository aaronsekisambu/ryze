import React, { Fragment } from 'react'
import phoneA from '../../Assets/img/phoneA.svg'
import phoneB from '../../Assets/img/phoneB.svg'

const Phones = () => {
    return (
		<Fragment>
			<div
				className="w-100 d-flex flex-row flex-nowrap justify-content-between phone-mobile"
				style={{ overflowX: 'hidden',  }}
			>
				<img src={phoneB} alt="" />
				<img src={phoneA} alt="" />
			</div>
		</Fragment>
	);
}

export default Phones
