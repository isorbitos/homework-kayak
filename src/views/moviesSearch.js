import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MoviesSearch = () => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=95d1df440a077090e0f82bd2b943c8c3&query="
    const [searchTerm, setSearchTerm] = useState('')
    const [movieList, setMovieList] = useState([])
    const [singleMovie, setSingleMovie] = useState('')
    const [loadingMovieList, setLoadingMovieList] = useState(false)

    const handleMovieList = () =>{ 

    }

    useEffect(()=>{
        if(searchTerm.length>2){
            axios.get(url+searchTerm).then((response) =>{
             setMovieList(response.data.results)
         }) 
        }
        else setMovieList([])
        console.log(searchTerm)
    }, [searchTerm])


    return(
        <div>
            <input type="text" value={searchTerm} placeholder="Enter movie name" onChange={e=> setSearchTerm(e.target.value)}/>
           {movieList.map(movie=> <h1 key={movie.id}>{movie.title}</h1>)}
        </div>
    )
}

export default MoviesSearch;