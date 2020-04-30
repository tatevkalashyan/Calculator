import React, {
    useState,
    useEffect
} from 'react';
import Stream from "../../../images/stream.png"
import StreamDown from "../../../images/streamDown.png"
import { connect } from 'react-redux'
import './FirstCol.scss'

const FirstCol = props => {

    const [url, setUrl] = useState(false)
    const [video, setVideo] = useState(null)

    const ended = () => {
        setVideo(null)
        setUrl(false)
    }

    useEffect(() => {
        if (!url && props.videoUrl.length !== 0) {
            setVideo(
                <video onEnded={ended} autoPlay muted>
                    <source src={props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)]} type="video/mp4" />
                </video>)
            setUrl(true)
        }
    }, [url])

    useEffect(() => {
        if (props.videoUrl.length !== 0) {
            setUrl(true)
            setVideo(
                <video onEnded={ended} autoPlay muted>
                    <source src={props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)]} type="video/mp4" />
                </video>)
        }
    }, [props.videoUrl])

    return (
        <div className="FirstCol">
            <div className="FirstCol-Cont">
                {url ?
                    video :
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