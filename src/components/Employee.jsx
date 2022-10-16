import React  from "react";
import {FcPicture} from "react-icons/fc";
import {fromStringToDateLocalString} from '../utilities/tools'

export const Employee = ({employee}) => {
  //const ingreso = fromStringToDateLocalString(employee.fecha_ingreso,{ year: 'numeric', month: '2-digit', day: '2-digit'})
  // const egreso = employee.fecha_egreso != 'None' ? fromStringToDateLocalString(employee.fecha_egreso, { year: 'numeric', month: '2-digit', day: '2-digit'})  : '--'  
  const thumbnial = !employee.foto ? ( <img width={24} src={ 'data:image/jpeg;base64,' + employee.foto} />) : <FcPicture/>
  const ingreso = employee.fechaIngresoStr
  const egreso = employee.fechaEgresoStr
  return (

        <tr key={employee.codigo}>
        <td>{employee.codigo}</td>
        <td>{employee.nombre_completo}</td>
        <td>{employee.puesto}</td>
        <td>{employee.area}</td>
        <td>{employee.seccion}</td>
        <td>{employee.jornada}</td>
        <td>{ingreso}</td>
        <td>{egreso}</td>
        <td>{thumbnial}</td>
      </tr>
    )
}


