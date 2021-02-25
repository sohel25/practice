import React, { Component } from "react";
class Event extends Component {
    btnClick (){
        alert("hi");
    }
    render(){
        return(<>
            <p>Here is the button</p>
            <button onClick={this.btnClick}>Click Me</button>
        </>)
    }
}
export default Event;