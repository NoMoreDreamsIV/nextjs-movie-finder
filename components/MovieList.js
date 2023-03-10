

export default function MovieList(props) {
    return (
        <>
            {props.movies.map((movie, _) => 
                <div className="movie-list">
                    <img src={movie.Poster}></img>
                </div>)}
        </>
    )
}