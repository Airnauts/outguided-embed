import { h, Fragment, FunctionComponent, JSX } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'

export const Snippet: FunctionComponent<{ code: string; onCopy?: (text: string) => void }> = ({ code, onCopy }) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [focused, setFocused] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const onFocus: JSX.EventHandler<JSX.TargetedFocusEvent<HTMLTextAreaElement>> = async ({ currentTarget }) => {
    setFocused(true)
    try {
      await navigator.clipboard.writeText(currentTarget.value)
    } catch (e) {
      onCopy?.(currentTarget.value)
    }
  }

  useEffect(() => {
    if (focused) {
      textAreaRef.current?.blur()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setFocused(false)
      }, 1000)
    }
  }, [setFocused, focused])

  return (
    <div class={`snippet-preview${focused ? ' snippet-preview--focused' : ''}`}>
      <div class="snippet-preview__info" />
      <textarea
        class="snippet-preview__textarea"
        ref={textAreaRef}
        onFocus={onFocus}
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></textarea>
    </div>
  )
}
