import React from 'react';
import PdfLogo from '../../../images/pdf-logo.png'
import Share from '../../../images/noun_Share.png'
import Form from './Form'
import whatsapp from '../../../images/whatsapp.svg'
import fb from '../../../images/fb.svg'
import twitter from '../../../images/twitter.svg'
import mail from '../../../images/mail.svg'
import copy from '../../../images/copy.svg'
import './Main.scss'

// flex-1 main-col
const Main = () => {
    return (
        <div className="Main flex-1 main-col">
            <div className="main-col--header">
                <h2>Amortization Calculator</h2>
                <p>Almost any data field on this form may be calculated. Enter the appropriate numbers in each slot,
                    leaving blank (or zero) the value that you wish to determine, and then click "Calculate" to update the page.</p>
                <p className="d-flex align-items-center">This page can be forwarded or printed.<img src={PdfLogo} alt="pdfLogo" /></p>
            </div>
            <Form />
            <div className="info-share">
                <p>This loan calculator is written and maintained by Nathan S. Williams.</p>
                <p>Share this page.<img src={Share} alt="share" /></p>
            </div>
            <div className='Main-Icons'>
                <p>Share this</p>
                <div>
                    <img src={whatsapp} alt='' />
                    <img src={fb} alt='' />
                    <img src={twitter} alt='' />
                    <img src={mail} alt='' />
                    <img src={copy} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Main;