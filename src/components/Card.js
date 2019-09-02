import React from 'react'
import './Card.css'

const Card = ({ name, price, description, location }) => {
  let whatPrice = price === "0" ? `Free Camping` : `‎£${ price } / night`
	return (
    <div className="container">
        <div className="card">
          <button className="card-button" type="button"><strong>{ location }</strong></button>
          <h4 className="card-h4"><strong>{ name }</strong></h4>
          <h5 className="card-h5"><strong>{ whatPrice }</strong></h5> 
          <p className="card-par">{ description }</p>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
    </div>
	)
}

export default Card