import { h, Fragment, FunctionComponent } from 'preact'
import { Button } from 'src/components/Button/Button'
import { getExternalUrl, tripLink } from 'src/config/Routes'
import { Widget } from 'src/components/Widget/Widget'
const Snippet = ({ slug }: { slug: string }) => {
    return `<a href="https://www.outguided.com" data-og-widget="trip" data-og-trip=${slug} style="text-decoration:none;color:#333;font-size:15px;font-family:Verdana;">Powered by outguided.com</a>`
}

const TripPage: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
    return (
        <Widget>
            <Button href={getExternalUrl(tripLink(slug))}>Book Now</Button>
        </Widget>
    )
}

export const TripWidget = Object.assign(TripPage, {
    Snippet
})
