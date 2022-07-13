import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { send } from 'src/utils/messenger'
import { useEmbedSize } from 'src/hooks/useEmbedSize'
import { EmbedIdMessage, EmbedSizeMessage } from 'src/types'
import { useId } from 'src/hooks/useId'

export const WidgetWrapper: FunctionComponent = ({ children }) => {
  const { width, height } = useEmbedSize()
  useEffect(() => {
    if (width && height) {
      send({ type: 'size', id: window.frameElement?.id, width, height } as EmbedSizeMessage, { target: window.parent })
    }
  }, [width, height])

  return <Fragment>{children}</Fragment>
}
