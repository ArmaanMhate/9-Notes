import React,{Component} from 'react'
import './searchbar.styles.scss'
export default class SearchBar extends Component{
    constructor(){
        super()
        
    }
    render(){
        console.log(this.props)
        return (
        <div className={`${this.props.className}`}>
            <input onChange={this.props.onSearchChange} type="text" id="search-bar" placeholder="Search for notes."/>
        </div>
        )
    }
    
}

