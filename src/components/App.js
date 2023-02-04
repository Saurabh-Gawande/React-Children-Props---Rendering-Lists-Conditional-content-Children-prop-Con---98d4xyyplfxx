import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  const [change, setChange] = useState(0)
  
 function click(event){
    setChange (event.target.value);
    
 }

  return (
    <div id="main">
       {/* <input id='input' onChange={click} /> */}
      <ChildComponent input={<input id='input' onChange={click} />}/> 
    
      <p id='output'>{change*change}</p>
    </div>
  )
}


export default App;
