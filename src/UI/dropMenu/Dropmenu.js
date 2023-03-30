import React, { useState, useRef, useEffect } from 'react'
import '../../static/css/dropdown.css'

export default function Dropmenu({options, choisenArr, setChoisenArr}) {
    const [countChoice, setCountChoice] = useState(0)
    let filterArray = []

    function addOrRemoveOption(e){
        if(e.checked){
            setChoisenArr([...choisenArr, e.name])
            setCountChoice(countChoice + 1)
        }else{
            filterArray = choisenArr.filter((option) => option !== e.name)
            setChoisenArr(filterArray)
            setCountChoice(countChoice - 1)
        }
    }

    return (
        <div className='dropdown'>
            <div className='dropdown__input'>Выбрано {countChoice}</div>
            <div className='dropdown__menu'>
                {options.map(option =>
                    <div key={option.value} className='dropdown__option'>
                        <input type="checkbox" id={option.value} name={option.name} onChange={e => addOrRemoveOption(e.target)}/>
                        <label className='dropdown__name' htmlFor={option.value}>{option.name}</label>
                    </div>
                )}
            </div>
        </div>
    )
}
