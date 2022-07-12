import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { sendToParent } from 'src/utils/messenger'
import { useEmbedSize } from 'src/hooks/useEmbedSize'
import { EmbedSizeMessage } from 'src/types'

export const Widget: FunctionComponent = ({ children }) => {
  const { width, height } = useEmbedSize()
  useEffect(() => {
    if (width && height) {
      sendToParent({ type: 'size', width, height } as EmbedSizeMessage)
    }
  }, [width, height])

  return <Fragment>{children}</Fragment>
}
