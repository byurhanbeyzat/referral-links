import { useFetch } from '../utils'
import { getData, getErrorMessage } from './helpers'

export const useReferralLinks = siteName => {
  const query = `query Link($siteName: String!) {
    link(siteName: $siteName) {
      _id
      url
      siteName
    }
  }`

  const { data, error } = useFetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.DB_SECRET_KEY}`,
    },
    body: JSON.stringify({ query, variables: { siteName } }),
  })

  return {
    error,
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
  }
}

export const createReferralLink = async (url, siteName) => {
  const query = `mutation($url: String!, $siteName: String!) {
    createReferralLink(data:{url: $url, siteName: $siteName}) {
      _id
      url
      siteName
    }
  }`

  const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.DB_SECRET_KEY}`,
    },
    body: JSON.stringify({ query, variables: { url, siteName } }),
  })

  const data = res.json()

  return data
}
