import React  from "react";
import { Employee } from "./Employee";


export const ListEmployees = ({employees}) => {
    
  return (
    <div>
      <h2>Lista</h2>
        <table>
          <thead>
          </thead>
          <tbody>
            {
              Object.values(employees).map(
                employee => {
                return (
                  <Employee key={employee.codigo} employee={employee}/>
                )})
            }
          </tbody>
        </table>
    </div>
  )
}


