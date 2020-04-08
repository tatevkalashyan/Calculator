import React from 'react';
import Stream from "../../../images/stream.png"
import StreamDown from "../../../images/streamDown.png"

function FirstCol() {

    return (
        <div className="d-flex">
            <div className="d-flex flex-column">
                <img src={Stream} alt="stream" width="335" className="mb--48"/>
                <img src={StreamDown} alt="StreamDown" width="335" />
            </div>
        </div>
    );
}

export default FirstCol;