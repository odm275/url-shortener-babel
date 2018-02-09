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
    const target = 'https://url-shortener-babel.glitch.me/new/url';
    console.log(url);
    let url = this.refs.data.value;
    let data = {oldurl: url};
    console.log(data);
    fetch(target, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      headers: new Headers({
        'Content-Type': 'application/json'
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
        <h2> Minify Url!</h2>
        <form onSubmit={this.handleSubmit}>
        Minify Url:<br/>
        <input 
          type = "text" 
          ref ="data" 
          placeholder = "ex: www.mywebsiteisthebest.com"           
        />
        <button onClick={this.handleSubmit}>Send Data</button>
        </form>
      
      </div>
    );
  }
}

export default Form;
