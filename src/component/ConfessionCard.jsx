import React from 'react'
import "./ConfessionCard.css";

const ConfessionCard = (confession) => {
  console.log(confession);
  return (
    <div className='confessions'>
        <h3>{confession.confess}</h3>
        <p>{confession.date}</p>
    
    </div>
  )
}

export default ConfessionCard
