import { escapeRegExp } from 'src/utils/helper'

export const TRIP_PAGE = '/experiences/:slugOrId'
export const HOST_PAGE = '/guides/:slugOrId'
export const getTripSlugFromUrl = (url: string) => url.match(new RegExp(`^${escapeRegExp(getExternalUrl())}${TRIP_PAGE.replace(':slugOrId', '([^/?]+)')}`))?.[1]
export const getHostSlugFromUrl = (url: string) => url.match(new RegExp(`^${escapeRegExp(getExternalUrl())}${HOST_PAGE.replace(':slugOrId', '([^/?]+)')}`))?.[1]
export const tripLink = (slugOrId?: string | number) => TRIP_PAGE.replace(':slugOrId', slugOrId ? '' + slugOrId : '')
export const hostLink = (slugOrId?: string | number) => HOST_PAGE.replace(':slugOrId', slugOrId ? '' + slugOrId : '')
export const getEmbedPath = (path: string) => `/embed${path}`
export const getEmbedSnippetPath = (path: string) => `/code${path}`
export const getEmbedUrl = (path?: string) => `${process.env.EMBED_URL}${path ? `/#${getEmbedPath(path)}` : ''}`
export const getEmbedSnippetUrl = (path?: string) => `${process.env.EMBED_URL}${path ? `/#${getEmbedSnippetPath(path)}` : ''}`
export const getExternalUrl = (path: string = '') => `${process.env.SITE_URL}${path}`
