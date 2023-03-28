import React from 'react'
import '../../static/css/card.css'


export default function Card(props) {
    return (
        <div className='card'>
            <div className='card__block'>
                <div className='card__content'>
                    <div className='card__header'>{props.card.ship_name}</div>
                    <div className='card__params'>
                        <div className='params__type'>
                            <div className='type__header'>Тип</div>
                            <div className='type__name'>{props.card.ship_type}</div>
                        </div>
                        <div className='params__port'>
                            <div className='port__header'>Порт</div>
                            <div className='port__name'>{props.card.home_port}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
