import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'

const Row = ({title, fetchUrl, rowId}) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchUrl).then((resp)=> {
      setMovies(resp.data.results)
    })
  }, [fetchUrl])

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group' >
        <Carousel movies={movies} rowId={rowId}/>
      </div>
    </>
  )
}

export default Row