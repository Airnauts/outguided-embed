import { h, Fragment, FunctionComponent } from 'preact'
import { Button } from '../components/Button/Button'
import { getExternalLink, tripLink } from '../config/Routes'

export const TripPage: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
  return <Button href={getExternalLink(tripLink(slug))}>Book Now</Button>
}
