import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      data: {
        originalUrl:'', 
        newUrl:''
      },
      value:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    const target = 'https://url-shortener-babel.glitch.me/';
    let url = this.refs.data.value;
    let data = {url: url};
    console.log(data);
    fetch(target, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      headers: new Headers({
        'Content-Type': 'application/text'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  handleChange(e){
    this.setState({value:e.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello Form </h1>
        <form onSubmit={this.handleSubmit}>
        Minify Url:<br/>
        <input type = "text" ref ="data" placeholder = "ex: www.mywebsiteisthebest.com" onChange = {this.handleChange}/>
        <button onClick={this.handleSubmit}>Send Data</button>
        </form>
      
      </div>
    );
  }
}

export default Form;
