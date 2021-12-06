import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'


function App() {
  const [a,seta]=useState(0)
  const [b,setb]=useState(0)
  const [c,setc]=useState(0)
  const handle=(a,b)=>{
    
  }
  const handlea=(e)=>{
    seta(e.target.value)
  }
  const handleb=(e)=>{
    setb(e.target.value)
  }
  const add=()=>{
    try{
      const p = parseInt(a)
      const j = parseInt(b)
      axios.get(
      'http://localhost:8300/add',{
      params:{
        a:a,
        b:b
      }
      }
      ).then(res=>{
        setc(res.data)
      })
    }
    catch(err){
      console.log('please enter')
    }
  }
  return (
    <div className="App">
      <input name="first" value={a} onChange={handlea} type="number"/>
      <input name="second" value={b} onChange={handleb} type="number"/>
      <button type="submit" onClick={add}>Add</button>
      {c}
    </div>
  );
}

export default App;
