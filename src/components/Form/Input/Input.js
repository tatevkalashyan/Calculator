import React from 'react'
import classNames from 'classnames'
import './Input.scss'

const Input = props => {

    return (
        <input
            className={classNames('Input', props.className)}
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            value={props.value}
            onChange={e => props.onChange(e)} />
    )
}

export default Input