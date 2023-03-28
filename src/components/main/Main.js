import React, { useEffect, useState } from 'react'
import CardPostService from '../../API/CardPostService'
import { useFetching } from '../../hooks/useFetching'

import '../../static/css/main.css'
import CardList from './CardList'

export default function Main() {

    const [cards, setCards] = useState([])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const [requestCards, isCardLoading, errorReqCard] = useFetching(async () => {
        const response = await CardPostService.getAll(limit)
        setCards([...cards, ...response.data])
    })

    useEffect(() => {
        requestCards()
    }, [page, limit])

    useEffect(() => {
        console.log(cards)
    }, [cards])


    return (        
        <div className='main'>
            <div className='main__block'>
                <div className='main__header'></div>
                <div className='main__cards'>
                    <CardList cards={cards}/>
                    {/* <button onClick={(e: any) => CardPostService.getAll()} style={{width:'300px', height:'300px', color:'red'}}></button> */}
                </div>
            </div>
        </div>
    )
}
