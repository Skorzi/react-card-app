import React from 'react'

type Card = {
    header: string,
    descript: string,
    type: string,
    port: string
}

export default function card({header, descript, type, port}: Card) {
    return (
        <div className='card'>
            <div className='card__block'>
                <div className='card__header'>{header}</div>
                <div className='card__params'>
                    <div className='params__type'>{type}</div>
                    <div className='params__port'>{port}</div>
                </div>
            </div>
        </div>
    )
}
