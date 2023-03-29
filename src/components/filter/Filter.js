import React from 'react'
import '../../static/css/filter.css'
import Dropmenu from '../../UI/dropMenu/Dropmenu'
import Searchinput from '../../UI/input/Searchinput'

export default function Filter({filter, setFilter}) {
    return (
        // при работе с фильтром - фильтруем список выдачи
        <div className='filter'>
            <div className='filter__block'>
                <div className='filter__content'>
                    <div className='filter__header'>Фильтры</div>
                    <div className='filter__name'>
                        <div className='filter__name_header'>Название</div>
                        {/* <Myinput value={}/> */}
                    </div>
                    <div className='filter__port'>
                        <div className='filter__port_header'>Порт</div>
                        <Dropmenu options={[
                            { value: 'Port Canaveral', name: 'Port Canaveral' },
                            { value: 'Port of Los Angeles', name: 'Port of Los Angeles' },
                            { value: 'Fort Lauderdale', name: 'Fort Lauderdale' }
                        ]}/>
                    </div>
                    <div className='filter__type'>
                        <div className='filter__type_header'>Тип</div>
                        {/* элемент в который вложим список вариантов */}
                    </div>
                </div>
            </div>
        </div>
    )
}
