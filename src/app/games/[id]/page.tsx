import React from 'react'

const GamesDetails = async(props:{params:Promise<{id:string}>}) => {
  const gameParams = (await props.params).id;
  return (
    <div>
      <h1>Game {gameParams}</h1>
    </div>
  )
}

export default GamesDetails