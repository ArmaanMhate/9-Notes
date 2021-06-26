import React, { Component } from 'react'
import {ALL_NOTES} from '../../assets/ALL_NOTES'
export default class FindNotesPage extends Component {
    constructor(){
        super()
        this.state={
            currentQuery:'',
            subject:'',
            tags:[],
            notes:ALL_NOTES
        }   
    }
    //  MAKE SEARCH BAR SEARCH OPTIONS AND SEARCH HEADER THEIR OWN COMPONENTS
    render() {
        console.log(ALL_NOTES)
        return (
            <div className="find-notes-page">
                <div className="search">
                SEARCH
                    <div className="searchbar">
                    SEARCHBAR
                    </div>
                    <div className="search-options">
                    SEARCH OPT.
                    </div>
                </div>
            </div>
        )
    }
}
