import React  from "react";
import "./searchbar.css";

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term: "",

        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handleEnter = this.handleEnter.bind(this);

    }
    handleTermChange(term){
        this.setState({term: Event.AT_TARGET.valueOf})
    }
    search(){
        this.props=onSearch(this.state.term)
    }
    handleEnter(event){
        if(event.keycode === 13){
            this.search();
        }
    }
    render(){
        return (
        <div className="searchBar">
           <input placeholder="Enter song album or artist" onChange={this.handleTermChange} onKeyUp={this.handleEnter}/>
           <Button className="searchButton" onclick={this.search}></Button>
       </div>
    );
    
    }
}
export default Searchbar;