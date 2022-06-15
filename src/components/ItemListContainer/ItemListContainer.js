import React from 'react';
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';



const ItemListContainer = (props) => {


	return (
		<div className='ItemListContainer'>
			<h2>{props.title}</h2>
		<ItemCount/>
		</div>
		
	);
};

export default ItemListContainer;
