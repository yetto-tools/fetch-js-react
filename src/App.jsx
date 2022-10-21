import reactLogo from './assets/react.svg'
import { useState, useEffect, useTransition, startTransition } from 'react'

import './App.css'
import {Bars,ThreeDots} from 'react-loader-spinner'
import {propCapitalize, getKey, dynamicSortMultiple} from './utilities/tools'
import ListCombo, { ListComboGeneric } from './components/ListCombo'

import { getAllState } from './services/States'
import { getAllCompanies } from './services/Companies'
import { getAllEmployees } from './services/Employees'
import { SeachInput } from './components/SeachInput'

import {CropPicture} from './components/image-crop/index'
import { Transition } from '@headlessui/react'
import { CardEmployee } from './components/CardEmployee'
import SideBar from './components/SideBar'

function App() {
  const [statusEmployee, setStatusEmployee] = useState([])
  const [employees, setEmployees] = useState([])
  const [companies, setCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState([])
  const [selectedStatusEmployee, setSelectedStatusEmployee] = useState([])

  const [finding, startTransition] = useTransition()

  useEffect( () => {
    Promise.all([getAllState,getAllCompanies,getAllEmployees]).then(([state,companies,employee])=>{
      propCapitalize(state, 'description')
      setStatusEmployee(state)
      setCompanies(companies)
      employee.sort(dynamicSortMultiple('stateDescription',  'legalNameCompany' , 'fullNamePerson'))
      setEmployees(employee)
    }).catch(error => {
     console.log(error)
    })
  },[])
  
  const [result, setResult] = useState('')

  const handleFindEmployee  =  (event) =>{
    // setQuery(event.target.value)
    startTransition(()=>{
    console.log(event.target.value.match(/[\d]+/g))

    if(event.target.value.match(/[\d]+/g) == null ){
      const filteredPeople =  event.target.value == '' ? employees : employees.filter(
        (person) => person.fullNamePerson
        .replace(/\s+/g, ' ')
        .includes(event.target.value.toUpperCase().replace(/\s+/g, ' ')))
        setResult(filteredPeople)
    }
      else{
        const filteredPeople =  event.target.value == '' ? employees : employees.filter(
          (person) => person.codeEmployee
          .replace(/\w+([-])/g, '')
          .includes(event.target.value.toUpperCase().replace(/\w+([-])/g, '')))
          setResult(filteredPeople)
      }
    })
  }

  return (
    <div className="App bg-gradient-to-br from-orange-500/70 via-teal-400/75 to-indigo-500/70 h-screen">
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/60 supports-backdrop-blur:bg-white/60 dark:bg-transparent"> 
        <div className="max-w-8xl mx-auto border-slate-700">
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            -
          </div>
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center">-</div>
          </div>
        </div> 
      </div>
      <div className='flex mt-2'>
        <div className=''>
          <SideBar></SideBar>
        </div>
        <div className='w-full mx-2 rounded bg-opacity-50 blur-xs bg-white/50 backdrop-blur-lg
          border border-solid border-teal-50/50 border-opacity-50
        '>
              <div className='flex justify-center pb-5 
                border border-solid border-teal-50/50 border-opacity-50 shadow'>
                <div className='w-1/6'><SeachInput handlerEvent={handleFindEmployee}></SeachInput></div>
              </div>
              <div className='text h-96 overflow-auto'>
                <div className='mt-5'>
                { 
                result.length !==0 ?  result.map( (item,idIndex) =>  <CardEmployee item={item} key={idIndex}/>) :null
  

                  
                }    
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default App
