import { useCallback } from 'preact/hooks'
import { getEmbedUrl } from '../config/Routes'

export const usePostMessage = () => {
    const send = useCallback(
        (data: any) => {
            window.postMessage(data, getEmbedUrl())
        },
        [window.parent]
    )

    return {
        send
    }
}
