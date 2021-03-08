import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MoviesSearch = () => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=95d1df440a077090e0f82bd2b943c8c3&query=spide"
    const [searchTerm, setSearchTerm] = useState('')
    const [movieList, setMovieList] = useState([])
    const [singleMovie, setSingleMovie] = useState('')

    useEffect(()=>{
        axios.get(url).then((response) =>{
            setMovieList(response.data.results)
        })
    }, [])

    // axios.get(url)
    //     .then(response =>{
    //         setMovieList(response.data.results)
    //     }, [])


    return(
        <div>
            <input type="text" value={searchTerm} placeholder="Enter movie name" onChange={e=> setSearchTerm(e.target.value)}/>
           {movieList.map(movie=> <h1>{movie.title}</h1>)}
        </div>
    )
}

export default MoviesSearch;