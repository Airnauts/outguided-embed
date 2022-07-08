import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { usePostMessage } from 'src/hooks/usePostMessage'
import { useEmbedSize } from 'src/hooks/useEmbedSize'
import { EmbedSizeMessage } from 'src/types'

export const Widget: FunctionComponent = ({ children }) => {
    const { send } = usePostMessage()
    const { width, height } = useEmbedSize()
    useEffect(() => {
        if (width && height) {
            send({ type: 'size', width, height } as EmbedSizeMessage)
        }
    }, [send, width, height])

    return <Fragment>{children}</Fragment>
}
