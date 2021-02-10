import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'

import { Consumer } from './context/Context'

export default class Download extends Component {
    downloadBtn = (e) => {
        e.preventDefault();
    }
    render() {
        return createPortal(
            <Consumer>
                {value => (
                    <Fragment>
                        <h2 className="info__title">{value.videoItem[value.videoIdx].fileTitle}</h2>
                        <p className="info__text">{value.videoItem[value.videoIdx].fileText}</p>
                        <a className="info__link" onClick={() => {value.openForm('P', 0)}}>下載關鍵報告</a>
                    </Fragment>
                )}
            </Consumer>
            ,document.getElementById("download")
        )
    }
}
