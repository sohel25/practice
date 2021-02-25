import React, {Component} from "react";
class State extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"khan sahab",
            roll:this.props.roll
        }
    }
    changeClick = ()=>{
        this.setState({name:"sohel khan"});

    };
    
    render(){
        
        return (
            <>
            <h2>State practice Example</h2>
            <h2>==========================</h2>
            <h1>Hello {this.state.name}</h1>
            <h1>Hello {this.state.roll}</h1>
            <button onClick={this.changeClick}>Click here to change</button>
            </>

        )
    }
}
export default State;
// import React, { Component } from 'react';  
// class State extends React.Component {  
//  constructor() {  
//       super();        
//       this.state = { displayBio: false };  
//     //   console.log('Component this', this);  
//       this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
//       }  
//       toggleDisplayBio(){  
//           this.setState({displayBio: !this.state.displayBio});  
//           }  
//       render() {  
//           return (  
//               <div>  
//                   <h1>Welcome to JavaTpoint!!</h1>  
//                   {  
//                       this.state.displayBio ? (   
//                           <div>  
//                               <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
//                               <button onClick={this.toggleDisplayBio}> Show Less </button>  
//                         </div>  
//                           ) : (  
//                               <div>  
//                                   <button onClick={this.toggleDisplayBio}> Read More </button>  
//                               </div>  
//                           )  
//                   }  
//              </div>  
//         )  
//     }  
// }  
// export default State;  
