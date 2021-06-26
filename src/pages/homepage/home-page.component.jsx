import React, { Component } from 'react'
import './home-page.styles.scss'
import { ReactComponent as StudySvg } from "../../assets/Study.svg";
import CustomButton from '../../components/custom-button/custom-button.component'
export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="homepage">
                <div className="component-1">
                    <div className="content">
                    <h1 className="title">Have Incomplete notes?</h1>
                        <h2 className="content-paragraph">Get Notes of 50+ chapters.
                        Built for students by students. Want to help others? You can do so by submitting your notes.</h2>
                    <CustomButton className="custom-btn-1" to="/find">Find Notes</CustomButton>
                    </div>
                    <StudySvg className="svg"></StudySvg>
                    
                </div>
            </div>

        )
    }
}
