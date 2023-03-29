import React, { useState, useRef } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import {grey} from '@mui/material/colors';
import '../../static/css/dropdown.css'

export default function Dropmenu({options}) {
    const [choisenArr, setChoisenArr] = useState([])
    const [countChoice, setCountChoice] = useState(0)
    const ref = useRef(null)
    function qwerty(){
        console.log(ref.current)
    }
    //input type checkbox
    return (
        <div className='dropdown'>
            <div className='dropdown__input'>Выбрано {countChoice}</div>
            <div className='dropdown__menu'>
                {options.map(option =>
                    <div className='dropdown__option'>
                        <div ref={ref} key={option.value} className='dropdown__name'>{option.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
