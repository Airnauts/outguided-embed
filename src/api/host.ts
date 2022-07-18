import useSWR from 'preact-swr'
import { ConfigInterface, fetcherFn } from 'preact-swr/dist/types'
import { Host } from 'src/types'
import { fetcher } from './fetcher'

const BASE_PATH = `/users`

export const getHostBySlug: fetcherFn<Host | null> = async (slug?: string) => {
  if (!slug) {
    return null
  }

  return await fetcher(`${BASE_PATH}/slug/${slug}`)
}

export const useHostBySlug = (slug?: string, options: ConfigInterface<Host | null> = {}) => {
  return useSWR(getHostBySlugKey(slug), () => getHostBySlug(slug), options)
}
export const getHostBySlugKey = (slug?: string) => 'trips' + slug
