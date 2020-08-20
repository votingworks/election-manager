import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AppContext from '../contexts/AppContext'

import routerPaths from '../routerPaths'
import DefinitionScreen from '../screens/DefinitionScreen'
import BallotListScreen from '../screens/BallotListScreen'
import BallotScreen from '../screens/BallotScreen'
import ExportElectionBallotPackageScreen from '../screens/ExportElectionBallotPackageScreen'
import UnconfiguredScreen from '../screens/UnconfiguredScreen'
import TestDeckScreen from '../screens/TestDeckScreen'
import TallyScreen from '../screens/TallyScreen'
import TallyReportScreen from '../screens/TallyReportScreen'
import CombineResultsScreen from '../screens/CombineResultsScreen'
import OvervoteCombinationReportScreen from '../screens/OvervoteCombinationReportScreen'
import DefinitionEditorScreen from '../screens/DefinitionEditorScreen'
// import DefinitionMetadataScreen from '../screens/DefinitionMetadataScreen'
// import DefinitionPartiesScreen from '../screens/DefinitionPartiesScreen'
import DefinitionContestsScreen from '../screens/DefinitionContestsScreen'
// import DefinitionPrecinctsScreen from '../screens/DefinitionPrecinctsScreen'
// import DefinitionDistrictsScreen from '../screens/DefinitionDistrictsScreen'
// import DefinitionBallotStylesScreen from '../screens/DefinitionBallotStylesScreen'

const ElectionManager = () => {
  const { election: e } = useContext(AppContext)
  const election = e!

  if (!election) {
    return <UnconfiguredScreen />
  }

  return (
    <Switch>
      <Route exact path={routerPaths.electionDefinition}>
        <DefinitionScreen />
      </Route>
      <Route path={routerPaths.definitionEditor}>
        <DefinitionEditorScreen />
      </Route>
      {/* <Route path={routerPaths.definitionMetadata}> <DefinitionMetadataScreen /> </Route> */}
      {/* <Route path={routerPaths.definitionParties}> <DefinitionPartiesScreen /> </Route> */}
      <Route
        path={[
          routerPaths.definitionContest({ contestId: ':contestId' }),
          routerPaths.definitionContests,
        ]}
      >
        <DefinitionContestsScreen />
      </Route>
      {/* <Route path={routerPaths.definitionPrecincts}> <DefinitionPrecinctsScreen /> </Route> */}
      {/* <Route path={routerPaths.definitionDistricts}> <DefinitionDistrictsScreen /> </Route> */}
      {/* <Route path={[ routerPaths.definitionBallotStyle({ ballotStyleId: ':ballotStyleId', }), routerPaths.definitionBallotStyles, ]} > <DefinitionBallotStylesScreen /> </Route> */}
      <Route exact path={routerPaths.ballotsList}>
        <BallotListScreen />
      </Route>
      <Route
        path={[
          routerPaths.testDeckResultsReport({ precinctId: ':precinctId' }),
          routerPaths.testDecksTally,
        ]}
      >
        <TestDeckScreen />
      </Route>
      <Route
        path={[
          routerPaths.ballotsViewLanguage({
            ballotStyleId: ':ballotStyleId',
            precinctId: ':precinctId',
            localeCode: ':localeCode',
          }),
          routerPaths.ballotsView({
            ballotStyleId: ':ballotStyleId',
            precinctId: ':precinctId',
          }),
        ]}
      >
        <BallotScreen />
      </Route>
      <Route exact path={routerPaths.export}>
        <ExportElectionBallotPackageScreen />
      </Route>
      <Route exact path={routerPaths.tally}>
        <TallyScreen />
      </Route>
      <Route exact path={routerPaths.combineResultsFiles}>
        <CombineResultsScreen />
      </Route>
      <Route
        path={[
          routerPaths.tallyPrecinctReport({ precinctId: ':precinctId' }),
          routerPaths.tallyFullReport,
        ]}
      >
        <TallyReportScreen />
      </Route>
      <Route
        path={[
          routerPaths.tallyScannerReport({ scannerId: ':scannerId' }),
          routerPaths.tallyFullReport,
        ]}
      >
        <TallyReportScreen />
      </Route>
      <Route path={routerPaths.overvoteCombinationReport}>
        <OvervoteCombinationReportScreen />
      </Route>
      <Redirect to={routerPaths.electionDefinition} />
    </Switch>
  )
}

export default ElectionManager
