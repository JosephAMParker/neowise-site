import React, {Fragment} from 'react';  
import './Demo.scss'

function Header(props) {

	return ( 
		<Fragment>
			<h1 class="text-center"> <a href="https://josephamparker.github.io/neowise-game/">PLAY DEMO*</a> </h1> 
			<p class="subtext"> * Work In Progress- Does not represent the final look of the game. The finished product will be released for Android and iOS NOT in browser. You may experience performance issues playing in browser. </p>
		</Fragment>
	)

}

export default Header;