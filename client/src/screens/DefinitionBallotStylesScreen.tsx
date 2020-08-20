import React from 'react'
import { useParams } from 'react-router-dom'

const DefinitionBallotStylesScreen = () => {
  const { ballotStyleId } = useParams<{ ballotStyleId: string }>()
  return (
    <div>
      <h1>DefinitionBallotStylesScreen</h1>
      <p>ballotStyleId: {ballotStyleId || 'undefined'}</p>
      <p>
        /definition/ballotStyles - Add new - id (toggle with warning to edit) -
        party - precincts.length - districts.length
      </p>
      <p>
        /definition/ballotStyles/:id - id (toggle with warning to edit) - party
        - precincts list - districts list
      </p>
    </div>
  )
}

export default DefinitionBallotStylesScreen
