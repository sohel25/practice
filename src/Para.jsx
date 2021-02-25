import React from "react";


const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
function Para(){
    const name = "sohel khan";
const lname = "sohel khan";
    return( 
        <>
        <h2>template string </h2>
        <h2>======================</h2>
        <p>My name is {name}{lname}</p>
    <p>Additio of numbefr is {2*4}</p>
    <p>Today Date is {currentDate}</p>
    <p>Time  is{currentTime} </p>
    </>
    );
}
export default Para;