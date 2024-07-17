"use client"
import React, { useEffect, useState } from 'react'
import CardMovie from '../molecule/CardMovie'
import { getMovie } from '@/service/api/TMDB'

function NowPlayingPage() {
    const [movies, setMovies] = useState<any[]>([])

  const getData = () => {
    const params = {
      page: '1',
    }
    getMovie(params, 'top_rated').then((res: any) => {
      if (res.status === 'success') {
        setMovies(res.data.results)
      } else {
        setMovies([])
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(movies)

  return (
    <div className='flex -mx-2'>
        {movies.map((movie: any) => (
            <div className='w-full gap-5 px-2'>

                <CardMovie data={movie} />
            </div>
        ))
        }
    </div>
  )
}

export default NowPlayingPage