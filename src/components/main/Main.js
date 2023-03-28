import React, { useEffect, useState } from 'react'
import CardPostService from '../../API/CardPostService'
import { useFetching } from '../../hooks/useFetching'
import { InfinitySpin } from 'react-loader-spinner'

import '../../static/css/main.css'
import CardList from './CardList'
import { getCountOfPages } from '../../utils/countPages'

export default function Main() {

    const [cards, setCards] = useState([])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    // const [totalShips, setTotalShips] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [requestCards, isCardLoading, errorReqCard] = useFetching(async () => {
        const response = await CardPostService.getWithParam(limit)
        setCards([...cards, ...response.data])
        const response_all = await CardPostService.getWithParam()
        const totalShips = response_all.data.length
        setTotalPages(getCountOfPages(totalShips, limit))
        // const allShipCount = 
    })

    

    useEffect(() => {
        requestCards()
    }, [page, limit])

    useEffect(() => {
        console.log(totalPages)
    }, [totalPages])

    const changePage = (page) => {
        setPage(page)
    }

    return (        
        <div className='main'>
            <div className='main__block'>
                <div className='main__header'>SpaceX Ships</div>
                <div className='main__cards'>
                    <CardList cards={cards}/>
                </div>
                {isCardLoading && 
                    <div style={{display: 'flex', justifyContent: 'center'}}><InfinitySpin color='#818698'/></div>
                }

            </div>
        </div>
    )
}
