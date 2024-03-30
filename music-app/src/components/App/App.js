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
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
