import 'isomorphic-fetch'

export const fetcher = async <T>(input: string, options?: RequestInit): Promise<T> => {
  let result = await fetch(`${process.env.BACKEND_URL}${input}`, options)
  if (!result.ok) {
    throw new Error(result.statusText)
  }
  return await result.json()
}
