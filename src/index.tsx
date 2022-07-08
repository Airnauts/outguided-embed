import { h, render } from 'preact'
import { Router, Route } from 'preact-router'
import { TRIP_PAGE, getEmbedPath, HOST_PAGE } from './config/Routes'
import { TripPage } from './pages/TripPage'
import { HostPage } from './pages/HostPage'
import './styles/styles.scss'

const App = () => (
    <Router>
        <Route component={TripPage} path={getEmbedPath(TRIP_PAGE)} />
        <Route component={HostPage} path={getEmbedPath(HOST_PAGE)} />
        <Route
            component={() => (
                <div class="content">
                    <textarea
                        cols={50}
                        rows={3}
                        dangerouslySetInnerHTML={{
                            __html: ` <a href="https://www.outguided.com" data-og-widget="trip" data-og-trip="123">
                                powered by outguided.com
                            </a>`
                        }}
                    ></textarea>
                    <a href="https://www.outguided.com" data-og-widget="trip" data-og-trip="123">
                        powered by outguided.com
                    </a>
                </div>
            )}
            default
        />
    </Router>
)
const root = document.getElementById('root')
render(<App />, root!)
