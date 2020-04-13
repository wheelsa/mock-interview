import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  
  const [ items, setItems ] = useState([])
  const [ sortAsc, setSort] = useState(false)
  useEffect(()=>{
    axios.get('/api/items')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }, [])

  const renderItems = () =>{
    if(sortAsc){
    items.sort((a,b) => a.likes - b.likes);
  }else{
    items.sort((a,b) => b.likes - a.likes);
  }
    return items.map( item => (
      <div key={`item-${item.id}`}>
      <h3> {item.name}</h3>
      <img src={`${item.image}`} alt="Item"/>
      <p> {item.description}</p>
      <span> # Likes : {item.likes}</span>
      </div>
    ))
  }

  const toggleSort = () => setSort(!sortAsc)

  const sortButton = ()=> {
    if(!sortAsc){
    return <button onClick={toggleSort}> Sort Asc </button>
   }else{ 
    return <button onClick={toggleSort}> Sort Desc </button>
   }}

  return(
   <div>
     <h1> Here are all of the items. </h1>
     <Link to={{pathname:'/addItem'}}> 
        <button> Add Item </button>
     </Link>
     <br />
     <br />
     {sortButton()}
     <br />
     {renderItems()}
   </div>
  )
}

export default HomePage