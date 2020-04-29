import React, {
    useState,
    useEffect
} from 'react';
import Selling from "../../../images/salling.png"
import Selling1 from "../../../images/salling1.png"
import { connect } from 'react-redux'
import './LastCol.scss'

const LastCol = props => {
    const [url, setUrl] = useState('')

    useEffect(() => {
        if (props.videoUrl.length !== 0) {
            setUrl(props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)])
        }
    }, [props.videoUrl])
    return (
        <div className="LastCol">
            <div className='LastCol-Cont'>
                {url !== '' ?
                    // width="320" height="240"
                    <video width="320" height="240">
                        <source onEnded={() => setUrl(props.videoUrl[Math.floor(Math.random() * props.videoUrl.length)])} src={url} type="video/mp4" />
                    </video> :
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