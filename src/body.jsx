<div>
{
  employees.length == 0 ? (
      <div className='flex h-screen items-center justify-center'>
         <span className='items-center justify-center'>
        <Bars height="120" width="120" color="#3ec4d6" ariaLabel="bars-loading"
          visible={true}
        />
        <p className='items-center justify-center'>Loading...</p></span>
      </div>
    ) : 
    <div className="items-center justify-center" >
      {
        statusEmployee.length > 0 ?
          <div className='flex w-full mt-10'>
            {/* <div className='mx-auto w-1/4'>
              <div><SeachInput handlerEvent={event=>(handleFindEmployee(event.target))}/></div>
            </div> */}
            {/* <div className='mx-auto w-1/4'>
              <ListCombo
                itemList={companies}
                setReturnSelected={setSelectedCompany}
                displayName={'legalNameCompany'}
                keyunique ={'codeEmployee'}
                label={'Empresa:'}
              />
            </div>
            <div className='w-1/4 mx-auto'>
              <ListCombo  itemList={statusEmployee}
                setReturnSelected={setSelectedStatusEmployee}
                displayName={'description'}
                defaultSelectedOptionIndex ={statusEmployee[0]}
                label={'Estado:'}
                />
            </div> */}
          </div>
        : null
      }
  </div>
  }
  {
  <div className='flex w-full items-center justify-center my-10'>
    <div className='w-4/5 rounded-lg  overflow-hidden bg-white text-left shadow-md h-screen border border-stone-300 overflow-y-scroll'>
    {
     finding ? (
        <div className='flex h-screen items-center justify-center'>
        <span className='items-center justify-center'>
        <ThreeDots  height="80" width="80" radius="9" color="#3ec4d6" ariaLabel="three-dots-loading" visible={true}
        /></span>
     </div>
      ): 
        result.length !==0 ?  result.map(
            (item,idIndex) =>  <CardEmployee item={item} key={idIndex}/>
        ) 
        : 
       (
        <div className='flex h-screen items-center justify-center'>
        <span className='items-center justify-center font-bold text-sky-600'>Sin Resultados Aun</span>
     </div>
      )
    }
  </div>

</div>
}
    {/* <div className="flex w-full items-center justify-center">
      <Tabs />
    </div>
       */}

  {/* <ImageCrop></ImageCrop> */}

  {/* <CropPicture></CropPicture> */}
</div>