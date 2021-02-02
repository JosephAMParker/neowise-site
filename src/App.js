import React, { Fragment } from 'react';
import NeoWise from './components/NeoWise/NeoWise'
import './App.css';
import './img/bg_center.png'

import { Helmet } from 'react-helmet'

function App() {

	const TITLE = 'My Page Title'

	return (
		<Fragment>
			<title>{ TITLE }</title>

			<div className="root-container">
				<div className="app-container container-lg shadow rounded">
					<NeoWise />
				</div>
			</div>
		</Fragment>
	);
}

export default App;
