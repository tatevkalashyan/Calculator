import React, { useState } from 'react';
import { FormGroup, Input } from '../../Form'
import { connect } from 'react-redux'
import { postCalc } from '../../../Action/Action';

const Form = props => {
    const [principal, setPrincipal] = useState('')
    const [rate, setRate] = useState('')
    const [balloon, setBalloon] = useState('')
    const [perYear, setPerYear] = useState('')
    const [regPayments, setRegPayments] = useState('')
    const [paymentsAmount, setPaymentsAmount] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        props.setIsClicked(true)
        const sendObj = {
            principal_amount: principal,
            annaul_interest_rate: rate,
            balloon_payment: balloon,
            number_of_regular_payments: regPayments,
            payment_amount: paymentsAmount,
            payments_per_year: perYear
        }

        props.postCalc('https://amorth-calc.herokuapp.com/', sendObj)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="d-flex justify-content-between">
                <div>
                    <FormGroup
                        label='Principal'
                        type='number'
                        placeholder='00.00'
                        id='Principal'
                        value={principal}
                        onChange={e => setPrincipal(e.target.value)}
                        required={true} />
                    <FormGroup
                        label='Annual Interest Rate'
                        type='number'
                        placeholder='00.00'
                        id='annual-rate'
                        value={rate}
                        onChange={e => setRate(e.target.value)}
                        required={true} />
                    <FormGroup
                        label='Balloon Payment'
                        type='number'
                        placeholder='00.00'
                        id='ball-pay'
                        value={balloon}
                        onChange={e => setBalloon(e.target.value)}
                        required={true} />
                </div>
                <div>
                    <FormGroup
                        label='Payments per Year'
                        type='number'
                        placeholder='00.00'
                        id='year-pay0'
                        value={perYear}
                        onChange={e => setPerYear(e.target.value)}
                        required={true} />
                    <FormGroup
                        label='Number of Regular Payments'
                        type='number'
                        placeholder='00.00'
                        id='reg-pay'
                        value={regPayments}
                        onChange={e => setRegPayments(e.target.value)}
                        required={true} />
                    <FormGroup
                        label='Payments Amount'
                        type='number'
                        placeholder='00.00'
                        id='year-pay'
                        value={paymentsAmount}
                        onChange={e => setPaymentsAmount(e.target.value)}
                        required={true} />
                </div>
            </div>
            <Input
                type='submit'
                value='CALCULATE'
                className='submit' />
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        postCalc: (url, body) => dispatch(postCalc(url, body)),
    }
}

export default connect(null, mapDispatchToProps)(Form)