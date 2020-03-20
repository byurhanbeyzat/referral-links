export * from './useFetch'

export const extractHostname = url => {
  let host

  console.log(url)

  if (url.indexOf('//') > -1) {
    host = url.split('/')[2]
  } else {
    host = url.split('/')[0]
  }

  // find & remove port number
  host = host.split(':')[0]
  // find & remove "?"
  host = host.split('?')[0]

  return host
}
