import React from 'react'

export default function Filter() {
    return (
        // при работе с фильтром - фильтруем список выдачи
        // Для начала пагинация
        <div className='filter'>
            <div className='filter__block'>
                <div className='filter__header'>Фильтры</div>
                <div className='filter__name'>
                    <div className='filter__name_header'>Название</div>
                    {/* элемент в который вложим список вариантов */}
                </div>
                <div className='filter__port'>
                    <div className='filter__port_header'>Порт</div>
                    {/* элемент в который вложим список вариантов */}
                </div>
                <div className='filter__type'>
                    <div className='filter__type_header'>Тип</div>
                    {/* элемент в который вложим список вариантов */}
                </div>
            </div>
        </div>
    )
}
