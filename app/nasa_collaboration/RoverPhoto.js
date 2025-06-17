import React from 'react';
import styles from './page.module.css'

export default function RoverPhoto( {src, date, roverName} ){
    const source = src;
    const earthDate = date;
    const name = roverName;
    console.log(source)
    return (
        <>
        <p>Date: {earthDate}</p>
        <p>{name}</p>
        <img className={styles.nasaPicOfTheDayImg} src={source} alt={name}></img>
        </>
    )
}