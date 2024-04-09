import React from "react";
import "./track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onadd(this.props.track);
  }

  removeTrack() {
    this.props.onremove(this.props.track);
  }

  renderAction() {
    if (this.props.isremoval) {
      return (
        <button className="Track-Action" onClick={this.removeTrack}>
          {" "}
          -{" "}
        </button>
      );
    }
    return (
      <button className="Track-Action" onClick={this.addTrack}>
        {" "}
        +{" "}
      </button>
    );
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-Information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} ({this.props.track.album})
          </p>
          <iframe
            src={`https://open.spotify.com/embed/track/${this.props.track.uri}`}
            width="300"
            height="80"
            allow="encrypted-media"
            title="preview"
          />
          {this.renderAction()}
        </div>
      </div>
    );
  }
}
 
export default Track;
