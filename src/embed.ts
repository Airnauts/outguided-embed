import { getEmbedUrl, getExternalUrl, hostLink, tripLink } from './config/Routes'
declare global {
    interface Window {
        OGWidgets: {
            init: () => void
        }
    }
}

;(function (window) {
    window.OGWidgets = window.OGWidgets || {}
    if (typeof window.OGWidgets.init === 'function') {
        return
    }
    window.OGWidgets.init = () => {
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
                console.log('external link dont match: ', href?.startsWith(getExternalUrl()))
                return
            }

            var iframe = document.createElement('iframe')
            iframe.src = url
            iframe.style.border = 'none'
            iframe.style.overflowX = 'hidden'
            iframe.style.overflowY = 'hidden'
            iframe.style.display = 'block'
            window?.addEventListener(
                'message',
                (event) => {
                    if (event.origin === getEmbedUrl()) {
                        const { width, height } = event.data
                        if (height) {
                            iframe.style.height = height + 'px'
                        }
                        if (width) {
                            iframe.style.width = width + 'px'
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
