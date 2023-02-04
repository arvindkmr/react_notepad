import {useState} from 'react'
import './App.css';

function App() {
  const [name,setName] =useState('');
  const [age,setAge] =useState();
  const [task,setTask] =useState('');
  const [data,setData] =useState([{name:"abc",age:21,task:"testing"}]);
  
  const saveData = ()=>{
    setData(...data, {name:'name',age:age,task:'task'})
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="input1">
          <label htmlFor="Name">Name</label>
          <input type="text" className="input" value={name} onChange={(event)=> setName(event.target.value)}/>
        </div>
        <div className="input2">
          <label htmlFor="Age">Age</label>
          <input type="number" className="input" value={age} onChange={(event)=> setAge(event.target.value)}/>
        </div>
        <div className="input3">
          <label htmlFor="Age">Task </label>
          <input type="text" className="input" value={task} onChange={(event)=> setTask(event.target.value)}/>
        </div>
        <div className="savelist">
          <button className="save" onClick={saveData}>Save data</button>
        </div>
        <div className="display">
          <ul>
          {data.map((item )=>{
            {/* const {name}=item */}
            console.log(item)
            return <li>
              {item}
              abc
            </li>
          })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
