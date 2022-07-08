import { h } from 'preact'
import { FunctionComponent } from 'preact'

export const Button: FunctionComponent<{ href?: string; onClick?: () => void }> = ({ href, children, onClick }) => {
    const Component = href ? 'a' : 'button'
    return (
        <Component className={'button'} href={href} target={href ? '_blank' : undefined} onClick={onClick}>
            {children}
        </Component>
    )
}
