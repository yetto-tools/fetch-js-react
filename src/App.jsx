import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {fetchData, fetchJson} from './config/conection'

import {ListPokemons} from './components/ListPokemons'

function App() {
  const [data, setData] = useState({})
  const [result, setResult] = useState(false)
  const [array, setArray] = useState([])
  const url = 'https://pokeapi.co/api/v2/'
  const params = 'pokemon/?offset=100&limit=20'
  useEffect(()=>{
    console.log("useEffect ")
    setTimeout(()=>{
      console.log("Start Fetch")
      fetchJson(url+params).then(data => setData(data))
      setResult(true)
    }, 0)
    
    
  },[])
  

  return (
    <div className="App">
      <div> </div>
      <h1>Poke Api</h1>
      <div className="card">
        <ListPokemons data={data} setData={setData} array={array} setArray={setArray}  />
        {
          console.log("end time out", data['results'])
        }
      </div>
    </div>
  )
}

export default App
