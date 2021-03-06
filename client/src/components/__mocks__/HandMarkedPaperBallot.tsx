import React from 'react'
import { HandMarkedPaperBallotProps } from '../HandMarkedPaperBallot'

const HandMarkedPaperBallot = ({
  ballotStyleId,
  election,
  precinctId,
  onRendered,
}: HandMarkedPaperBallotProps) => {
  if (onRendered) {
    setImmediate(onRendered)
  }

  return (
    <div>
      <h1>Mocked HMPB</h1>
      Election: {election.title}
      <br />
      Ballot Style {ballotStyleId}, precinct {precinctId}.
    </div>
  )
}

export default HandMarkedPaperBallot
