import React from 'react';
import Selling from "../../../images/salling.png"
import Selling1 from "../../../images/salling1.png"


function LastCol() {
    return (
        <div className="d-flex flex-column">
            <img src={Selling1} alt="salling" width="335"  className="mb--60"/>
            <img src={Selling} alt="salling" width="335" />
        </div>
    );
}

export default LastCol;