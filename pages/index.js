import { useEffect, useState } from "react"
import InputBar from "../components/InputBar";
import MovieList from "../components/MovieList"

export default function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearch] = useState('');

    const getMovies = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=eb54659f`;
        const response = await fetch(url),
            responseJson = await response.json();

        if(responseJson.Search) {
            setMovies(responseJson.Search)
        }
    };

    useEffect(() => {
        getMovies(searchValue);
    }, [searchValue]);

    return (
        <div>
            <h1>Movie Finder</h1>
            <InputBar search={searchValue} setSearch={setSearch}/>
            <div className="movie-app">
                <MovieList movies={movies}/>
            </div>
        </div>
    )
}