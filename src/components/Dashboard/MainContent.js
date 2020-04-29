import React, { useEffect } from 'react';
import FirstCol from "./FirstCol";
import Main from "./Main";
import { connect } from 'react-redux'
import LastCol from "./LastCol";
import { getVideos } from '../../Action/Action';
import './MainContent.scss';

const MainContent = props => {

    useEffect(() => {
        props.get('https://gridfs-ando.herokuapp.com/videos')
    }, [])

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

const mapDispatchToProps = dispatch => {
    return {
        get: url => dispatch(getVideos(url)),
    }
}

export default connect(null, mapDispatchToProps)(MainContent)