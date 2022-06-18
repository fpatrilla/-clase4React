import React from 'react';
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';




const ItemListContainer = (props) => {
	

	return (
		
		<div>
			<div className='ItemListContainer'>
			<h2>{props.title}</h2>
			
		</div>
		<ItemCount initial={1}  stock={7} onAdd={""}  />
		</div>
		
	);
};

export default ItemListContainer;
