import React, { Component } from 'react'
import './header.styles.scss'
import {
    BrowserRouter as Router,
    // Route,
    // Switch,
    Link,
    NavLink
} from 'react-router-dom'
export default class HeaderComponent extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    //NavLink allows to conditionally render a class. https://reactrouter.com/web/api/NavLink
    render() {
        return (
            <div className="header">
                <Link to="/"className="logo">9 NOTES</Link>
                <div className="items">
                    <NavLink to="/contact" activeClassName="active"  className={`about-us item-1 item `}>Contact Us</NavLink>
                    <NavLink to="/find" activeClassName="active" className="about-us item-2 item">Get Notes</NavLink>
                    <NavLink to="/submit" activeClassName="active" className="about-us item-3 item">Submit Notes</NavLink>
                    <NavLink to="/contributers" activeClassName="active" className="about-us item-4 item">Contributers</NavLink>
                </div>
            </div>
        )
    }

}