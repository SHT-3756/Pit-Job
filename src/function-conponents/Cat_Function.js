import '../components/Cats.scss'

import React, { useCallback, useEffect, useState } from 'react'
import LoadingIndicator from './LoadingIndicator'
import HeaderButtonGroup from './HeaderButtonGroup'
import { getCatBreeds } from '../utils/api'

function Cat_Function() {
  const [currentPage, setCurrentPage] = useState(1)
  const [breeds, setBreeds] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) {
      return
    }
    setCurrentPage(previousPage => previousPage - 1)
  }, [])

  const handleNextPage = useCallback(() => {
    setCurrentPage(nextPage => nextPage + 1)
  }, [])

  useEffect(() => {
    //didmount, didupdate
    const fetchBreeds = async () => {
      setIsLoading(true)
      const breeds = await getCatBreeds(currentPage, 10)
      setBreeds(prevBreeds => prevBreeds.concat(breeds)) // 그 전꺼와 합쳐라 .
      setIsLoading(false)
    }
    fetchBreeds()
  }, [currentPage])

  return (
    <div className="Cats">
      <p>현재 페이지: {currentPage}</p>
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
      <LoadingIndicator isLoading={isLoading} />
      <ul>
        {breeds.map((breed, index) => (
          <li className="Cat" key={index}>
            <span>Name: {breed.name}</span>
            <span>Origin: {breed.origin}</span>
            <span>Description: {breed.description}</span>
            <span>
              <a href={breed.wikipedia_url} target="_blank">
                {breed.wikipedia_url}
              </a>
            </span>
            <img className="Image" src={breed.image ? breed.image.url : null} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cat_Function
