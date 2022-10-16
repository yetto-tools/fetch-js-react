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
            info &&  info.map( (object) =>{
              return (
                <li>
                  <span>pokemon: {object.name}</span>
                  <span>pokemon: {object.url}</span>
                </li>
                )
        })


        }
      </ul>
    </div>
  )

}
