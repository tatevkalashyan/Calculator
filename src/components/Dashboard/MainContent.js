import React from 'react';
import FirstCol from "./FirstCol";
import Main from "./Main";
import LastCol from "./LastCol";

import './MainContent.scss';

const MainContent = () => {
    // d-flex justify-content-between wrap
    return (
        <main className="MainContent max-container">
            <div className="MainContent-Cont">
                <FirstCol />
                <Main />
                <LastCol />
            </div>
        </main>
    );
}

export default MainContent;