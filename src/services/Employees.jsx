import { urlBase } from "./conection"
const urlEmployee = '/employees'

// export const getAllEmployees = () =>{
//     return fetch(urlBase+urlEmployee)
//         .then(res=> res.json())
// }
export const getAllEmployees = await fetch(urlBase+urlEmployee)
    .then(res => res.json())
       .then(data => {return data})
