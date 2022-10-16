import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Bars} from 'react-loader-spinner'
import {fetchData, fetchJson, Fetching,getKey} from './config/conection'

import {ListPokemons} from './components/ListPokemons'
import {ListEmployees} from './components/ListEmployees'
import FindEmployee from './components/FindEmployee'
import ListCompanies from './components/ListCombo'
import { Employee } from './components/Employee'
import {CropPicture} from './components/image-crop/index'
import ListCombo from './components/ListCombo'
import ListComboStatus from './components/ListComboStatus'

function App() {
  const [employees, setEmployees] = useState([])
  const [companies, setCompanies] = useState([])
  const [ready, setReady] = useState(false)
  const [array, setArray] = useState([])
  const [selectedCompany, setSelectedCompany] = useState([])
  const [selectedStatusEmployee, setSelectedStatusEmployee] = useState([])
  const [statusEmployee, setStatusEmployee] = useState([])
  
  const url = 'https://pokeapi.co/api/v2/'
  const params = 'pokemon/?offset=100&limit=20'
 
//  const urlEmplyee = 'http://localhost:51001/api/v2/empleado?'
//  const paramsEmployee = '?offset=1&next=50'

 const urlBase = 'http://localhost:51001'
 const urlParams = '/Empleado/GetListFillCombosConsulta'

 const urlEmployee = '/Empleado/BuscarEmpleados/?codigoEmpresa=-1&codigoArea=-1&codigoPuesto=-1&codigoEstado=1&btb=0&saldoPrestamo=0'

  useEffect(()=>{
      fetchJson(urlBase+urlParams).then(data => { 
        setStatusEmployee(data.listaEstadosEmpleado);
        setCompanies(data.listaEmpresas); 
      })

    fetchJson(urlBase+urlEmployee).then(data => { setEmployees(data)})
      setReady(true)
  },[])
  
  return (
    <div className="App">

      <div className="w-full">
        {/* 
          <ListPokemons key={getKey()} data={data} setData={setData} array={array} setArray={setArray}  /> 
        */}
        
        <div>
          
          {  
            employees.length == 0 ? (
              <>
                <Bars height="120" width="120" color="#3ec4d6" ariaLabel="bars-loading" wrapperStyle={{}} 
                  wrapperClass="" visible={true} 
                />
                <span className=''>Loading...</span>
              </>
              )
              
            : 
            <div className="" >
              {
                statusEmployee.length > 0  ? 
                  <div className='flex w-full mt-10'>
                    <div className='mx-auto w-1/4'>
                    <FindEmployee 
                        employees={employees} 
                        setEmployees={setEmployees}
                        displayName={'nombreCompleto'}
                      />

                    </div>
                    <div className='mx-auto w-1/4'>
                      <ListCombo 
                        itemList={companies} 
                        setReturnSelected={setSelectedCompany} 
                        displayName={'nombreComercial'} 
                      />
                    </div>
                    <div className='w-1/4 mx-auto'>
                      <ListCombo  itemList={statusEmployee} 
                        setReturnSelected={setSelectedStatusEmployee} 
                        displayName={'estadoEmpleado'} 
                        />
                    </div>
                  </div> 
                : null
              }
              {/* {
                companies.length !==0  ? 
                  <div className='w-1/2 top-16'>
                    <ListCombo key={1} itemList={companies} setReturnSelected={setSelectedCompany} displayName={'nombreComercial'} />
                  </div> 
                : null
              } */}
         
              {/* <div className='w-1/2 mx-auto px-5'><FindEmployee employees={employees} /> </div> */}
            </div>
            // <div className="fade-in">
            //   <ListEmployees employees={employees} setEmployees={setEmployees} 
            //     array={array} setArray={setArray} 
            //   >
            //   </ListEmployees>
            // </div>
          }
          
          
          {/* <ImageCrop></ImageCrop> */}

          {/* <CropPicture></CropPicture> */}
        </div>
      </div>
    </div>
  )
}

export default App
