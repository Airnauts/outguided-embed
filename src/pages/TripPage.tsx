import { h, Fragment, FunctionComponent } from 'preact'
import { Button } from 'src/components/Button/Button'
import { getExternalUrl, tripLink } from 'src/config/Routes'
import { Widget } from 'src/components/Widget/Widget'

export const TripPage: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
    return (
        <Widget>
            <Button href={getExternalUrl(tripLink(slug))}>Book Now</Button>
        </Widget>
    )
}
