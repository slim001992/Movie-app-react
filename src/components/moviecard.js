
import React from 'react'
import Rating from './rating';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({ movie : { title  , rating , image , year }  }) {
  return (

    <div class="flip-card col-md-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div className="movie-image" style={{ backgroundImage: `url('${image ? image : "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"}')` }} />
        </div>
        <div class="flip-card-back">
          <h3>{title}</h3>
          <span><Rating count={rating} /> </span>
          <p>{year}</p>
        </div>
      </div>
    </div>

  )
}
export default MovieCard
