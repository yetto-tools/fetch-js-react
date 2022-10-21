import React from "react"

export const CardEmployee = ({item}) => {
    return (
    <div className='text-center text-normal text-stone-800 my-3 '>
      <div className='bg-opacity-70 blur-xs bg-white/60 border border-stone-200 shadow rounded-md p-4  w-3/4 mx-auto'>
        <div className='flex cursor-pointer'>
            <div className=''>
              <div className={`rounded-full h-24 w-24 border ${
                item.codigoEstado == 0 ? 'border-yellow-500' :
                item.codigoEstado == 1 ? 'border-green-500'  :
                item.codigoEstado == 2 ? 'border-stone-500'  :
                item.codigoEstado == 3 ? 'border-orange-500' :
                item.codigoEstado == 4 ? 'border-red-500'    : 'text-black'}`}
              >
                <div className='container bg-yellow-400 opacity-20'><img src={''} width={24} height={42}/></div>
              </div>
              <div className=''>
                <span className='font-semibold text-sm text-gray-800'>{item.codeEmployee}</span>
              </div>
              <div className='flex justify-center'>
                <div className={`flex h-1/2 font-bold text-[10px] rounded-md  ${
                item.codeState == 0 ? 'text-yellow-500' :
                item.codeState == 1 ? 'text-green-500' :
                item.codeState == 2 ? 'text-red-500' :
                item.codeState == 3 ? 'text-orange-500' :
                item.codeState == 4 ? 'text-stone-500' :
                'text-black'}`}
                >
                  <span className='grid grid-cols-1 gap-2'>
                    <span className=''>{item.stateDescription}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex-1 space-y-6 py-1'>
              <div className='h-2 rounded text-sm font-bold'>
                <span>{ item.fullNamePerson} </span>
              </div>
              <div className='space-y-2 font-semibold'>
                <div className='flex pt-2'>
                  <div className='flex-1 h-2 max-w-auto text-sm'>{item.legalNameCompany}</div>
                </div>
                <div className='h-2 py-2 rounded'><p className='text-sm '></p></div>
              </div>
            </div>
          </div>
      </div>
      </div>        
    )
}
