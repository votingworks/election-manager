import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import pluralize from 'pluralize'
import AppContext from '../contexts/AppContext'

import routerPaths from '../routerPaths'
import Button, { SegmentedButton } from '../components/Button'
import LinkButton from '../components/LinkButton'
import Table, { TD } from '../components/Table'
import { NoWrap } from '../components/Text'
import Prose from '../components/Prose'
import {
  getBallotStylesDataByStyle,
  getBallotStylesDataByPrecinct,
} from '../utils/election'
import NavigationScreen from '../components/NavigationScreen'

const Header = styled.div`
  margin-bottom: 1rem;
`

const FloatingLeft = styled.div`
  float: left;
  margin-right: 1.5rem;
  margin-left: 1rem;
`

const BallotListScreen = () => {
  const { election: e, printedBallots, configuredAt } = useContext(AppContext)
  const election = e!

  const ballotLists = [
    getBallotStylesDataByStyle(election),
    getBallotStylesDataByPrecinct(election),
  ]
  const [ballotView, setBallotView] = useState(1)
  const sortByStyle = () => setBallotView(0)
  const sortByPrecinct = () => setBallotView(1)

  const ballots = ballotLists[ballotView]

  const numBallotsPrinted = printedBallots.reduce(
    (count, ballot) => count + ballot.numCopies,
    0
  )

  const configuredAtPretty = new Date(configuredAt).toString()

  return (
    <NavigationScreen>
      <Header>
        <Prose maxWidth={false}>
          <FloatingLeft>
            <LinkButton to={routerPaths.printedBallotsReport}>
              Printed Ballots Report
            </LinkButton>
          </FloatingLeft>
          <p>
            <strong>{numBallotsPrinted} official ballots</strong> have been
            printed.
            <br />
            Election configured at <strong>{configuredAtPretty}</strong>.
          </p>
          <hr />
          <p>
            {`Sort ${pluralize('ballot', ballots.length, true)} by: `}
            <SegmentedButton>
              <Button
                small
                onPress={sortByPrecinct}
                disabled={ballotView === 1}
              >
                Precinct
              </Button>
              <Button small onPress={sortByStyle} disabled={ballotView === 0}>
                Style
              </Button>
            </SegmentedButton>{' '}
            <LinkButton small to={routerPaths.export}>
              Export Ballot Package
            </LinkButton>
          </p>
        </Prose>
      </Header>
      <Table>
        <thead>
          <tr>
            <TD as="th" />
            <TD as="th">Precinct</TD>
            <TD as="th">Ballot Style</TD>
            <TD as="th">Contests</TD>
          </tr>
        </thead>
        <tbody>
          {ballots.map((ballot) => {
            const precinctName = election.precincts.find(
              (p) => p.id === ballot.precinctId
            )!.name
            return (
              <tr key={ballot.ballotStyleId + ballot.precinctId}>
                <TD textAlign="right" nowrap>
                  <LinkButton
                    fullWidth
                    small
                    to={routerPaths.ballotsView(ballot)}
                  >
                    View Ballot
                  </LinkButton>
                </TD>
                <TD>
                  <NoWrap>{precinctName}</NoWrap>
                </TD>
                <TD>{ballot.ballotStyleId}</TD>
                <TD>{ballot.contestIds.length}</TD>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </NavigationScreen>
  )
}

export default BallotListScreen
