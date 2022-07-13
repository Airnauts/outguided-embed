import { useRef } from 'preact/hooks'
import { getId } from 'src/utils/helper'

export const useId = () => {
  const id = useRef(getId())


  return id.current
}
