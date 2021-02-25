import React, { Component } from "react";
class Lifecycle extends Component {
    constructor (props){
        super(props);
        this.state = {
            roll : "163"

        };
    }
    static getDerivedStateFromProps(props,state){
        console.log(props,state);
        return null;
    }
    componentDidMount(){
        //get data from server and set the data to state 

        console.log("component is mounted a");
    }
    componentWillUnmount(){
        console.log("component Unmounted");
    }
    render(){
        return (
            <>

            </>
            

        );
    }
}
export default Lifecycle;