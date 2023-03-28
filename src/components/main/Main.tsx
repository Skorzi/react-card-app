import React, { useEffect, useState } from 'react'
import CardPostService from '../../API/CardPostService'
import { useFetching } from '../../hooks/useFetching'

import '../../static/css/main.css'

export default function Main() {

    const [cards, setCards] = useState<any[]>([])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [requestCards, isCardLoading, errorReqCard] = useFetching(async () => {
        const response = await CardPostService.getAll()
        setCards([...cards, ...response.data])
    })

    useEffect(() => {
        requestCards()
    }, [page, limit])


    return (        
        <div className='main'>
            <div className='main__block'>
                <div className='main__header'></div>
                <div className='main__cards'>
                    <button onClick={(e: any) => CardPostService.getAll()} style={{width:'300px', height:'300px', color:'red'}}></button>
                </div>
            </div>
        </div>
    )
}
