import React from 'react';
import "./index.css";

const img = "https://picsum.photos/100/100";

function Heading(props){
    return (<>
    <h2>Demo </h2>
    <h2>==============================</h2>
     <h1 contentEditable="true">Hello Sohel khan</h1>
    <h1 className="h1">Hello {props.name}</h1> 
    <button className="btn btn-danger">Click me</button>

 <img src={img} alt="img" />
 </>
 );
 
}
export default Heading;