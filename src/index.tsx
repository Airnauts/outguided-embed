import { Fragment, h, render } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Router, Route, Link } from 'preact-router'
import { createHashHistory } from 'history'
import { fetcher } from './api/fetcher'
import { TRIP_PAGE, getEmbedPath, HOST_PAGE, tripLink } from './config/Routes'
import { TripWidget } from './widgets/TripWidget'
import { HostPage } from './widgets/HostPage'
import { SWRConfig } from 'preact-swr'
import './styles/styles.scss'
import { Widgets } from './pages/Widgets'

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Fragment>
        <Router history={createHashHistory() as any}>
          <Route component={TripWidget} path={getEmbedPath(TRIP_PAGE)} />
          <Route component={HostPage} path={getEmbedPath(HOST_PAGE)} />
          <Route component={Widgets} default />
        </Router>
      </Fragment>
    </SWRConfig>
  )
}
const root = document.getElementById('root')
render(<App />, root!)
