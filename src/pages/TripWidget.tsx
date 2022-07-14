import { h, FunctionComponent } from 'preact'
import { Button } from 'src/components/Button/Button'
import { getExternalUrl, tripLink } from 'src/config/Routes'
import { WidgetWrapper } from 'src/components/WidgetWrapper/WidgetWrapper'
import { getSnippetLink } from 'src/utils/helper'
import { Snippet } from 'src/components/Snippet/Snippet'
import { SnippetParams } from 'src/types'

const Link = (slug: string, params: SnippetParams = {}) => {
  const link = getExternalUrl(tripLink(slug))
  return getSnippetLink(link, typeof params.data?.code !== 'undefined' ? 'Embed Code' : 'Book Now', params)
}

const Widget: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
  return (
    <WidgetWrapper>
      <Button href={getExternalUrl(`${tripLink(slug)}?source=${encodeURIComponent(window.parent.location.origin)}`)}>Book Now</Button>
    </WidgetWrapper>
  )
}

const Code: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
  return (
    <WidgetWrapper>
      <Snippet code={Link(slug, { withEmbedCode: true })} />
    </WidgetWrapper>
  )
}

export const TripWidget = Object.assign(Widget, {
  Code,
  Link,
})
