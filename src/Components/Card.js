import React from 'react'
import './Card.css'; 
const Card = () => {
  return (
    <div className="card">
    <div className="card__content">
        <h1>Solana</h1>
        <img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=026" alt="Solana Logo" />

        <h2>Prize: 3.00 ($67.46)</h2>
        <p>Solana Price: $27.23</p>
        <img className="up"src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Green-Up-Arrow.svg" alt="up Logo" />
    </div>
    <div className="blob"></div>
    <div className="blob"></div>
    <div className="blob"></div>
    <div className="blob"></div>
    </div>
  )
}

export default Card; 