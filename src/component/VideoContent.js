import React, { Component, Fragment } from 'react'

import { createPortal } from 'react-dom'
import { Consumer } from './context/Context'

export default class VideoContent extends Component {
    render() {
        return createPortal(
            <Consumer>
                {value => (
                    <Fragment>
                        <h2 className="info__title">科技最 H.I.T. <br className="break"/>打破你的數位轉型迷思</h2>
                        <h3 className="info__video">{value.videoItem[value.videoIdx].title}</h3>
                        <p className="info__text">
                            <span>{value.videoItem[value.videoIdx].text}</span>
                            <span>{value.videoItem[value.videoIdx].subscribe}</span>
                        </p>
                    </Fragment>
                )}
            </Consumer>
            ,
            document.getElementById("video")
        )
    }
}
