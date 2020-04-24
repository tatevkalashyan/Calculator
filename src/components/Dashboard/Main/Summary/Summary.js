import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './Summary.scss'

let _ = require('lodash')

const Summary = props => {

    useEffect(() => {
        if (!_.isEmpty(props.calc)) {
            setBorrowed(props.calc.principal_borrowed)
            setRegAmount(props.calc.regular_payment_amount)
            setAnnaulPayment(props.calc.Annaul_Payments)
            setIntOnlyPayment(props.calc.periodig_interest_rate)
            setMontlyPayment(props.calc.Montly_Payment)
            setTotalRepaid(props.calc.total_repaid)
            setTotIntPaid(props.calc.Total_Interest_Paid)
        }
    }, [])

    const [borrowed, setBorrowed] = useState(0)
    const [regAmount, setRegAmount] = useState(0)
    const [annaulPayment, setAnnaulPayment] = useState(0)
    const [intOnlyPayment, setIntOnlyPayment] = useState(0)
    const [montlyPayment, setMontlyPayment] = useState(0)
    const [totalRepaid, setTotalRepaid] = useState(0)
    const [totIntPaid, setTotIntPaid] = useState(0)

    return (
        <div className='Summery info-share'>
            <h1>Summery</h1>
            <div className='Summery-Results'>
                <div className='Summery-Results-1'>
                    <div>
                        <p>Principal borrowed:</p>
                        <p>Regular Payment amount:</p>
                        <p>Annaul Payments:</p>
                        <p>Interest-only payment:</p>
                        <p>Montly Payments</p>
                        <p>*Total Repaid:</p>
                        <p>*Total Interest Paid:</p>
                    </div>
                    <div>
                        <p>${borrowed}</p>
                        <p>${regAmount}</p>
                        <p>${annaulPayment}</p>
                        <p>${intOnlyPayment}</p>
                        <p>${montlyPayment}</p>
                        <p>${totalRepaid}</p>
                        <p>${totIntPaid}</p>
                    </div>
                </div>
                <div className='Summery-Results-1'>
                    <div>
                        <p>Principal borrowed:</p>
                        <p>Regular Payment amount:</p>
                        <p>Annaul Payments:</p>
                        <p>Interest-only payment:</p>
                        <p>Montly Payments</p>
                        <p>*Total Repaid:</p>
                        <p>*Total Interest Paid:</p>
                    </div>
                    <div>
                        <p>${borrowed}</p>
                        <p>${regAmount}</p>
                        <p>${annaulPayment}</p>
                        <p>${intOnlyPayment}</p>
                        <p>${montlyPayment}</p>
                        <p>${totalRepaid}</p>
                        <p>${totIntPaid}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        calc: state.calcReducer.calc
    }
}

export default connect(mapStateToProps)(Summary)