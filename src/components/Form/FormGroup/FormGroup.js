import React from 'react'
import classNames from 'classnames'
import './FormGroup.scss'

const FormGroup = props => {

    return (
        <section className={classNames('FormGroup', props.className)}>
            <label htmlFor="Principal">{props.label}</label>
            <input
                className={classNames('FormGroup-Input', props.classNameInp)}
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                onChange={e => props.onChange(e)} />
        </section>
    )
}

export default FormGroup

// Principal