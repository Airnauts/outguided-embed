import { useCallback } from 'preact/hooks'
import { getEmbedUrl } from '../config/Routes'

export const usePostMessage = () => {
    const send = useCallback(
        (data: any) => {
            window.parent.postMessage(data, '*')
        },
        [window.parent]
    )

    return {
        send
    }
}
