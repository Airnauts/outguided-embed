import { getEmbedSnippetUrl, getEmbedUrl, getExternalUrl, getHostSlugFromUrl, getTripSlugFromUrl, hostLink, tripLink } from './config/Routes'
import { EmbedCopyMessage, EmbedMessage, EmbedSizeMessage, MessageListenerCallback } from './types'
import { getId } from './utils/helper'
import { register } from './utils/messenger'
declare global {
  interface Window {
    OGWidgets: {
      processedWidgets: HTMLAnchorElement[]
      listenerCallbacks: MessageListenerCallback[]
      listenerRegistered: boolean
      registerListener: () => void
      getWidgetCallbackUrl: (element: HTMLAnchorElement) => string | undefined
      createIframe: (src: string) => HTMLIFrameElement
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

      const url = this.getWidgetCallbackUrl(element)
      if (!url) {
        return
      }

      const iframe = this.createIframe(url)

      iframe.onload = () => {
        element.remove()
      }
      if (element.dataset.ogCode) {
        iframe.allow = ``
      }
      element.after(iframe)
      this.addListenerCallback(this.getWidgetListenerCallback(iframe))
    },
    getWidgetCallbackUrl: function (element) {
      let url
      const {
        href,
        dataset: { ogCode },
      } = element
      if (getTripSlugFromUrl(href)) {
        url = tripLink(getTripSlugFromUrl(href))
      } else if (getHostSlugFromUrl(href)) {
        url = hostLink(getHostSlugFromUrl(href))
      }
      return url ? (typeof ogCode !== 'undefined' ? getEmbedSnippetUrl(url) : getEmbedUrl(url)) : null
    },
    createIframe: function (src) {
      let iframe: HTMLIFrameElement
      try {
        iframe = document.createElement('<iframe name="' + getId() + '" allow="clipboard-write"></iframe>') as HTMLIFrameElement
      } catch (e) {
        iframe = document.createElement('iframe')
        iframe.name = getId()
      }

      iframe.src = src
      Object.keys(IFRAME_ATTRIBUTES).forEach((attribute) => iframe.setAttribute(attribute, IFRAME_ATTRIBUTES[attribute]))
      Object.keys(IFRAME_STYLES).forEach((style) => iframe.style.setProperty(style, IFRAME_STYLES[style]))
      return iframe
    },
    getWidgetListenerCallback: function (iframe) {
      return (event) => {
        const {
          origin,
          data: { type, name },
        } = event as MessageEvent<EmbedMessage>
        console.log(event);
        if (getEmbedUrl().startsWith(origin) && iframe.name === (event.source as Window)?.name) {
          switch (type) {
            case 'size':
              const { width, height } = event.data as EmbedSizeMessage
              iframe.style.height = height + 'px'
              iframe.style.width = width + 'px'
              break
            case 'copy':
              const { text } = event.data as EmbedCopyMessage
              console.log('copy text', text)
              window.navigator.clipboard.writeText(text)
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
