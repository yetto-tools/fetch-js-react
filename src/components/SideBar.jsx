import React, { useState, useTransition } from 'react';

export const SideBar = () =>{
  const [expanded, startTransition] = useTransition()
  const [collapseSideBar, setCollapseSideBar] = useState('w-auto')
  const [ishidden, setIsHidden] = useState('hidden')
  const handleShowSidebar = (event) =>{
    startTransition(()=>{
      if(collapseSideBar == 'w-auto'){
        setCollapseSideBar('w-48')
        setIsHidden(null)
      }
      else{
        setCollapseSideBar('w-auto')
        setIsHidden('hidden')
      }
  
    })
  }


  return (
    <>
      <aside className={collapseSideBar} aria-label='Sidebar'>

        <div className='relative overflow-y-auto h-auto p-2 w-
          rounded bg-opacity-30 blur-xs bg-white
          border border-solid border-teal-50/50 border-opacity-50
        '>
          <div className='text-black/50' >
            <button className='my-2 p-2 bg-white bg-opacity-60 rounded-lg border border-black/50 text-black/60 
                transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-black/80 hover:border-black/70 hover:bg-stone-200 hover:font-bold duration-150 cursor-pointer
              '
              onClick={handleShowSidebar}
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>              
            </button>
            <ul className='overflow-x-hidden '>
              <li className='my-2 bg-white bg-opacity-60 rounded-lg border border-black/50 text-black/60 
                transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-black/80 hover:border-black/70 hover:bg-stone-200 hover:font-bold duration-150 cursor-pointer
              '>
                <div className='inline-flex p-2' >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  <div className={`w-0 pl-2 ${ishidden}`}>Empresas</div>
                </div>
              </li>
              <li className='my-2 bg-white bg-opacity-60 rounded-lg border border-black/50 text-black/60 
                transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-black/80 hover:border-black/70 hover:bg-stone-200 hover:font-bold duration-150 cursor-pointer
              '>
                <div className='inline-flex p-2'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
                  </svg>
                  <div className={`w-0 pl-2 ${ishidden}`}>Personal</div>
                </div>
              </li>
              <li className='my-2 bg-white bg-opacity-60 rounded-lg border border-black/50 text-black/60 
                transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-black/80 hover:border-black/70 hover:bg-stone-200 hover:font-bold duration-150 cursor-pointer
              '>
                <div className='inline-flex p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                  <div className={`w-0 pl-2 ${ishidden}`}>Tarjetas</div>
                </div>
              </li>
              <li className='my-2 bg-white bg-opacity-60 rounded-lg border border-black/50 text-black/60 
                transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-black/80 hover:border-black/70 hover:bg-stone-200 hover:font-bold duration-150 cursor-pointer
              '>
                <div className='inline-flex p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                  </svg>
                  <div className={`w-0 pl-2 ${ishidden}`}>Documentos</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
   )
}

export default SideBar