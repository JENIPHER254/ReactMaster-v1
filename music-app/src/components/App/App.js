import logo from './logo.svg';
import './App.css';
import playlist from '../playlist/playlist';
import searchbar from "../searchbar/searchbar";
import searchresults from "../searchresults/searchresults";
import spotify from "../utils/spotify";

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
  savePlaylis(t){
    const trrackurls =this.state.playlisttracks.map(track => track.url);
    spotify.savePlaylis(this.state,playlistname,trrackurls).then(() =>{
      this.setDate({
        updataPlaylistName: "New Playlist",
        playlisttracks:[],

      });
    });
  }
}

function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
