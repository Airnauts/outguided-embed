import { h, Fragment, FunctionComponent } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
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
