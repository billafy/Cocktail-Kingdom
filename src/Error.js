import React from 'react';
import {Link} from 'react-router-dom';
import {ImCross} from 'react-icons/im';

const Error = () => {
	return (
		<section className='error'>
			<h1><ImCross/> Error : Page does not exist</h1>
			<button><Link to='/'>Back To Home</Link></button>
		</section>	
	);
}

export default Error;