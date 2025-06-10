import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <div className="card" style={{overflow: "hidden"}}>
        <img src="https://www.bing.com/th/id/OIP.jnbR8JK2dY2-bI_SBQ5iZwHaEK?w=245&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" width={271} style={{border: "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
