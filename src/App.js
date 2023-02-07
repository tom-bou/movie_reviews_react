import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//9e857590

const API_URL =  "http://www.omdbapi.com?apikey=9e857590"


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(API_URL + "&s=" + title);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {searchMovies('Spiderman')}, []);

    return (
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchValue)} />
            </div>

            {movies?.length > 0
                ? 
                <div className="container"> 
                    {movies.map((movie) => (<MovieCard movie={movie} />))}
                </div>
                : 
                <div className="empty">
                    <h2>No movies found</h2>
                </div>}

    
                
        </div>

    );
}

export default App;