import useSWR from 'preact-swr'
import { ConfigInterface, fetcherFn } from 'preact-swr/dist/types'
import { Trip } from 'src/types'
import { fetcher } from './fetcher'

const BASE_PATH = `/marketing-pages`

export const getTripBySlug: fetcherFn<Trip | null> = async (slug?: string) => {
  if (!slug) {
    return null
  }

  return await fetcher(`${BASE_PATH}/slug/${slug}`)
}

export const useTripBySlug = (slug?: string, options: ConfigInterface<Trip | null> = {}) => {
  return useSWR(getTripBySlugKey(slug), () => getTripBySlug(slug), options)
}
export const getTripBySlugKey = (slug?: string) => 'trips' + slug
