import React, { useState, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import 'normalize.css'
import { sha256 } from 'js-sha256'

import {
  Election,
  OptionalElection,
  parseElection,
} from '@votingworks/ballot-encoder'

import AppContext from './contexts/AppContext'

import CastVoteRecordFiles from './utils/CastVoteRecordFiles'
import { Storage } from './utils/Storage'

import ElectionManager from './components/ElectionManager'
import { SaveElection, SaveCastVoteRecordFiles } from './config/types'

export interface AppStorage {
  election?: Election
  cvrFiles?: string
}

export interface Props extends RouteComponentProps {
  storage: Storage<AppStorage>
}

export const electionStorageKey = 'election'
export const cvrsStorageKey = 'cvrFiles'

const AppRoot = ({ storage }: Props) => {
  const printBallotRef = useRef<HTMLDivElement>(null)

  const getElection = () => {
    const election = storage.get(electionStorageKey)

    return election ? parseElection(election) : undefined
  }
  const getCVRFiles = () => storage.get(cvrsStorageKey)

  const storageElection = getElection()
  const [election, setElection] = useState<OptionalElection>(storageElection)
  const [electionHash, setElectionHash] = useState(
    storageElection ? sha256(JSON.stringify(storageElection)) : ''
  )

  const storageCVRFiles = getCVRFiles()
  const [castVoteRecordFiles, setCastVoteRecordFiles] = useState(
    storageCVRFiles
      ? CastVoteRecordFiles.import(storageCVRFiles)
      : CastVoteRecordFiles.empty
  )

  const saveElection: SaveElection = (electionDefinition) => {
    setElection(electionDefinition)
    setElectionHash(
      electionDefinition ? sha256(JSON.stringify(electionDefinition)) : ''
    )
    if (electionDefinition) {
      storage.set(electionStorageKey, electionDefinition)
    } else {
      storage.remove(electionStorageKey)
    }
  }

  const saveCastVoteRecordFiles: SaveCastVoteRecordFiles = (
    newCVRFiles = CastVoteRecordFiles.empty
  ) => {
    setCastVoteRecordFiles(newCVRFiles)
    if (newCVRFiles === CastVoteRecordFiles.empty) {
      storage.remove(cvrsStorageKey)
    } else {
      storage.set(cvrsStorageKey, newCVRFiles.export())
    }
  }

  return (
    <AppContext.Provider
      value={{
        castVoteRecordFiles,
        election,
        electionHash,
        printBallotRef,
        setCastVoteRecordFiles,
        saveCastVoteRecordFiles,
        saveElection,
      }}
    >
      <ElectionManager />
      <div ref={printBallotRef} />
    </AppContext.Provider>
  )
}

export default AppRoot
