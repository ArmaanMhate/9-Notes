import React,{Component} from 'react'
import './searchbar.styles.scss'
import {ReactComponent as SearchIcon} from '../../assets/search-solid.svg' 
export default class SearchBar extends Component{
    constructor(){
        super()
        
    }
    render(){
        console.log(this.props)
        return (
        <div className={`${this.props.className} search-bar`}>
        <SearchIcon className="search-icon"/>
        <input className="search-field" onChange={this.props.onSearchChange} type="text" id="" placeholder="Search for notes."/>
        </div>
        )
    }
    
}

