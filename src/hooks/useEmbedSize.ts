import { useEffect, useState } from 'preact/hooks'
import { Dimension } from 'src/types'

export const useEmbedSize = () => {
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 })

  const onResize = () => {
    if (document?.body.scrollHeight) {
      const height = document?.body.scrollHeight
      const width = document?.getElementById('root')?.children?.[0]?.scrollWidth
      if (width && height) {
        setDimension({ width: width + 4, height })
      }
    }
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })
  return dimension
}
