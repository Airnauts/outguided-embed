import { h, render } from 'preact'
import { useEffect } from 'preact/hooks'
import { Router, Route, Link } from 'preact-router'
import { createHashHistory } from 'history'
import { TRIP_PAGE, getEmbedPath, HOST_PAGE, tripLink } from './config/Routes'
import { TripPage } from './pages/TripPage'
import { HostPage } from './pages/HostPage'
import './styles/styles.scss'

const App = () => (
    <Router history={createHashHistory()}>
        <Route component={TripPage} path={getEmbedPath(TRIP_PAGE)} />
        <Route component={HostPage} path={getEmbedPath(HOST_PAGE)} />
        <Route
            component={() => {
                useEffect(() => {
                    window.OGWidgets.init()
                }, [])
                return (
                    <div class="content">
                        <h3>Place this Link inside you page content where you want to show widget</h3>
                        <textarea
                            cols={50}
                            rows={3}
                            onChange={() => console.log('onChange')}
                            dangerouslySetInnerHTML={{
                                __html: `<a href="https://www.outguided.com" data-og-widget="trip" data-og-trip="123">
                                powered by outguided.com
                            </a><script async type="text/javascript" onload="window.OGWidgets.init();" src="${process.env.EMBED_URL}/embed.js"></script>`
                            }}
                        ></textarea>
                        <h4 class="preview__title">Widget preview:</h4>
                        <div class="preview">
                            <a href="https://www.outguided.com" data-og-widget="trip" data-og-trip="123">
                                powered by outguided.com
                            </a>
                        </div>
                    </div>
                )
            }}
            default
        />
    </Router>
)
const root = document.getElementById('root')
render(<App />, root!)
