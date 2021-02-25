import React, { Component } from "react";
class Ref extends Component {
    constructor(props){
        super(props);
        this.state ={
            value:""
        };
        this.textInput = React.createRef();
    }
    // componentDidMount(){
    //     this.textInput.current.focus();
    // }
    handleSubmit = e => {
        e.preventDefault();
       this.setState({value :this.textInput.current.value});
    };
    render()
    {
        return (
            <>
            <h2>Uncontrolled form Example</h2>
            <h2>=================================</h2>
            <h2>You typed:{this.state.value}</h2>
            <form onSubmit={this.handleSubmit}>
                Name: <input type="text" ref={this.textInput} />
                <br/>
                {/* password: <input type="text"  />
                <br/>
                Address<input type="text" />
                <br/> */}
                <input type="submit" value ="submit"/>

            </form>
            </>
        );
    }
}
export default Ref;