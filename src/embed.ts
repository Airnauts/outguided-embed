import { getEmbedUrl, getExternalUrl, hostLink, tripLink } from './config/Routes'
import { EmbedMessage, EmbedSizeMessage } from './types'
declare global {
    interface Window {
        OGWidgets: {
            init: () => void
        }
    }
}

;(function (window) {
    window.onload = () => {
        const elements = document.querySelectorAll(
            '[data-og-widget]:not([data-og-initialized])'
        ) as NodeListOf<HTMLElement>

        elements.forEach((element) => {
            element.setAttribute('data-og-initialized', '1')
            const { ogWidget, ogTrip, ogGuide } = element.dataset
            if (!ogWidget) {
                return
            }
            let url
            switch (ogWidget) {
                case 'trip':
                    url = ogTrip && getEmbedUrl(tripLink(ogTrip))
                    break
                case 'guide':
                    url = ogGuide && getEmbedUrl(hostLink(ogGuide))
                    break
            }

            if (!url) {
                return
            }

            const href = element.getAttribute('href')
            if (!href?.startsWith(getExternalUrl())) {
                return
            }

            const iframe = document.createElement('iframe')
            iframe.src = url
            iframe.style.border = 'none'
            iframe.style.overflowX = 'hidden'
            iframe.style.overflowY = 'hidden'
            iframe.style.display = 'block'

            window?.addEventListener(
                'message',
                (event) => {
                    if (getEmbedUrl().startsWith(event.origin)) {
                        const { type } = event.data as EmbedMessage
                        switch (type) {
                            case 'size':
                                const { width, height } = event.data as EmbedSizeMessage
                                iframe.style.height = height + 'px'
                                iframe.style.width = width + 'px'
                                break
                            case 'other':
                                console.log('other event')
                                break
                        }
                    }
                },
                false
            )
            element.after(iframe)
            element.style.display = 'none'
        })
    }
})(window)
