import { urlBase } from "./conection"
const urlListCompanies = '/companies' 

// export const getAllCompanies = () =>{
//     return fetch(urlBase+urlListCompanies)
//         .then(res=> res.json())
//             .then(data => data)
// }

export const getAllCompanies = await fetch(urlBase+urlListCompanies)
    .then(res => res.json())
       .then(data => {return data})
