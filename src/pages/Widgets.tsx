import { Fragment, h } from 'preact'
import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { useTripBySlug } from 'src/api/trip'
import { Snippet } from 'src/components/Snippet/Snippet'
import { getTripSlugFromUrl } from 'src/config/Routes'
import { EXAMPLE_TRIP } from 'src/config/Widgets'
import { TripWidget } from 'src/pages/TripWidget'

export const Widgets: FunctionComponent<{}> = () => {
  const [slug, setSlug] = useState<string | undefined>(getTripSlugFromUrl(EXAMPLE_TRIP))
  const { data, error, isValidating } = useTripBySlug(slug, { refreshInterval: 0 })

  useEffect(() => {
    if (data) {
      if (window.OGWidgets) {
        window.OGWidgets.init()
      } else {
        import('src/embed').then(() => {
          window.OGWidgets.init()
        })
      }
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
          <Snippet code={TripWidget.Link(data.slug, { withEmbedCode: true })} />
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: TripWidget.Link(data.slug) }} />

          <h3>Place this Link inside you page content where you want to show code</h3>
          <Snippet code={TripWidget.Link(data.slug, { withEmbedCode: true, data: { code: '' } })} />
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: TripWidget.Link(data.slug, { data: { code: '' }}) }} />
        </Fragment>
      )}
    </div>
  )
}
