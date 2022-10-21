import axios from "axios"
import { urlBase } from "./conection"
const urlListStatus = '/listStateEmployee' 

// export const getAllState  = async() => {
//  const response = await fetch(urlBase+urlListStatus)
//  const data = await response.json()
//  return data   
// }


export const getAllState =  await fetch(urlBase+urlListStatus)
        .then(res=> res.json())
           .then(data => {return data})
