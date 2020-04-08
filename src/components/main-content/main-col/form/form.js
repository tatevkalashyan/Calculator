import React from 'react';

function Form() {
    return (
        <form className="form">
            <div className="d-flex justify-content-between">
                <div>
                    <div className="form-group">
                        <label htmlFor="Principal">Principal</label>
                        <input type="number" placeholder="00.00" id="Principal"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="annual-rate">Annual Interest Rate</label>
                        <input type="number" placeholder="00.00" id="annual-rate"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ball-pay">Balloon Payment</label>
                        <input type="number" placeholder="00.00" id="ball-pay"/>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="year-pay0">Payments per Year</label>
                        <input type="number" placeholder="00.00" id="year-pay0"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-pay">Number of Regular Payments</label>
                        <input type="number" placeholder="00.00" id="reg-pay"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year-pay">Payments per Year</label>
                        <input type="number" placeholder="00.00" id="year-pay"/>
                    </div>
                </div>
            </div>
            <button>CALCULATE</button>
        </form>
    );
}

export default Form;