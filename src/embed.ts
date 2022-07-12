import { getEmbedUrl, getExternalUrl, getHostSlugFromUrl, getTripSlugFromUrl, hostLink, tripLink } from './config/Routes'
import { EmbedMessage, EmbedSizeMessage, MessageListenerCallback } from './types'
import { register } from './utils/messenger'
declare global {
  interface Window {
    OGWidgets: {
      processedWidgets: HTMLAnchorElement[]
      listenerCallbacks: MessageListenerCallback[]
      listenerRegistered: boolean
      registerListener: () => void
      getWidgetCallbackUrl: (href: string) => string | undefined
      createIframe: () => HTMLIFrameElement
      initializeWidget: (element: HTMLAnchorElement) => void
      addListenerCallback: (listener: MessageListenerCallback) => void
      getWidgetListenerCallback: (iframe: HTMLIFrameElement) => MessageListenerCallback
      init: () => void
    }
  }
}
const IFRAME_STYLES = {
  border: 'none',
  width: '0px',
  height: '0px',
  'overflow-x': 'hidden',
  'overflow-y': 'hidden',
  display: 'block',
} as { [key: string]: string }

const IFRAME_ATTRIBUTES = {
  scrolling: 'no',
  frameborder: '0',
  allowtransparency: 'true',
  allowfullscreen: 'true',
} as { [key: string]: string }

;(function (window) {
  const OGWidgets = {
    processedWidgets: [],
    listenerCallbacks: [],
    listenerRegistered: false,
    init: function () {
      this.registerListener()
      const widgets = document.querySelectorAll(`a[data-og-widget][href^="${getExternalUrl()}"]`) as NodeListOf<HTMLAnchorElement>
      widgets.forEach(this.initializeWidget.bind(this))
    },

    registerListener: function () {
      if (!this.listenerRegistered) {
        register((ev) => {
          this.listenerCallbacks.forEach((listener) => listener(ev))
        })
        this.listenerRegistered = true
      }
    },
    addListenerCallback: function (listener) {
      this.listenerCallbacks.push(listener)
    },
    initializeWidget: function (element) {
      if (this.processedWidgets.includes(element)) {
        return
      }
      this.processedWidgets.push(element)

      const url = this.getWidgetCallbackUrl(element.href)
      if (!url) {
        return
      }

      const iframe = this.createIframe()
      iframe.src = url
      iframe.onload = () => {
        element.remove()
      }
      element.after(iframe)
      this.addListenerCallback(this.getWidgetListenerCallback(iframe))
    },
    getWidgetCallbackUrl: function (href) {
      let url
      if (getTripSlugFromUrl(href)) {
        url = getEmbedUrl(tripLink(getTripSlugFromUrl(href)))
      } else if (getHostSlugFromUrl(href)) {
        url = getEmbedUrl(hostLink(getHostSlugFromUrl(href)))
      }
      return url
    },
    createIframe: function () {
      const iframe = document.createElement('iframe')
      Object.keys(IFRAME_ATTRIBUTES).forEach((attribute) => iframe.setAttribute(attribute, IFRAME_ATTRIBUTES[attribute]))
      Object.keys(IFRAME_STYLES).forEach((style) => iframe.style.setProperty(style, IFRAME_STYLES[style]))
      return iframe
    },
    getWidgetListenerCallback: function (iframe) {
      return (event) => {
        if (getEmbedUrl().startsWith(event.origin)) {
          const { type } = event.data as EmbedMessage
          switch (type) {
            case 'size':
              const { width, height } = event.data as EmbedSizeMessage
              iframe.style.height = height + 'px'
              iframe.style.width = width + 'px'
              break
            default:
              console.log(event.data)
              break
          }
        }
      }
    },
  } as Window['OGWidgets']

  if (!window.OGWidgets) {
    OGWidgets.init()
    window.onload = () => OGWidgets.init()
    window.OGWidgets = OGWidgets
  }
})(window)
