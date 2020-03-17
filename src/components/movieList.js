import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './moviecard';
import Movieadd from './movieadd';

function MovieList(props) {
    return (
        <div className="row">
            {props.films.map((film, i) => (
                <MovieCard key={i} movie={film} />
            ))}
          <Movieadd addMovie={props.addMovie} />
        </div>
    )
}

export default MovieList;


