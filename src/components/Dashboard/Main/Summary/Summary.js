import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './Summary.scss'

let _ = require('lodash')

const Summary = props => {

    const [annaulPayment, setAnnaulPayment] = useState(0)///
    const [annaulIntRate, setAnnaulIntRate] = useState(0)///
    const [intOnlyPayment, setIntOnlyPayment] = useState(0)///
    const [totIntPaid, setTotIntPaid] = useState(0) ////
    const [totalRepaid, setTotalRepaid] = useState(0) ////
    const [montlyPayment, setMontlyPayment] = useState(0)///
    const [perIntRate, setPerIntRate] = useState(0)
    const [borrowed, setBorrowed] = useState(0)  ///
    const [regAmount, setRegAmount] = useState(0)///

    useEffect(() => {
        if (!_.isEmpty(props.calc)) {
            setAnnaulPayment(props.calc.Annaul_Payments)
            setAnnaulIntRate(props.calc.Annaul_interest_rate)
            setIntOnlyPayment(props.calc.Interest_only_Payment)
            setTotIntPaid(props.calc.Total_interest_Paid)
            setTotalRepaid(props.calc.Total_repaid)
            setMontlyPayment(props.calc.monthly_payment)
            setPerIntRate(props.calc.periodig_interest_rate)
            setBorrowed(props.calc.principal_borrowed)
            setRegAmount(props.calc.regular_payment_amount)
        }
    }, [])


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

                    </div>
                    <div>
                        <p>${borrowed}</p>
                        <p>${regAmount}</p>
                        <p>${annaulPayment}</p>
                        <p>${intOnlyPayment}</p>
                        <p>${montlyPayment}</p>
                    </div>
                </div>
                <div className='Summery-Results-1'>
                    <div>
                        <p>*Total Repaid:</p>
                        <p>*Total Interest Paid:</p>
                        <p>Annaul Interest Rate:</p>
                        <p>Periodig Interest Rate:</p>
                    </div>
                    <div>
                        <p>${totalRepaid}</p>
                        <p>${totIntPaid}</p>
                        <p>${annaulIntRate}</p>
                        <p>${perIntRate}</p>
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