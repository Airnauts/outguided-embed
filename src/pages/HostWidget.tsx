import { h, FunctionComponent } from 'preact'
import { Button } from 'src/components/Button/Button'
import { getExternalUrl, hostLink } from 'src/config/Routes'
import { WidgetWrapper } from 'src/components/WidgetWrapper/WidgetWrapper'
import { getSnippetLink } from 'src/utils/helper'
import { Snippet } from 'src/components/Snippet/Snippet'
import { SnippetParams } from 'src/types'

const Link = (slugOrId: string | number, params: SnippetParams = {}) => {
  const link = getExternalUrl(hostLink(slugOrId))
  return getSnippetLink(link, typeof params.data?.code !== 'undefined' ? 'Embed Code' : 'Book Now', params)
}

const Widget: FunctionComponent<{ matches: { slugOrId: string; source: string } }> = ({ matches: { slugOrId, source } }) => {
  return (
    <WidgetWrapper>
      <Button href={getExternalUrl(`${hostLink(slugOrId)}?source=${encodeURIComponent(source)}`)}>Book Now</Button>
    </WidgetWrapper>
  )
}

const Code: FunctionComponent<{ matches: { slugOrId: string } }> = ({ matches: { slugOrId } }) => {
  return (
    <WidgetWrapper>
      <Snippet code={Link(slugOrId, { withEmbedCode: true })} />
    </WidgetWrapper>
  )
}

export const HostWidget = Object.assign(Widget, {
  Code,
  Link,
})
