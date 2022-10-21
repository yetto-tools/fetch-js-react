import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function ListCombo({itemList,setReturnSelected, displayName, label}) {
  
  const [selected, setSelected] = useState([{}])
  useEffect(()=>{
    setReturnSelected(selected)
  },[selected])
  return (
    
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Label className='text-stone-600 font-medium text-sm'>{label}</Listbox.Label>
          <Listbox.Button className="relative h-9 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md border border-stone-300 focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected[displayName]}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              {/* <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
            </span>
          </Listbox.Button>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            className="absolute right-0 w-auto origin-top-right rounded-md shadow-lg z-10"
          >
            <Listbox.Options className="mt-1 h-48 max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">            
              {itemList[0] && itemList.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `capitalize relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => ( 
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        { item[displayName] }
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                    
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export const ListComboGeneric = () => {
  
  return (
    <>
      <div className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg z-10">
        <div className="bg-white rounded-md shadow-xs">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="https://github.com/tailwindlabs/tailwindui-react" rel="noopener noreferrer" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">GitHub</a>
            <a href="https://www.npmjs.com/package/@tailwindui/react" rel="noopener noreferrer" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">NPM</a>
          </div>
        </div>
      </div>
    </>
  )
}
