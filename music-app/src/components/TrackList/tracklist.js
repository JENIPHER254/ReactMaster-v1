import React from "react"
import "./tracklist.css"
import Track from "../Track/Track"

class TrackList extends React.Component{
    render(){
        return (
            <div className="TrackList">
                {this.props.tracks.map(track =>{
                    return (
                        <Track 
                        track={track}
                        key={track.id}
                        add={this.props.onAdd}
                        isRemoval={this.props.isremoval}
                        onRemove={this.props.onRemove}
                        />
                    );
                    })}
            </div>
        );
    }
}
export default TrackList;