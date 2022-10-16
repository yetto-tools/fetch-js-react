import { useState, useEffect } from 'react'

import './App.css'
import {fetchData, fetchJson, getKey} from './config/conection'
import {ListPokemons} from './components/ListPokemons'



function Testing() {
  const [p, setEmployees] = useState([])
  const [ready, setReady] = useState(false)
  const [array, setArray] = useState([])
  const url = 'https://pokeapi.co/api/v2/'
  const params = 'pokemon/?offset=100&limit=20'

 const urlEmplyee = 'http://10.34.1.43:5000/api/v2/empleado?'
 const paramsEmployee = '?offset=1&next=50'
  useEffect(()=>{
    console.log("useEffect ")
    setTimeout(()=>{
      console.log("Start Fetch")
      fetchJson(urlEmplyee+paramsEmployee)
      .then(data =>setEmployees(data))
      setReady(true)
    }, 2500)
  },[])



  return (
    <div className="testing">
      <div>testing api</div>
      <div className="card">
          <ListPokemons key={getKey()} data={data} setData={setData} array={array} setArray={setArray}  />
      </div>
    </div>
  )
}

export default Testing
