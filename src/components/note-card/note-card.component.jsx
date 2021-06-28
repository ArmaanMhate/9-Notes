import React from 'react'
import { Route, Link } from 'react-router-dom'

import "./note-card.styles.scss"
//You can maybe make it so that on clicking the element it takes you to the drive page!!!!
export default function NoteCard(props) {
    return (
        <Link to={{ pathname: `${props.link} ` }} target="_blank" className={`note-card ${props.className}`}>
            <span className="notes-chapter note-card-item"><h2>{props.chapter}</h2></span>
            <span className="notes-subject note-card-item"><h3>{props.subject}</h3></span>
            <span className="notes-author note-card-item">Submitted By:{props.author}</span>
        </Link>
    )
}
// <span className="notes-link"></span>