import React, { useState } from 'react';
import './ItemCount.css';

export function ItemCount() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, stock] = useState(0);
  const agregar = () =>{

    count <= 4 ? stock(count + 1) : console.log("no hay mas stock")

    // if(count <= 4){
    //   stock(count + 1)
    // }else{
    //   console.log("no hay mas stock")
    // }
    
  }
  const quitar = () =>{ count >= 1 ? stock(count - 1) : console.log("quitaste los productos")


    // if(count >= 1){
    //   stock(count - 1)
    // }else{
    //   console.log("quitaste los productos")
    // }

   
    
  }

  const onAdd = () => {

    console.log(`felicitaciones se agregaron ${count} productos al carrito`)

  };



  return (
   <div >
     <div>
     
      <button className='item' onClick={agregar}>

	  
        Agregar
      </button>
	  <button className='item' onClick={quitar}>

	  
        Quitar
      </button>
	  <button  className='item' onClick={onAdd}>Agrear A carrtio</button>
	  <div className='count'>{count}</div>
    </div>
   </div>
  )};