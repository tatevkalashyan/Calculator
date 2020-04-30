import React, { useState } from 'react';
import PdfLogo from '../../../images/pdf-logo.png'
import Share from '../../../images/noun_Share.png'
import Form from './Form'
import Summary from './Summary'
import buttonIcon from '../../../images/buttonIcon.png'
import Table from './Table'
import { connect } from 'react-redux'
import whatsapp from '../../../images/whatsapp.svg'
import fb from '../../../images/fb.svg'
import twitter from '../../../images/twitter.svg'
import mail from '../../../images/mail.svg'
import copy from '../../../images/copy.svg'
import './Main.scss'

const Main = props => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [isHover, setIsOver] = useState(false)

    if (isClicked && props.isFetching) {
        return (<div className='Main flex-1 main-col'>Loading...</div>)
    }

    return (
        <div className="Main flex-1 main-col">
            <div className="Main-Title main-col--header">
                <h2>Amortization Calculator</h2>
                <p>Almost any data field on this form may be calculated. Enter the appropriate numbers in each slot,
                    leaving blank (or zero) the value that you wish to determine, and then click "Calculate" to update the page.</p>
                <div>
                    <p className="d-flex align-items-center">This page can be forwarded or printed.</p><img src={PdfLogo} alt="pdfLogo" />
                </div>
            </div>
            <Form setIsClicked={setIsClicked} />
            <div className="info-share">
                <p>This loan calculator is written and maintained by Nathan S. Williams.</p>
                <p>Share this page.<img onMouseLeave={() => setIsOver(false)} onMouseOver={() => setIsOver(true)} src={Share} alt="share" /></p>
            </div>
            {isHover &&
                <div className='Main-Icons'>
                    <p>Share this</p>
                    <div>
                        <img src={whatsapp} alt='' />
                        <img src={fb} alt='' />
                        <img src={twitter} alt='' />
                        <img src={mail} alt='' />
                        <img src={copy} alt='' />
                    </div>
                </div>}
            {isClicked && <Summary />}
            <p className='info-share'>*These results are estimates which do not
            account for accumulated error of payments being
                 rounded to the nearest cent.</p>
            <div className='Main-ShowBtn info-share'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={buttonIcon} alt='' /> Show Amortization Schedule
                </button>
            </div>
            {isOpen && <Table />}

        </div>
    );
}

const mapStateToProps = state => {
    return {
        isFetching: state.calcReducer.isFetching
    }
}

export default connect(mapStateToProps)(Main)