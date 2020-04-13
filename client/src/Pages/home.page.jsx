import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  
  const [ items, setItems ] = useState([])

  useEffect(()=>{
    axios.get('/api/items')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }, [])

  const renderItems = () =>{
    return items.map( item => (
      <div key={`item-${item.id}`}>
      <h3> {item.name}</h3>
      <img src={`${item.image}`} alt="Item"/>
      <p> {item.description}</p>
      <span> # Likes : {item.likes}</span>
      </div>
    ))
  }


  return(
   <div>
     <h1> Here are all of the items. </h1>
     <Link to={{pathname:'/addItem'}}> 
        <button> Add Item </button>
     </Link>
     <br />
     {renderItems()}
   </div>
  )
}

export default HomePage