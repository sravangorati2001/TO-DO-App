
import React from 'react';
import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Listitem(props){
  const item = props.list;
  const listitems= item.map( item =>{
      return <div className="list" key="item.key">
          <p >
              <input type="text" id={item.key} value={item.text} 
               onChange={(e)=> props.editItem(e.target.value,item.key)} />
          <span> 
              <FontAwesomeIcon className="faicons" icon="minus-circle" 
              onClick={ ()=> props.deleteItem(item.key)  }/>
          </span>
          </p>
          </div>
  })
  return (
      <div>
         {listitems} 
      </div>
    
  )
}

export default Listitem;