import React, { Fragment, useState, useEffect } from 'react';
import './NeoWise.scss'
import useFetchData from '../../util/useFetchData';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Demo from '../Demo/Demo';

function NeoWise(props) {

	const dataJson = './data.json';
	const [cardData, setCardData] = useState([]);
	const [demoData, setDemoData] = useState([]);
	const [{ data, isLoading, isError, isSuccess}, doFetch] = useFetchData({cards:[]}); 

  	useEffect(() => {
	  	if(isSuccess && !isLoading && !isError) {
	  		setCardData(data.cards);
	  		setDemoData(data.demo);
	  	}  
  	}, [data, isLoading, isError, isSuccess]);

	useEffect(() => { 
    	doFetch(dataJson);
  	},[doFetch]);

	return (
		<Fragment>
			<Header />
			<Demo demoData={demoData}/>
			<Content cards={cardData}/>  
		</Fragment>
	);
}

export default NeoWise;