import React from "react";
import CardFunctional from "./CardFunctional";
import './card-list-functional.css';

export default function CardListFunctional({ monsters }) {
    return(
        <div className='card-list'>
            {monsters.map(monster => {
                return (
                    <CardFunctional monster={monster}
                        name={monster.name}
                        email={monster.email}
                        key={monster.id}
                    />
                );
            })}
        </div>
    )

}