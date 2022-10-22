import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {FcSearch} from 'react-icons/fc'


export const SeachInput =({handlerEvent}) => {

  return (
    <>
      <label className={'text-stone-600 font-medium text-sm'}>Empleado</label>
      <div className="relative w-full cursor-default border border-stone-300 overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            {/* <svg className="w-5 h-5 text-gray-400" fill={"currentColor"} viewBox="0 0 20 20">
              <path fillRule={'evenodd'} clipRule={'evenodd'} d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg> */}
                <FcSearch></FcSearch>
          </div>
          <input type="search" id="search_field" autoComplete={'off'}
            className="block w-full h-full py-2 pl-8 pr-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm" 
            placeholder="Buscar" 
            autoFocus
            onChange={handlerEvent}

/>
        </div>
      </div>
    </>
  )
}




export function FindEmployee({employees:people, displayName}) {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')
  
  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
      person[displayName]
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')))
          

  return (
    <div className="">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Combobox.Label className={'text-stone-400 font-medium text-sm'}>Buscar Empleado</Combobox.Label>
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input 
              className="w-full outline-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person[displayName] }
              placeholder={'Escribar un Nombre'}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              { filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-red-700">
                  No se Encontro Ninguna Informacion.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.itemIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <span className='block'>
                        <span className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {<span class={`absolute inset-y-auto left-7 flex items-center pl-2 mr-1 mt-1 rounded-full h-2 w-2 bg-${
                          person['codigoEstado'] === 0 ? 'yellow' :
                          person['codigoEstado'] === 1 ? 'sky' :   
                          person['codigoEstado'] === 2 ? 'stone' :
                          person['codigoEstado'] === 3 ? 'orange' :
                          person['codigoEstado'] === 4 ? 'red' :
                          null
                        }-500`}></span>}
                          {person[displayName]}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-1 text-semibold ${
                              active ? 'text-white' : 'text-teal-600' }`}
                          >                    
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          
                        ) : null}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
