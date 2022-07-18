import { Fragment, h } from 'preact'
import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { useHostBySlug } from 'src/api/host'
import { useTripBySlug } from 'src/api/trip'
import { Snippet } from 'src/components/Snippet/Snippet'
import { getHostSlugFromUrl, getTripSlugFromUrl } from 'src/config/Routes'
import { EXAMPLE_HOST, EXAMPLE_TRIP } from 'src/config/Widgets'
import { TripWidget } from 'src/pages/TripWidget'
import { HostWidget } from './HostWidget'

export const Widgets: FunctionComponent<{}> = () => {
  const [slug, setSlug] = useState<string | undefined>(getTripSlugFromUrl(EXAMPLE_TRIP))
  const [guideSlug, setGuideSlug] = useState<string | undefined>(getHostSlugFromUrl(EXAMPLE_HOST))
  const { data, error, isValidating } = useTripBySlug(slug, { refreshInterval: 0 })
  const { data: host, error: hostError, isValidating: isValidatingHost } = useHostBySlug(guideSlug, { refreshInterval: 0 })

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
      <form>
        <label for="tripUrl">Trip URL:</label>
        <input
          id="tripUrl"
          placeholder="Enter Trip Url from outguided.com"
          defaultValue={EXAMPLE_TRIP}
          onInput={({ target }) => setSlug(getTripSlugFromUrl((target as HTMLInputElement)?.value))}
        ></input>
        <label for="hostUrl">Host URL:</label>
        <input
          id="hostUrl"
          placeholder="Enter Host Url from outguided.com"
          defaultValue={EXAMPLE_HOST}
          onInput={({ target }) => setGuideSlug(getHostSlugFromUrl((target as HTMLInputElement)?.value))}
        ></input>
      </form>
      {error && !isValidating && <h4>{error.message}</h4>}
      {data && (
        <Fragment>
          <h3>Place this Link inside you page content where you want to show widget</h3>
          <Snippet code={TripWidget.Link(data.id, { withEmbedCode: true })} />
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: TripWidget.Link(data.id) }} />

          <h3>Place this Link inside you page content where you want to show code</h3>
          <Snippet code={TripWidget.Link(data.id, { withEmbedCode: true, data: { code: '' } })} />
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: TripWidget.Link(data.id, { data: { code: '' } }) }} />
        </Fragment>
      )}
      {hostError && !isValidatingHost && <h4>{hostError.message}</h4>}
      {host && (
        <Fragment>
          <h3>Place this Link inside you page content where you want to show widget</h3>
          <Snippet code={HostWidget.Link(host.id, { withEmbedCode: true })} />
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: HostWidget.Link(host.id) }} />

          <h3>Place this Link inside you page content where you want to show code</h3>
          <Snippet code={HostWidget.Link(host.id, { withEmbedCode: true, data: { code: '' } })} />
          <h4 class="preview__title">Widget preview:</h4>
          <div class="preview" dangerouslySetInnerHTML={{ __html: HostWidget.Link(host.id, { data: { code: '' } }) }} />
        </Fragment>
      )}
    </div>
  )
}
