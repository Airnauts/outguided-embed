import { MessageListenerCallback, MessageSender } from 'src/types'

export const send: MessageSender = (data, options) => {
  const { target, targetOrigin = '*' } = options ?? {}
  ;(target || window).postMessage(data, targetOrigin)
}

export const register = (listener: MessageListenerCallback) => {
  window.addEventListener('message', listener, false)
}

export const unregister = (listener: MessageListenerCallback) => {
  window.removeEventListener('message', listener, false)
}
