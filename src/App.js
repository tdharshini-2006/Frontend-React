import logo from './logo.svg';
import './App.css';
import Student from './components/Student'
import Marks from './components/marks';
import Countuse from './components/Countuse';
import Hide from './components/Hide';
import Theme from './components/Theme';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Cart1 from './components/Cart1';
import Rating from './components/Rating';
import NumberGame from './components/NumberGame';
import Vote from './components/Vote';
import Reverse from './components/Reverse';
import Countchange from './effect/Countchange';
import Digclock from './effect/Digclock';
import Mousemove from './effect/Mousemove';
import Fetch from './effect/Fetch';
import Fetch2 from './effect/Fetch2';


function Student1(props){
  return(
    <>
    <h2>Name: {props.name} </h2>
    <h2>Age: {props.age} </h2>
    <h2>College: {props.college} </h2>
    </>
  )
}
function Student2({name,mark,result}){
  return(
    <>
    <h2>Student Details</h2>
    <h3>Name: {name} </h3>
    <h3>Mark: {mark} </h3>
    {mark >= 35 ? <h3>Result: PASS</h3> : <h3>Result: FAIL</h3>}
    </>
  )
}
function Employee(props){
  return(
    <>
    <h1> Employee1 Details</h1>
    <h3>Employee name: {props.name1}</h3>
    <h3>Employee id: {props.id1}</h3>
    <h3>Employee salary: {props.salary1}</h3>
    <h3>Employee experience: {props.exp1}</h3>

    <h1> Employee2 Details</h1>
    <h3>Employee name: {props.name2}</h3>
    <h3>Employee id: {props.id2}</h3>
    <h3>Employee salary: {props.salary2}</h3>
    <h3>Employee experience: {props.exp2}</h3>

    <h1> Employee3 Details</h1>
    <h3>Employee name: {props.name3}</h3>
    <h3>Employee id: {props.id3}</h3>
    <h3>Employee salary: {props.salary3}</h3>
    <h3>Employee experience: {props.exp3}</h3>
    </>
  )
}

function App() {
  return (
    <>
    <h1> Hellooo </h1>
    <Student/>
    <Student1 name="Dharshini" age="20" college="Sathyabama University"/>
    <Student2 name="Raja raja cholan" mark="40"/>
    <Employee name1="AAA" id1="123" salary1="70,000" exp1="4 years"
             name2="BBB" id2="456" salary2="60,000" exp2="3 years"
             name3="CCC" id3="789" salary3="80,000" exp3="5 years" />

    <Countuse/>
    <Hide/>
    <Theme/>
    <Login/>
    <Quiz/>
    <Cart1/>
    <Rating/>
    <NumberGame/>
    <Vote/>
    <Reverse/>
    <Countchange/>
    <Digclock/>
    <Mousemove/>
    <Fetch/>
    <Fetch2/>
    </>
  );
}

export default App;
