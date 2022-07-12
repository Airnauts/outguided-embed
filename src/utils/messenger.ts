import { MessageListener, MessageSender } from 'src/types'

export const sendToParent: MessageSender = (
  data,
  options = {
    targetOrigin: '*',
  }
) => {
  window.parent.postMessage(data, options.targetOrigin)
}

export const send: MessageSender = (
  data,
  options = {
    targetOrigin: '*',
  }
) => {
  window.postMessage(data, options.targetOrigin)
}

export const register = (listener: MessageListener) => {
  window.addEventListener('message', listener, false)
}

export const unregister = (listener: MessageListener) => {
  window.removeEventListener('message', listener, false)
}
