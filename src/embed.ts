import { getEmbedUrl, getExternalUrl, hostLink, tripLink } from './config/Routes'
import { EmbedMessage, EmbedSizeMessage, MessageListener } from './types'
import { register } from './utils/messenger'
declare global {
  interface Window {
    OGWidgets: {
      processedWidgets: HTMLElement[]
      listeners: MessageListener[]
      listenersRegistered: boolean
      registerListeners: () => void
      getWidgetsToInitialize: () => HTMLElement[]
      getWidgetCallbackUrl: (type: string, params: { trip?: string; guide?: string }) => string | undefined
      isValidWidgetElement: (element: HTMLElement) => boolean
      initializeWidget: (element: HTMLElement) => void
      addListener: (listener: MessageListener) => void
      getWidgetListener: (element: HTMLElement, iframe: HTMLIFrameElement) => MessageListener
      init: () => void
    }
  }
}

;(function (window) {
  const OGWidgets = {
    processedWidgets: [],
    listeners: [],
    listenersRegistered: false,
    addListener: function (listener: MessageListener) {
      this.listeners.push(listener)
    },
    registerListeners: function () {
      if (!this.listenersRegistered) {
        register((ev) => {
          this.listeners.forEach((listener) => listener(ev))
        })
        this.listenersRegistered = true
      }
    },
    isValidWidgetElement: function (element) {
      if (!element.getAttribute('href')?.startsWith(getExternalUrl())) {
        return false
      }

      if (!element.dataset.ogWidget) {
        return false
      }

      return true
    },
    getWidgetListener: function (element, iframe) {
      return (event) => {
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
      }
    },
    getWidgetCallbackUrl: function (name, { trip, guide }) {
      let url
      switch (name) {
        case 'trip':
          url = trip && getEmbedUrl(tripLink(trip))
          break
        case 'guide':
          url = guide && getEmbedUrl(hostLink(guide))
          break
      }
      return url
    },
    getWidgetsToInitialize: function () {
      return Array.from(document.querySelectorAll('[data-og-widget]') as NodeListOf<HTMLElement>).filter(
        (widget) => !this.processedWidgets.includes(widget)
      )
    },
    initializeWidget: function (element) {
      this.processedWidgets.push(element)

      if (!this.isValidWidgetElement(element)) {
        return
      }

      const { ogWidget, ogTrip, ogGuide } = element.dataset
      const url = this.getWidgetCallbackUrl(ogWidget!, { trip: ogTrip, guide: ogGuide })
      if (!url) {
        return
      }

      const iframe = document.createElement('iframe')
      iframe.src = url
      iframe.style.border = 'none'
      iframe.style.width = '0px'
      iframe.style.height = '0px'
      iframe.style.overflowX = 'hidden'
      iframe.style.overflowY = 'hidden'
      iframe.style.display = 'block'

      this.addListener(this.getWidgetListener(element, iframe))

      element.after(iframe)
      element.style.display = 'none'
    },
    init: function () {
      this.registerListeners()
      this.getWidgetsToInitialize().forEach(this.initializeWidget.bind(this))
    },
  } as Window['OGWidgets']

  if (!window.OGWidgets) {
    window.onload = () => OGWidgets.init()
    window.OGWidgets = OGWidgets
  }
})(window)
