import logo from './logo.svg';
import './App.css';
import Heading from "./Heading"
import Para from "./Para";
import Student from './Student';
import add,{sub,div,mul} from './Calc';
import State from "./State";
import Event from "./Event";
import Form from "./Form";
import Ref from "./Ref";
import Life from "./Lifecycle";

function App() {
  return (
    <>
    <Life/>
    <Ref/>
    <Form/>
    <Event/>
  <Heading name="sohel khan"/>
  <Para />
  <Student  name="sohel" roll="163"/>
  <State roll="101"/>
  
    <ul>
        <li>The Sum of two number is {add(40,50)}</li>
        <li>The subtraction  of two number is {sub(500,50)}</li>
        <li>The division of two number is {div(40,4)}</li>
        <li>The multiple of two number is {mul(4,5)}</li>

    </ul>
  
  </>
  );

}

export default App;
