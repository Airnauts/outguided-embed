import { EMBED_SCRIPT } from 'src/config/Widgets'
import { SnippetLinkFunction } from 'src/types'

export const getSnippetLink: SnippetLinkFunction = (url, label = 'Powered by outguided.com', { data = {}, withEmbedCode } = {}) => {
  const attributeString = Object.keys({ ...data, widget: '' })
    .map((key) => ` data-og-${key}${data[key] ? `="${data[key]}"` : ''}`)
    .join('')
  return `<a href="${url}"${attributeString}>${label}</a>${withEmbedCode ? EMBED_SCRIPT : ''}`
}

export const getId = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '')
