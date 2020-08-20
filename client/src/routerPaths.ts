import {
  BallotScreenProps,
  PrecinctReportScreenProps,
  ScannerReportScreenProps,
} from './config/types'

const routerPaths = {
  root: '/',
  electionDefinition: '/definition',
  definitionEditor: '/definition/editor',
<<<<<<< HEAD
=======
  definitionMetadata: `/definition/metadata`,
  definitionParties: `/definition/parties`,
>>>>>>> WIP
  definitionContests: `/definition/contests`,
  definitionContest: ({ contestId }: { contestId: string }) =>
    `/definition/contests/${contestId}`,
  definitionPrecincts: `/definition/precincts`,
  definitionDistricts: `/definition/districts`,
  definitionBallotStyles: `/definition/ballot-styles`,
  definitionBallotStyle: ({ ballotStyleId }: { ballotStyleId: string }) =>
    `/definition/ballot-styles/${ballotStyleId}`,
  ballotsList: '/ballots',
  ballotsView: ({ ballotStyleId, precinctId }: BallotScreenProps) =>
    `/ballots/style/${ballotStyleId}/precinct/${precinctId}`,
  ballotsViewLanguage: ({
    ballotStyleId,
    precinctId,
    localeCode,
  }: BallotScreenProps) =>
    `/ballots/style/${ballotStyleId}/precinct/${precinctId}/language/${localeCode}`,
  tally: '/tally',
  tallyPrecinctReport: ({ precinctId }: PrecinctReportScreenProps) =>
    `/tally/precinct/${precinctId}`,
  tallyScannerReport: ({ scannerId }: ScannerReportScreenProps) =>
    `/tally/scanner/${scannerId}`,
  tallyFullReport: '/tally/full',
  testDecksTally: '/tally/test-ballot-deck',
  testDeckResultsReport: ({ precinctId }: PrecinctReportScreenProps) =>
    `/tally/test-ballot-deck/${precinctId}`,
  overvoteCombinationReport: '/tally/pairs',
  export: '/export-election-ballot-package',
  combineResultsFiles: '/tally/combine-results-files',
}

export default routerPaths
