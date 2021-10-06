import React from 'react'
import styles from './Input.module.css'

const Input = ({label, id, type}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input id={id} name={id} className={styles.input} type={type} />
            <p className={styles.error}>Erro</p>
        </div>
    )
}

export default Input
