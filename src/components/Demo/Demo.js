import React, {Fragment} from 'react';  
import './Demo.scss'

function Header(props) {

	const subtext = props.demoData.subtext;

	return ( 
		<Fragment>
			<h1 class="text-center"> <a href="https://josephamparker.github.io/neowise-game/">PLAY DEMO*</a> </h1> 
			<p class="subtext"> {subtext} </p>
		</Fragment>
	)

}

export default Header;