import React from 'react';
import Selling from "../../../images/salling.png"
import Selling1 from "../../../images/salling1.png"
import './LastCol.scss'

const LastCol = () => {
    return (
        <div className="LastCol">
            <div className='LastCol-Cont'>
                <img src={Selling1} alt="salling" />
                <img src={Selling} alt="salling" />
            </div>
        </div>
    );
}

export default LastCol;