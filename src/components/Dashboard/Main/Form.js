import React, { useState } from 'react';
import { FormGroup, Input } from '../../Form'

const Form = () => {
    const [principal, setPrincipal] = useState('')
    const [rate, setRate] = useState('')
    const [balloon, setBalloon] = useState('')
    const [perYear, setPerYear] = useState('')
    const [regPayments, setRegPayments] = useState('')
    const [perYear1, setPerYear1] = useState('')

    return (
        <form className="form">
            <div className="d-flex justify-content-between">
                <div>
                    <FormGroup
                        label='Principal'
                        type='number'
                        placeholder='00.00'
                        id='Principal'
                        value={principal}
                        onChange={e => setPrincipal(e.target.value)} />
                    <FormGroup
                        label='Annual Interest Rate'
                        type='number'
                        placeholder='00.00'
                        id='annual-rate'
                        value={rate}
                        onChange={e => setRate(e.target.value)} />
                    <FormGroup
                        label='Balloon Payment'
                        type='number'
                        placeholder='00.00'
                        id='ball-pay'
                        value={balloon}
                        onChange={e => setBalloon(e.target.value)} />
                </div>
                <div>
                    <FormGroup
                        label='Payments per Year'
                        type='number'
                        placeholder='00.00'
                        id='year-pay0'
                        value={perYear}
                        onChange={e => setPerYear(e.target.value)} />
                    <FormGroup
                        label='Number of Regular Payments'
                        type='number'
                        placeholder='00.00'
                        id='reg-pay'
                        value={regPayments}
                        onChange={e => setRegPayments(e.target.value)} />
                    <FormGroup
                        label='Payments per Year'
                        type='number'
                        placeholder='00.00'
                        id='year-pay'
                        value={perYear1}
                        onChange={e => setPerYear1(e.target.value)} />
                </div>
            </div>
            <Input 
            type='submit' 
            value='CALCULATE'
            className='submit' />
        </form>
    );
}

export default Form;