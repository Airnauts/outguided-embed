import { h, Fragment, FunctionComponent } from 'preact'
export const Snippet: FunctionComponent<{ code: string }> = ({ code }) => {
  return (
    <textarea
      cols={80}
      rows={7}
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    ></textarea>
  )
}
