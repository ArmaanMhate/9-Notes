import React, { Component } from 'react'
import { ALL_NOTES } from '../../assets/ALL_NOTES'
import './find-notes-page.styles.scss'


import SearchBar from '../../components/search-bar/searchbar.component'
import NoteCard from '../../components/note-card/note-card.component'
export default class FindNotesPage extends Component {
    constructor() {
        super()
        this.state = {
            searchField: '',
            subject: '',
            tags: [],
            notes: ALL_NOTES,
            filteredNotes: []
        }

    }

    onSearchChange = (e) => {
        // console.log('Changed')
        this.setState({
            searchField: e.target.value
        }, () => {
            console.log(this.state.filteredNotes, this.state.notes[0].name, this.state.searchField)
        })
    }
    //  MAKE SEARCH BAR SEARCH OPTIONS AND SEARCH HEADER THEIR OWN COMPONENTS
    render() {
        const filteredNotes = this.state.notes.filter((notes) => {
            // return notes.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            if(notes.name.toLowerCase().includes(this.state.searchField.toLowerCase())|| notes.subject.toLowerCase().includes(this.state.searchField.toLowerCase())
            || notes.author.toLowerCase().includes(this.state.searchField.toLowerCase())){
                return notes
            }
        })
        console.log("filtered notes:",filteredNotes)
        return (
            <div className="find-notes-page">
                <div className="search">
                    <SearchBar onSearchChange={this.onSearchChange} className="searchbar" />
                </div>
                <br />
                <div className="notes-list">
                    {
                        filteredNotes.map(element => (
                            <NoteCard className="notes-card" chapter={element.name} subject={element.subject} author={element.author} link={element.notes} ></NoteCard>
                        )
                        )
                    }
                </div>
            </div>
        )
    }
}
