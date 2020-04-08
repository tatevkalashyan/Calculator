import React from 'react';
import PdfLogo from '../../../images/pdf-logo.png'
import Share from '../../../images/noun_Share.png'
import Form from './form/form'

function MainCol() {
    return (
        <div className="flex-1 main-col">
            <div className="main-col--header">
                <h2>Amortization Calculator</h2>
                <p>Almost any data field on this form may be calculated. Enter the appropriate numbers in each slot,
                    leaving blank (or zero) the value that you wish to determine, and then click "Calculate" to update the page.</p>
                <p className="d-flex align-items-center">This page can be forwarded or printed.<img src={PdfLogo} alt="pdfLogo"/></p>
            </div>
            <Form/>
            <div className="info-share">
                <p>This loan calculator is written and maintained by Nathan S. Williams.</p>
                <p>Share this page.<img src={Share} alt="share"/></p>
            </div>
        </div>
    );
}

export default MainCol;