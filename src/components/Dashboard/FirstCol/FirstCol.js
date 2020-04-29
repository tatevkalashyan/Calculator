import React, {
    useState,
    useEffect
} from 'react';
import Stream from "../../../images/stream.png"
import StreamDown from "../../../images/streamDown.png"
import { connect } from 'react-redux'
import './FirstCol.scss'

const FirstCol = props => {

    const [url, setUrl] = useState('')

    useEffect(() => {
        if (props.videoUrl.length !== 0) {
            setUrl(props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)])
        }
    }, [props.videoUrl])

    return (
        <div className="FirstCol">
            <div className="FirstCol-Cont">
                {url !== '' ?
                    // width="320" height="240"
                    <video controls>
                        <source onEnded={() => setUrl(props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)])} src={url} type="video/mp4" />
                    </video> :
                    <>
                        <img src={Stream} alt="stream" />
                        <img src={StreamDown} alt="StreamDown" />
                    </>}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        videoUrl: state.videoReducer.videos
    }
}

export default connect(mapStateToProps)(FirstCol)