import React from 'react'; 
import './Header.scss';
import logo from './logo.png'; 

function Header(props) {

	return ( 
		<div class="center-block">
			<img className="logo-image" src={logo} alt="logo" />  
		</div>
	)

}

export default Header; 