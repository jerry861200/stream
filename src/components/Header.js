import {Link} from 'react-router-dom';

import GoogleLogin from './GoogleLogin';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to='/' className='item' >
					Streamy
				</Link>
			<div className="right menu">
				<Link to ='/' className='item'>
					All Streams
				</Link>
				<GoogleLogin />
			</div>
		</div>
	)
}

export default Header;