const apiKey = '69783c44-3f17-471a-9538-5a21bc231b5d'

export const getCatBreeds = async (currentPage, limit = 5) => {
  if (typeof currentPage !== 'number') {
    throw new Error('getCatBreeds 함수의 currentPage 파라미터는 number 이어야 한다.')
  }
  if (typeof limit !== 'number') {
    throw new Error('getCatBreeds 함수의 limit 파라미터는 number 이어야 한다.')
  }

  const response = await fetch(`https://api.thecatapi.com/v1/breeds?page=${currentPage}&limit=${limit}`, {
    headers: {
      'x-api-key': apiKey,
    },
  })
  const breeds = await response.json()

  return breeds
}

export const catApiUrl = ' https://api.thecatapi.com/v1'
export const catHeaders = {
  'x-api-key': apiKey,
}
