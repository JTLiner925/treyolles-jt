import React from 'react';
import './Card.css';

function Card(props){
    const cardTitle = `${props.allCards.title}`;
    const cardContent = `${props.allCards.content}`;
    return (
        <div className="Card">
            <h3>{cardTitle}</h3>
            <p>{cardContent}</p>
        </div>
    );
}
export default Card;