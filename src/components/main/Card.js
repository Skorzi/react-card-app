import React from 'react'



export default function Card(props) {
    return (
        <div className='card'>
            <div className='card__block'>
                <div className='card__header'>{props.card.ship_name}</div>
                <div className='card__params'>
                    <div className='params__type'>{props.card.ship_type}</div>
                    <div className='params__port'>{props.card.home_port}</div>
                </div>
            </div>
        </div>
    )
}
