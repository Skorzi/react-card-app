import React, { useState, useRef, useEffect } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import {grey} from '@mui/material/colors';
import '../../static/css/dropdown.css'
import { BsCheck } from 'react-icons/bs';

export default function Dropmenu({options}) {
    const [choisenArr, setChoisenArr] = useState([])
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

    useEffect(() => {
        console.log(choisenArr)
    }, [choisenArr])

    return (
        <div className='dropdown'>
            <div className='dropdown__input'>Выбрано {countChoice}</div>
            <div className='dropdown__menu'>
                {options.map(option =>
                    <div key={option.value} className='dropdown__option'>
                        <input type="checkbox" id={option.value} name={option.name} onChange={e => addOrRemoveOption(e.target)}/>
                        <label className='dropdown__name' for={option.value}>{option.name}</label>
                    </div>
                )}
            </div>
        </div>
    )
}
