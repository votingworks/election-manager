import { BallotScreenProps, PrecinctReportScreenProps } from './config/types'

const routerPaths = {
  root: '/',
  electionDefinition: '/definition',
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
  tallyReport: ({ precinctId }: PrecinctReportScreenProps) =>
    `/tally/precinct/${precinctId}`,
  tallyFullReport: '/tally/full',
  testDecksTally: '/tally/test-ballot-deck',
  testDeckResultsReport: ({ precinctId }: PrecinctReportScreenProps) =>
    `/tally/test-ballot-deck/${precinctId}`,
  export: '/export-election-ballot-package',
}

export default routerPaths
