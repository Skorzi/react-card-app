import React from 'react'
import Card from './Card'
export default function CardList({cards}) {
    return (
        <div>
            {cards.map((card, index) => 
                <Card key={index} card={card}/>
            )}
        </div>
    )
}
