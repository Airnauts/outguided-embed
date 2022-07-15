import { Fragment, h, render } from 'preact'
import { Router, Route } from 'preact-router'
import { createHashHistory } from 'history'
import { fetcher } from './api/fetcher'
import { TRIP_PAGE, getEmbedPath, getEmbedSnippetPath } from './config/Routes'
import { TripWidget } from './pages/TripWidget'
import { SWRConfig } from 'preact-swr'
import './styles/styles.scss'
import { Widgets } from './pages/Widgets'

const App = () => {
  console.log(process.env.NODE_ENV)
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Fragment>
        <Router history={createHashHistory() as any}>
          <Route component={TripWidget} path={getEmbedPath(TRIP_PAGE)} />
          <Route component={TripWidget.Code} path={getEmbedSnippetPath(TRIP_PAGE)} />
          <Route component={Widgets} default />
        </Router>
      </Fragment>
    </SWRConfig>
  )
}
const root = document.getElementById('root')
render(<App />, root!)
