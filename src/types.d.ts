import { FunctionComponent, ComponentChild, JSX } from 'preact'

export interface EmbedMessage {
  type: 'size' | 'id'
  [key: string]: any
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
  target: Window
  name: string
  targetOrigin?: string
}

export type MessageListenerCallback = (event: MessageEvent<EmbedMessage>) => void
export type MessageSender = (data: EmbedMessage, options?: Partial<MessageSenderOptions>) => void

export type Trip = {
  title: string
  slug: string
}

export type SnippetFunction = ({ slug }: { slug: string }) => string
export type WidgetComponent = FunctionComponent<{ matches: { slug: string } }> & { Code: Element }
export type SnippetLinkFunction = (url: string, label: string, params?: SnippetParams) => string
export type SnippetParams = {
  data?: Record<string, string>
  withEmbedCode?: boolean
}
