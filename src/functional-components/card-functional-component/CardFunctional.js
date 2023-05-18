import React from "react";
import './card-list-functional.css';

export default function CardFunctional({ name, email, id }) {

    return(
        <div className='card-container' key={id}>
            <img 
                alt={`${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`} 
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )

}