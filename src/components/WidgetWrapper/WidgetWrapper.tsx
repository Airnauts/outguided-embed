import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { send } from 'src/utils/messenger'
import { useEmbedSize } from 'src/hooks/useEmbedSize'
import { EmbedSizeMessage } from 'src/types'

export const WidgetWrapper: FunctionComponent = ({ children }) => {
  const { width, height } = useEmbedSize()
  useEffect(() => {
    if (width && height) {
      send({ type: 'size', width, height, name: window.name } as EmbedSizeMessage, { target: window.parent })
    }
  }, [width, height])

  return <Fragment>{children}</Fragment>
}
