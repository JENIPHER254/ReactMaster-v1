import React from "react"
import "./tracklist.css"
import TrackList from "../TrackList/tracklist";

class SearchResults extends React.Component{
    render(){
        return (
            <div className="SearchResults">
               <h2>Search results</h2>
               <TrackList Tracks={this.props.SearchResults} onAdd={this.props.add}/>
            </div>
        );
    }
}
export default SearchResults;