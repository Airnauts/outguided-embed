import { h, Fragment, FunctionComponent, cloneElement, ComponentChildren, VNode } from 'preact'
import { useEffect } from 'preact/hooks'
import { send } from 'src/utils/messenger'
import { useEmbedSize } from 'src/hooks/useEmbedSize'
import { EmbedCopyMessage, EmbedSizeMessage } from 'src/types'

export const WidgetWrapper: FunctionComponent<{ children: VNode }> = ({ children }) => {
  const { width, height } = useEmbedSize()
  useEffect(() => {
    if (width && height) {
      send({ type: 'size', width, height, name: window.name } as EmbedSizeMessage, { target: window.parent })
    }
  }, [width, height])

  const onCopy = (text: string) => {
    send({ type: 'copy', text, name: window.name } as EmbedCopyMessage, { target: window.parent })
  }
  return <Fragment>{cloneElement(children, { onCopy })}</Fragment>
}
