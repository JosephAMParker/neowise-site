import React, {Fragment} from 'react'; 
import './Card.scss'; 
import './glow-border.png';

function Card(props) {

	const card = props.card;
	const i = props.index;

	return (
		<Fragment>
			<hr class="featurette-divider"/>

		    <div class="row featurette">
		      <div class={"text-col col-md-7 " + (i % 2 == 1 ? "order-md-2" : "")}>
		      	<div class="card-text">
		        	<h2 class="featurette-heading">{card.header}<span class="text-muted">{card.subheader}</span></h2>
		        	<p class="lead"> {card.body} </p>
		        </div>
		      </div> 
		      <div class={"col-md-5 " + (i % 2 == 1 ? "order-md-1" : "")}>
		      	<div class="card-img glow-border"> 
		        	<img src={process.env.PUBLIC_URL + '/img/' + card.image} alt="showcase-gif" />             
		        </div>
		       </div> 
		    </div>
	    </Fragment>
	)

}

export default Card;