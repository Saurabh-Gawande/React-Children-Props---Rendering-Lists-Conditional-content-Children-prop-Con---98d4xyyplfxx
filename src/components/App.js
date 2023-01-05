import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  const [change, setChange] = useState(0)
  // const [square, setSquare] = useState(0)
 function click(event){
    setChange (event.target.value);
    // setSquare(change*change);
 }

  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={click} />
    
      <p id='output'>{change*change}</p>
    </div>
  )
}


export default App;
