import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
export const Snippet: FunctionComponent<{ code: string; onCopy?: (text: string) => void }> = ({ code, onCopy }) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>()
  const [focused, setFocused] = useState<boolean>(false)
  const onFocus = async (e: FocusEvent) => {
    const target = e.target as HTMLTextAreaElement
    setFocused(true)
    try {
      await navigator.clipboard.writeText(target.value)
    } catch (e) {
      onCopy?.(target.value)
    }
  }
  useEffect(() => {
    if (focused) {
      textAreaRef.current?.blur()
      setFocused(false)
    }
  }, [setFocused, focused])
  return (
    <div class={`snippet-preview${focused ? ' snippet-preview--focused' : ''}`}>
      <div class="snippet-preview__info">Copied!</div>
      <textarea
        readonly={true}
        class="snippet-preview__textarea"
        ref={(ref) => (textAreaRef.current = ref)}
        onFocus={onFocus}
        cols={80}
        rows={7}
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></textarea>
    </div>
  )
}
