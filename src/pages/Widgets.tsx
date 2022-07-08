import { Fragment, h } from 'preact'
import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Button } from 'src/components/Button/Button'
import { TripWidget } from 'src/widgets/TripWidget'
const EMBED_SCRIPT = `<script async type="text/javascript" src="${process.env.EMBED_URL}/embed.js"></script>`
const EXAMPLE_SLUG = 'test-trip'
export const Widgets: FunctionComponent<{}> = () => {
    const [tripUrl, setTripUrl] = useState<string>(
        'https://www.outguided.com/experiences/24-hours-in-browns-canyon-deluxe-overnight-camping-experience-like-nothing-out-there-granite'
    )
    const [trip, setTrip] = useState<{ [key: string]: any }>()

    const fetchTrip = async (url: string) => {
        setTrip()
        const parts = url.split('/')
        if (parts.length) {
            try {
                let result = (await fetch(`${process.env.BACKEND_URL}/marketing-pages/slug/${parts.slice(-1)[0]}`)) as {
                    [key: string]: any
                }
                if (result.status === 200) {
                    result = await result.json()
                    if (typeof result === 'object' && result.id) {
                        setTrip(result)
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        fetchTrip(tripUrl)
    }
    useEffect(() => {
        window.OGWidgets.init()
    }, [trip])

    return (
        <div class="content">
            <h3>Enter experience URL:</h3>
            <form class="form" onSubmit={onSubmit}>
                <label for="tripUrl">Trip URL:</label>
                <input
                    id="tripUrl"
                    placeholder="Enter Trip Url from outguided.com"
                    value={tripUrl}
                    onChange={({ target }) => setTripUrl((target as HTMLInputElement)?.value)}
                ></input>
                {tripUrl && <Button>Fetch Trips Details</Button>}
            </form>
            {trip && (
                <Fragment>
                    <h3>Place this Link inside you page content where you want to show widget</h3>
                    <textarea
                        cols={80}
                        rows={7}
                        dangerouslySetInnerHTML={{
                            __html: `${TripWidget.Snippet({ slug: trip.slug })}${EMBED_SCRIPT}`
                        }}
                    ></textarea>
                    <h4 class="preview__title">Widget preview:</h4>
                    <div
                        class="preview"
                        dangerouslySetInnerHTML={{ __html: TripWidget.Snippet({ slug: trip.slug }) }}
                    />
                </Fragment>
            )}
        </div>
    )
}
