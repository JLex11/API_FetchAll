import fetch from 'node-fetch'

async function fetchAll(urls) {
  const requests = urls.map(url => fetch(url))
  const results = await Promise.allSettled(requests)
  const fullfilledResults = results.filter(result => result.status === 'fulfilled')
  return fullfilledResults.map(result => result.value)
}

export default fetchAll