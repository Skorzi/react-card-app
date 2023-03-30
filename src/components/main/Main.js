import React, { useEffect, useState } from 'react'
import CardPostService from '../../API/CardPostService'
import { useFetching } from '../../hooks/useFetching'
import { InfinitySpin } from 'react-loader-spinner'
import '../../static/css/main.css'
import CardList from './CardList'
import { getCountOfPages } from '../../utils/countPages'
import Pagination from '../pagination/Pagination'
import Filter from '../filter/Filter'
import useCards from '../../hooks/useCards'

export default function Main() {

    const [cards, setCards] = useState([])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const [offset, setOffset] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [filter, setFilter] = useState({sortType: '', sortPort: [], query: ''})
    const sortedAndSearchedCards = useCards(cards, filter.sortType, filter.sortPort, filter.query)

    //Логика по запросу карточек и их вывода, счету общего количества страниц
    const [requestCards, isCardLoading, errorReqCard] = useFetching(async () => {
        const response = await CardPostService.getWithParam(limit, offset)
        // setCards([...cards, ...response.data])
        setCards([...response.data])

    })

    const [requestCards_all, isCardLoading_all, errorReqCard_all] = useFetching(async () => {
        const response_all = await CardPostService.getAll()
        const totalShips = response_all.data.length
        setTotalPages(getCountOfPages(totalShips, limit))
    })

    useEffect(() => {
        console.log(filter)
    }, [filter])
    //Для того, чтобы не пересчитывать по 10 раз количество страниц, вынес в отдельный useEffect
    useEffect(() => {
        requestCards_all()
    }, [])

    // На изменение страницы добываем новые данные
    useEffect(() => {
        requestCards()
    }, [page, limit])

    // При каждой смене страницы - добавляем оффсет для работы с api
    function nextPage(page){
        if(page >= totalPages){
            setPage(totalPages)
        }else{
            setOffset(offset+5)
            setPage(page+1)
        }
    }

    function prevPage(page){
        if(page <= 1){
            setPage(1)
        }else{
            setOffset(offset-5)
            setPage(page-1)
        }
    }

    return (        
        <div className='main'>
            <div className='main__block'>
                <div className='main__header'>SpaceX Ships</div>
                <div className='main__cards'>
                {/* На случай долгой загрузки данных выводим loader */}
                    {isCardLoading
                        ? <div style={{display: 'flex', justifyContent: 'center'}}><InfinitySpin color='#818698'/></div>
                        : <CardList cards={sortedAndSearchedCards}/>
                    }
                    {errorReqCard && <div>{errorReqCard}</div>}
                </div>
                <Pagination totalPages={totalPages} page={page} nextPage={nextPage} prevPage={prevPage}/>
            </div>
            <div className='main__filter'>
                <Filter filter={filter} setFilter={setFilter}/>
            </div>
        </div>
    )
}
