// import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { dataFetching } from './redux/action'
import './App.css'

function App() {

  const data = useSelector((store)=> store.data)
  // console.log()
  const dispatch = useDispatch();

  const getData = ()=>{
    dispatch(dataFetching());
  }
  

  return (
    <div>
    <button style={{margin:"30px",border:"1px solid black"}}onClick={getData}>Get Data</button>

    {data.map((ele,index)=>{
      return (
        <div style={{borderBottom:"2px solid white",width:"80vw"}} key={index}>
          <h3>{ele.name}</h3>
          <h5>{ele.email}</h5>
        </div>
      )
    })}
    </div>
  )
}

export default App