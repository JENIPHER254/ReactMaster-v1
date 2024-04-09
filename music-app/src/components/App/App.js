
import './App.css';

import React from 'react';
import Searchbar from "../searchbar/searchbar"
import SearchResults from "../SearchResults/searchresults"
import Playlist from "../Playlist/playlist"
import spotify from "../../util/Spotify"


class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      searchresults :[],
      playlistname: "playlist",
      playlisttracks: [],
  
    }
    //databinding
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updataPlaylistName = this.updataPlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }
  
  //search method
  search(term){
    spotify.search(term).then(searchresults =>{
      this.setState({searchresults: searchresults});
    })
  }
  //add track method
   addTrack(track){
   let tracks = this.state.playlisttracks;
   //if track is already saved
   if (tracks.find(savedTrack => savedTrack.id === track.id)){
    return;
   }
   tracks.push(track);
   this.setState({playlisttracks: tracks});
   }
   // the remove track function
   removeTrack(track){
    let tracks = this.state.playlisttracks;
    let tracksearch = this.state.searchresults;
    // poping out the selected track from the list
    tracks = tracks.filter(currenttrack => currenttrack.id !== track.id);
    tracksearch.unshift(track);
    this.setState({playlisttracks: tracks});
    
   }
   removeTrackSearch(track){
    let tracks = this.state.searchresults;
    tracks = tracks.filter(currenttrack => currenttrack.id === track.id);
    this.setState({searchresults:tracks});
   }
  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track)
  }
  updataPlaylistName(name){
    this.setState({updataPlaylistName: name}); 
  }
  savePlaylist(){
    const trackuris =this.state.playlisttracks.map(track => track.uri);
    spotify.savePlaylist(this.state.playlistname,trackuris).then(() =>{
      this.setSate({
        updataPlaylistName: "New Playlist",
        playlisttracks:[],

      });
    });
  }
render(){
  return (
    <div>
       <div className='App'>
         <Searchbar onSearch={this.search}/>
         <div className='App-playlist'>
            <SearchResults searchresults = {this.state.searchresults} onAdd = {this.doThese}/>
            <Playlist playlisttracks = {this.state.playlisttracks} onNameChange = {this.updataPlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylis}/>
         </div>
       </div>
    </div>
  )}
}

export default App;
