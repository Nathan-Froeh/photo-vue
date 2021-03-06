import {accessKey, secretKey} from '../../.env'

export const getSearch = async (searchType, pageNum) => {
  const method = {
    method: 'GET',
    headers: {
      'Accept-Version': 'v1',
      'Content-Type': 'application/json',
      'Authorization': `Client-ID ${accessKey}`,
  },
  }

  return await fetch(`https://api.unsplash.com/search/photos?query=${searchType}&orientation=landscape&page=${pageNum}`, method)
    .then(res => res.json())
    .then(data => data.results)
    .catch(error => error)
}