import React, { useState } from 'react'
import '../../static/css/radiomenu.css'
export default function Radiomenu({ options, onChange }) {
    return (
        <div className='radio'>
            <div className='radio__block'>
                <div className='radio__menu'>
                    {options.map(option =>
                        <div key={option} className='radio__option'>
                            <input type="radio" id={option} name='radio_type' 
                                value={option} onChange={event => onChange(event.target.value)}/>
                            <label className='radio__name' htmlFor={option}>{option}</label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
