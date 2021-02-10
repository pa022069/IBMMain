import React, { Fragment, useState } from 'react';
import YouTube from 'react-youtube';
import { createPortal } from 'react-dom';

const NewYear = () => {
    const [state, setState] = useState({
        videoIdx: 0,
        videoId: [
            {
                id: 'hdQmMLXnz9A',
                text: 'IT專屬年前福袋大放送'
            },
            {
                id: '',
                text: '無痛年後收心組合'
            }
        ]
    });
    const opts = {
        playerVars: {
            autoplay: 0,
            controls: 1,
            playsinline: 1
        },
    };

    const changeVideo = (_e) => {
        setState({
            ...state,
            videoIdx: _e
        })
    }

    const _onReady = (event) => {
        console.log("Ready!")
    }

    const _onPlay = (event) => {
    }

    return createPortal(
        <Fragment>
            <div className="newyear__info">
                <h2 className="info__title">IBM 助攻天團上線送好禮</h2>
                <p className="info__text">還在煩惱年前籌備與年後策略規劃嗎？<br />H.I.T.顧問團分享神助攻方案，讓2021 IT 人開季順利！</p>
            </div>
            <div className="newyear__content">
                <div className="change">
                    {state.videoId.map((item, idx) =>
                        <a key={item.id} className={state.videoIdx === idx ? 'change--active' : ''} onClick={() => changeVideo(idx)}>{item.text}</a>
                    )}
                    {/* <a className={state.videoIdx === 0 ? 'change--active' : ''} onClick={() => changeVideo(0)}>IT專屬年前福袋大放送</a>
                    <a className={state.videoIdx === 1 ? 'change--active' : ''} onClick={() => changeVideo(1)}>無痛年後收心組合</a> */}
                </div>
                <div className="change__video">
                    {state.videoId[state.videoIdx].id !== '' ?
                        <YouTube id="videoPlayer1" videoId={state.videoId[state.videoIdx].id} opts={opts} onPlay={_onPlay} onReady={_onReady} />
                        :
                        <div className="coming" id="videoPlayer1"></div>
                    }


                    {/* <iframe src="https://www.youtube.com/embed/0d4nLXIansU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe> */}
                </div>
                <div className="change__sub">
                    <p></p>
                    <a>
                        <span></span>
                    </a>
                </div>
            </div>
        </Fragment>,
        document.getElementById("newyear")
    );
}

export default NewYear;