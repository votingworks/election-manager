import React from 'react'
import { getPrecinctById, Election } from '@votingworks/ballot-encoder'

import { BallotLocale } from '../config/types'

import PrintButton from '../components/PrintButton'
import HandMarkedPaperBallot from '../components/HandMarkedPaperBallot'
import NavigationScreen from '../components/NavigationScreen'

import testElection from './testElection.json'

const UserTestingBallotScreen = () => {
  const precinctId = '23'
  const ballotStyleId = '12'
  const election = (testElection as unknown) as Election
  const locales: BallotLocale = {
    primary: 'en-US',
  }

  const precinctName = getPrecinctById({ election, precinctId })?.name

  return (
    <React.Fragment>
      <NavigationScreen>
        <h1>
          Ballot Style <strong>{ballotStyleId}</strong> for {precinctName}
        </h1>
        <p>
          <PrintButton primary>Print Ballot</PrintButton>
        </p>
      </NavigationScreen>
      <HandMarkedPaperBallot
        ballotStyleId={ballotStyleId}
        election={election}
        isLiveMode
        precinctId={precinctId}
        locales={locales}
      />
    </React.Fragment>
  )
}

export default UserTestingBallotScreen
