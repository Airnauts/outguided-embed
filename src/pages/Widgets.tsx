import { Fragment, h } from 'preact'
import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { useTripBySlug } from 'src/api/trip'
import { getTripSlugFromUrl } from 'src/config/Routes'
import { TripWidget } from 'src/widgets/TripWidget'

const EMBED_SCRIPT = `<script async src="${process.env.EMBED_URL}/embed.js"></script>`
const EXAMPLE_TRIP = 'https://www.outguided.com/experiences/24-hours-in-browns-canyon-deluxe-overnight-camping-experience-like-nothing-out-there-granite'

export const Widgets: FunctionComponent<{}> = () => {
  const [slug, setSlug] = useState<string | undefined>(getTripSlugFromUrl(EXAMPLE_TRIP))
  const { data, error, isValidating } = useTripBySlug(slug, { refreshInterval: 0 })

  useEffect(() => {
    if(data && window.OGWidgets){
      window.OGWidgets.init()
    }
  }, [data, window.OGWidgets])

  return (
    <div class="content">
      <h3>Enter experience URL:</h3>
      <form>
        <label for="tripUrl">Trip URL:</label>
        <input
          id="tripUrl"
          placeholder="Enter Trip Url from outguided.com"
          defaultValue={EXAMPLE_TRIP}
          onInput={({ target }) => setSlug(getTripSlugFromUrl((target as HTMLInputElement)?.value))}
        ></input>
      </form>
      {error && !isValidating && <h4>{error.message}</h4>}
      {data && (
        <Fragment>
          <h3>Place this Link inside you page content where you want to show widget</h3>
          <textarea
            cols={80}
            rows={7}
            dangerouslySetInnerHTML={{
              __html: `${TripWidget.Snippet({ slug: data.slug })}${EMBED_SCRIPT}`,
            }}
          ></textarea>
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: TripWidget.Snippet({ slug: data.slug }) }} />
        </Fragment>
      )}
    </div>
  )
}
