import React, { Component } from 'react';


class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            value:props.value
        }
    }

    onChange(e){
        this.setState({value:e.target.value});
        this.props.onChange(this.state.value);
    }

  render() {
    return (
      <div >
           
               <input value={this.state.value} onChange={this.onChange.bind(this)}className="form-control mr-sm-2" placeholder="Search"  />
          
      </div>
    );
  }
}

export default Search;