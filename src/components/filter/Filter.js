import React, {useEffect, useState} from 'react'
import '../../static/css/filter.css'
import Dropmenu from '../../UI/dropMenu/Dropmenu'
import Searchinput from '../../UI/input/Searchinput'
import Radiomenu from '../../UI/radioMenu/Radiomenu'

export default function Filter({filter, setFilter}) {
    const [choisenArr, setChoisenArr] = useState([])

    useEffect(() => {
        setFilter({...filter, sortPort: choisenArr})
    }, [choisenArr])

    return (
        // при работе с фильтром - фильтруем список выдачи
        <div className='filter'>
            <div className='filter__block'>
                <div className='filter__content'>
                    <div className='filter__header'>Фильтры</div>
                    <div className='filter__name'>
                        <div className='filter__name_header'>Название</div>
                        <Searchinput value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} type='text'/>
                    </div>
                    <div className='filter__port'>
                        <div className='filter__port_header'>Порт</div>
                        <Dropmenu options={[
                            { value: 'Port Canaveral', name: 'Port Canaveral' },
                            { value: 'Port of Los Angeles', name: 'Port of Los Angeles' },
                            { value: 'Fort Lauderdale', name: 'Fort Lauderdale' }
                        ]} choisenArr={choisenArr} setChoisenArr={setChoisenArr}/>
                    </div>
                    <div className='filter__type'>
                        <div className='filter__type_header'>Тип</div>
                        <Radiomenu options={['Barge', 'Cargo', 'High Speed Craft', 'Tug']} onChange={typeSort => setFilter({...filter, sortType: typeSort})}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
