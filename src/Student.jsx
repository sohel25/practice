import React, { Component } from "react";

class Student extends Component{
    render(){
        return(
        <>
        <h2> demo for props</h2>
        <h2>====================</h2>

        <h1>Hello {this.props.name}</h1>
       <h1>Your Roll no. is  {this.props.roll}</h1>
       </>
        );
    }
}
export default Student;