import { h } from 'preact'
import { FunctionComponent } from 'preact'

export const Button: FunctionComponent<{ href: string }> = ({ href, children }) => {
    return (
        <a className={'button'} href={href} target="_blank">
            {children}
        </a>
    )
}
