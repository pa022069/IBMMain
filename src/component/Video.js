import React, { useState, useEffect, Fragment } from 'react'
import YouTube from 'react-youtube';
import { createPortal } from 'react-dom'

import { Consumer } from './context/Context'

import $ from 'jquery'

const Video = (props) => {
    const [state, setState] = useState({
        finish: true,
    })

    useEffect(() => {
        $(".video__popup").hide();
    }, [])

    const _onReady = (event) => {
        console.log("Ready!")
    }
    const _onPlay = (event) => {
        if (!state.finish) return;
        setState({
            ...state,
            finish: false
        })
        setTimeout(() => {
            event.target.pauseVideo();
            $(".video__popup").fadeIn();
        }, 20000)
        $(document).on('click', '.submit', () => {
            if (!props.status) {
                event.target.playVideo();
            }
        })
    }

    const opts = {
        playerVars: {
            autoplay: 0,
            controls: 1,
            playsinline: 1
        },
    };
    return createPortal(
        <Consumer>
            {value => (
                <Fragment>
                    <div className="video__show">
                        <div className="video__popup">
                            <p>填寫資訊，立即獲得數位轉型關鍵</p>
                            <p>讓H.I.T.為您神助攻！協助您完成數位轉型最後一哩路！</p>
                            <a onClick={() => value.openForm("V", 0)}>獲取完整關鍵報告</a>
                        </div>
                        <YouTube id="videoPlayer" videoId={value.videoItem[value.videoIdx].id} opts={opts} onPlay={_onPlay} onReady={_onReady} />
                    </div>
                    <div className="video__nav">
                        <ul>
                            {value.videoItem.map((item, idx) =>
                                <li key={idx} className={item.state} onClick={() => { value.changeVideo(idx) }}
                                    style={{
                                        backgroundImage: `url(https://img.youtube.com/vi/${item.id}/default.jpg)`
                                    }}
                                >
                                    <div><p>{item.title}</p></div>
                                </li>
                            )}
                        </ul>
                    </div>
                </Fragment>
            )}
        </Consumer>
        , document.getElementById("youtube")
    )
}

export default Video;