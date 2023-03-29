import React from 'react'
import classes from "./Searchinput.module.css"

export default function Searchinput(props) {
    return (
        <input className={classes.myInput} {...props}/>
    )
}