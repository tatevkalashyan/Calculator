import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import Selling from "../../../images/salling.png"
import Selling1 from "../../../images/salling1.png"
import { connect } from 'react-redux'
import './LastCol.scss'

const LastCol = props => {
    const [url, setUrl] = useState(false)
    const [video, setVideo] = useState(null)
    const [int, setInt] = useState(null)

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
        return () => clearInterval(int)
    })

    useEffect(() => {
        if (props.videoUrl.length !== 0) {
            setUrl(true)
            setVideo(
                <video onEnded={ended} autoPlay muted>
                    <source src={props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)]} type="video/mp4" />
                </video>)
            setInt(setInterval(() => {
                setVideo(
                    <video onEnded={ended} autoPlay muted>
                        <source src={props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)]} type="video/mp4" />
                    </video>)
            }, 30000))
        } else {
            setVideo(null)
        }
    }, [props.videoUrl])

    return (
        <div className="LastCol">
            <div className='LastCol-Cont'>
                {url ?
                    video :
                    <>
                        <img src={Selling1} alt="salling" />
                        <img src={Selling} alt="salling" />
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

export default connect(mapStateToProps)(LastCol)