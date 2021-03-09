import axios from 'axios';
import React, { useEffect, useState } from 'react'
import searchSvg from './search.svg'
import movieSvg from './movie.svg'
import './style.css';

const searchFieldInputStyle = {
    outline: 'none',
    border: 'none',
    fontSize: 14,
    padding: 30,
    flex: 1,
    color: '#5a5a5a',
    fontWeight: 100,
    height: 33,
};

const MoviesSearch = () => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=95d1df440a077090e0f82bd2b943c8c3&query="
    const [searchTerm, setSearchTerm] = useState('')
    const [movieList, setMovieList] = useState([])
    const [singleMovie, setSingleMovie] = useState('')
    const [loadingMovieList, setLoadingMovieList] = useState(false)
    const [showMovieList, setShowMovieList] = useState(false)

    const handleMovie = (title) => {
        setSearchTerm(title)
        setShowMovieList(false)

    }

    useEffect(() => {
        if (searchTerm.length > 2) {
            axios.get(url + searchTerm).then((response) => {
                setMovieList(response.data.results)
            })
            setShowMovieList(true)
        }
        else setMovieList([])
        console.log(searchTerm)
    }, [searchTerm])


    return (
        <div>
            <div class="container grads">
                <div class="row">
                    <div className="col-12">
                        <div id="custom-search-input">
                            <div className="input-group">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    className="search-query form-control"
                                    placeholder="Enter movie name"
                                    onChange={e => setSearchTerm(e.target.value)} />
                                <span className="input-group-btn">
                                    <button type="button" disabled>
                                        <span ><img className="img-search" src={searchSvg} alt="" /></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            {showMovieList ? movieList.slice(0, 8)
                                .map((movie, index) => <div key={index} onClick={() => handleMovie(movie.title)}>
                                    <li className="list-group-item" ><h3>{movie.title}</h3><p>{movie.vote_average} Rating, {movie.release_date.slice(0, 4)}</p></li></div>) : <span></span>}
                        </ul>
                    </div>
                </div>

            </div>

            <div className="container web-info">
                <div class="row">
                    <div className="col-12">
                    <div className="input-group">
                        <div className="body-section">
                                </div>
                        </div>
                        </div>
                   
                </div>
            </div>

        </div>

    )
}

export default MoviesSearch;