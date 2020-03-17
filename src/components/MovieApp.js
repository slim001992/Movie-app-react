import React, { Component } from "react";
import MovieList from "./movieList";
import Navbar from "./Navbar";

class MovieApp extends Component {
    state = {
        minRating: 1,
        search: "",
        films: [
            { title: 'Inception', rating: 4, image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', year: 2010 },
            { title: 'Shawshank redemption', rating: 2, image: 'https://miro.medium.com/max/1120/1*jDPFk_nRQpNPqFHdTM9SJA.jpeg', year: 1994 },
            { title: 'Blade Runner', rating: 3, image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png', year: 2017 },
            { title: 'Da Vinci Code', rating: 5, image: 'https://fr.web.img6.acsta.net/medias/nmedia/18/36/20/56/18613332.jpg', year: 2000 },
        ],
    };

    handleRating = rating => this.setState({ minRating: rating });
    handleSearch = valeur => this.setState({ search: valeur });
    addMovie = (newmovie) => {
        this.setState({
            films: [...this.state.films, newmovie],
        });
        
    }
    render() {
        return (
           <div className='container'>
                <Navbar handleSearch={this.handleSearch}
                    minRating={this.state.minRating}
                    handleRating={this.handleRating} />
         
                <MovieList films={this.state.films.filter(movie => movie.title
                    .toLowerCase().includes(this.state.search.toLowerCase().trim()) &&
                    movie.rating >= this.state.minRating)}  addMovie={this.addMovie} />
     
              </div>
        );
    }
}

export default MovieApp;