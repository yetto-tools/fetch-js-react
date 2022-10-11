import React from 'react'

export const ListPokemons = ({data, setData, array, setArray}) => {

  const  info = data['results']
  const handleObject = () =>{    
    
    info.map( (object) =>{
      return console.log(object.name)
    })

  }
  


  return (
    <div>
      <h2 onClick={()=>{handleObject()}}>lista</h2>
      <ul >
        {
              info.map( (object) =>{
              return (
                <>
                <li>pokemon: {object.name}</li>
                <li>pokemon: {object.url}</li>
                </>
                )
        })


        }
      </ul>
    </div>
  )

}
