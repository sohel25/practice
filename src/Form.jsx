
import React, { Component } from 'react';  
class Form extends React.Component {  
  constructor(props) {  
      super(props);  
      this.state = {
          value: 'sohel',
           pass:''
    };  
      
    //   this.handleChange = this.handleChange.bind(this);  
    //   this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleName = (event) => {  
      this.setState({value: event.target.value});  
  }  
  handlepass = (event) => {  
    this.setState({pass: event.target.passs
    });  
}  
  handleSubmit = (event) => {  
      alert('You have submitted the input successfully: ' + this.state.value + this.state.pass);  
      event.preventDefault();  
  }  
  render() {  
      return (  

          <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <h2>================================</h2>
            <label>  
                Name:  
                <input type="text" value={this.state.value} onChange={this.handleName} />  
            </label>  
            <br/>
            <label>  
              password:
                <input type="password" value={this.state.pass} onChange={this.handlepass} />  
            </label> 
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default Form;  