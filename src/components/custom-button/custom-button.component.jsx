import React from 'react'
import './custom-button.styles.scss'
import { Link } from 'react-router-dom'

import { Component } from 'react'

export default class CustomButton extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render() {
        console.log(this.props)
        return (
        <Link to={this.props.to} className={`animated-fill-button ${this.props.className}`}>{this.props.children}</Link>
        )
    }
}


// export const CustomButton = (children,to) => {
//     console.log(children.children)
//     return (
//     )
// }
