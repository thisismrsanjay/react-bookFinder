import React, { Component } from 'react';
import Header from './Components/Header';
import Books from './Components/Books';
import Search from './Components/Search'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      text: 'harry potter'
    }
  }

  componentWillMount(){
    this.getBooks();
  }

  getBooks(){
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.state.text)
      .then((response)=>{
        this.setState({books:response.data.items},()=>{
          console.log(this.state);
        })
      })
      .catch((err)=>{console.log(err)})
  }

  handleChange(text){
    this.setState({text:text},this.getBooks())
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-12">
            <Search onChange={this.handleChange.bind(this)} value= {this.state.text} />
            <Books books={this.state.books}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
