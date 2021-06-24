import React, { Component } from 'react'
import './header.styles.scss'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
export default class HeaderComponent extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div class="header">
                <Link to="/" className="logo">9 NOTES</Link>
                <div className="items">
                <Link to="/about" className={`about-us item-1 item `}>About Us</Link>
                <Link to="/find" className="about-us item-2 item">Get Notes</Link>
                <Link to="/submit" className="about-us item-3 item">Submit Notes</Link>
                <Link to="/contributers" className="about-us item-4 item">Contributers</Link>
                </div>
            </div>
        )
    }

}