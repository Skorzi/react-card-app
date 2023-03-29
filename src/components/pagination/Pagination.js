import React, { useEffect } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import '../../static/css/pagination.css'

export default function Pagination({totalPages, page, prevPage, nextPage}) {

    //Простенький блок с пагинацией  style={{color: 'white', backgroundColor: '#151619'}}
    return (
        <div className="pages">
            <div className='pages__block'>
                <button className='pages__left_arrow' onClick={() => prevPage(page)}><BsChevronLeft size={19}/></button>
                <div className='pages__num'>{page}</div>
                <button className='pages__right_arrow' onClick={() => nextPage(page)}><BsChevronRight size={19}/></button>
            </div>
        </div>
    )
}
