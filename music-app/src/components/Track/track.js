import React  from "react";
import "./searchbar.css";

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term: "",

        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    
    }
    addTrack(event){
        this.props.onadd(this.props.track)
    }
    removeTrack(){
        this.props.onremove(this.props.track)
    }
  
    renderAction(){
        if (this.props.isremoval){
            return (
                <button className="Track-Action" onclick={this.removeTrack}> - </button>
            );
        }
        return(
            <button className="Track-Action" onclick={this.addTrack}> + </button>
        )
    }
    render(){
        return (
        <div className="Track">
          <div className="Track-Information">
             <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} ({this.props.track.album})</p>
            <iframe
                src={"https://open.spotify.com/embeded/tracks/"+ this.props.track.id}
                width="300"
                height="80"
                allow="encrypted-media"
                title= "preview"
            />
            {this.renderAction()}
          </div>
       </div>
    );
    
    }
}
export default Searchbar;