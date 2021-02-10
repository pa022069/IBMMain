import React, { Component } from 'react'

import { Consumer } from './context/Context'

export default class Item extends Component {
    render() {
        return (
            <ul>
                <li 
                    style={{                            
                        backgroundImage: `url(https://img.youtube.com/vi/${this.props.item[0]}}/default.jpg)`
                    }}
                ></li>
            </ul>
            ,
            document.getElementById("item")
        )
    }
}
