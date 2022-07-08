import { getEmbedUrl, getExternalUrl, hostLink, tripLink } from './config/Routes'
declare global {
    interface Window {
        OGWidgets: {
            init: () => void
        }
    }
}
;(function (window) {
    //body of the function

    window.OGWidgets = window.OGWidgets || {}

    window.OGWidgets.init = () => {
        console.log('init widget')
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
            console.log(url)
            const href = element.getAttribute('href')
            if (!href?.startsWith(getExternalUrl())) {
                console.log('external link dont match: ', href?.startsWith(getExternalUrl()))
            }
            var iframe = document.createElement('iframe')
            iframe.src = url
            iframe.style.border = 'none'
            iframe.style.overflowX = 'hidden'
            iframe.style.overflowY = 'hidden'
            iframe.style.display = 'block'

            iframe.onload = () => {
                const height = iframe?.contentWindow?.document.body.scrollHeight
                const width = iframe?.contentWindow?.document.getElementById('root')?.children[0].scrollWidth
                if (height) {
                    iframe.style.height = height + 1 + 'px'
                }
                if (width) {
                    iframe.style.width = width + 3 + 'px'
                }
            }
            element.after(iframe)
            element.remove()
        })
    }
})(window)


