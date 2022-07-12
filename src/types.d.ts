export interface EmbedMessage {
  type: 'size' | 'other'
}

export interface EmbedSizeMessage extends EmbedMessage {
  type: 'size'
  width: Dimension['width']
  height: Dimension['height']
}

export type Dimension = {
  width: number
  height: number
}
export type MessageSenderOptions = {
  target?: Window
  targetOrigin?: string
}

export type MessageListenerCallback = (event: MessageEvent<EmbedMessage>) => void
export type MessageSender = (data: EmbedMessage, options?: MessageSenderOptions) => void


export type Trip = {
  title: string
  slug: string
}