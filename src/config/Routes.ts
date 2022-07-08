export const TRIP_PAGE = '/experiences/:slug'
export const HOST_PAGE = '/guides/:slug'
export const tripLink = (slug: string) => TRIP_PAGE.replace(':slug', slug)
export const hostLink = (slug: string) => HOST_PAGE.replace(':slug', slug)
export const getEmbedPath = (path: string) => `/embed${path}`
export const getEmbedUrl = (path: string) => `${process.env.EMBED_URL}/#${getEmbedPath(path)}`
export const getExternalUrl = (path: string = '') => `${process.env.SITE_URL}${path}`
