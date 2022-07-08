import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { usePostMessage } from '../hooks/usePostMessage'
import { Button } from '../components/Button/Button'
import { getExternalUrl, tripLink } from '../config/Routes'

export const TripPage: FunctionComponent<{ matches: { slug: string } }> = ({ matches: { slug } }) => {
    const { send } = usePostMessage()
    useEffect(() => {
        const height = document?.body.scrollHeight
        const width = document?.getElementById('root')?.children[0].scrollWidth
        const dimensions = {
            height,
            width
        }
        if (height) {
            dimensions.height = height + 1
        }
        if (width) {
            dimensions.width = width + 3
        }
        send(dimensions)
    }, [send])
    return <Button href={getExternalUrl(tripLink(slug))}>Book Now</Button>
}
