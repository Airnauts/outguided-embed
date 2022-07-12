import { h, FunctionComponent } from 'preact'
import { Button } from 'src/components/Button/Button'
import { getExternalUrl, tripLink } from 'src/config/Routes'
import { Widget } from 'src/components/Widget/Widget'
import { getWidgetSnippet } from 'src/config/Widgets'

const Snippet = ({ slug }: { slug: string }) => getWidgetSnippet(getExternalUrl(tripLink(slug)), 'Book Now')

const TripPage: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
  return (
    <Widget>
      <Button href={getExternalUrl(`${tripLink(slug)}?source=${encodeURIComponent(window.parent.location.origin)}`)}>
        Book Now
      </Button>
    </Widget>
  )
}

export const TripWidget = Object.assign(TripPage, {
  Snippet,
})
