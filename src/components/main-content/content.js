import React from 'react';
import FirstCol from "./first-col/col-first";
import MainCol from "./main-col/main-col";
import LastCol from "./last-col/col-last";

import './content.scss';

function MainContent() {
    return (
        <main className="main-content max-container">
            <div className="d-flex justify-content-between wrap">
                <FirstCol/>
                <MainCol/>
                <LastCol/>
            </div>
        </main>
    );
}

export default MainContent;