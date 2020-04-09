import React from 'react';
import Stream from "../../../images/stream.png"
import StreamDown from "../../../images/streamDown.png"
import './FirstCol.scss'

const FirstCol = () => {

    return (
        <div className="FirstCol">
            <div className="FirstCol-Cont">
                <img src={Stream} alt="stream" />
                <img src={StreamDown} alt="StreamDown" />
            </div>
        </div>
    );
}

export default FirstCol;