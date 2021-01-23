import React, { Fragment }  from 'react'; 
import './Content.scss'
import Card from '../Card/Card';

function Content(props) {

	const cards = props.cards;

	return ( 
		<div id="card-list" className="card-list">
			{ 
				cards.map((card, i) => {
					return <Card card={card} key={"card-" + i} index={i}/>
				})
			}
		</div>
	)

}

export default Content;