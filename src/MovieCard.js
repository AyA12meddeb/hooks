import React from 'react'
import "./moviecard.css"
const MovieCard = ({movie}) => {
  return (
    <div>
      <div className="movie-card">
    <div className="container">
      <a href="#">
        <img
          src={movie.posterURL}
          alt="cover"
          className="cover"
        />
      </a>
      <div className="hero" >
        <div className="details">
          <div className="title1">
           {movie.title}
          </div>
          <div className="title2">{movie.description}</div>
          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
            <input
              type="radio"
              id="star4half"
              name="rating"
              defaultValue="4 and a half"
            />
            <label
              className="half"
              htmlFor="star4half"
              title="Pretty good - 4.5 stars"
            />
            <input
              type="radio"
              id="star4"
              name="rating"
              defaultValue={4}
              defaultChecked=""
            />
            <label
              className="full"
              htmlFor="star4"
              title="Pretty good - 4 stars"
            />
            <input
              type="radio"
              id="star3half"
              name="rating"
              defaultValue="3 and a half"
            />
            <label
              className="half"
              htmlFor="star3half"
              title="Meh - 3.5 stars"
            />
            <input type="radio" id="star3" name="rating" defaultValue={3} />
            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
            <input
              type="radio"
              id="star2half"
              name="rating"
              defaultValue="2 and a half"
            />
            <label
              className="half"
              htmlFor="star2half"
              title="Kinda bad - 2.5 stars"
            />
            <input type="radio" id="star2" name="rating" defaultValue={2} />
            <label
              className="full"
              htmlFor="star2"
              title="Kinda bad - 2 stars"
            />
            <input
              type="radio"
              id="star1half"
              name="rating"
              defaultValue="1 and a half"
            />
            <label
              className="half"
              htmlFor="star1half"
              title="Meh - 1.5 stars"
            />
            <input type="radio" id="star1" name="rating" defaultValue={1} />
            <label
              className="full"
              htmlFor="star1"
              title="Sucks big time - 1 star"
            />
            <input
              type="radio"
              id="starhalf"
              name="rating"
              defaultValue="half"
            />
            <label
              className="half"
              htmlFor="starhalf"
              title="Sucks big time - 0.5 stars"
            />
          </fieldset>
          <span className="likes">109 likes</span>
        </div>{" "}
        {/* end details */}
      </div>{" "}
      {/* end hero */}
      <div className="description">
        <div className="column1">
          <span className="tag">action</span>
          <span className="tag">fantasy</span>
          <span className="tag">adventure</span>
        </div>{" "}
        {/* end column1 */}
        <div className="column2">
          <p>
          Dans une maison isolée chargée de souvenirs, Macha revient dans son village natal après des années d'absence. En explorant les secrets de sa famille, elle découvre des indices troublants sur la disparition de sa sœur jumelle. Entre réalité et hallucinations, Macha devra affronter son passé pour découvrir une vérité qu’elle aurait préféré oublier.{" "}
            <a href="#">read more</a>
          </p>
 
          {/* end avatars */}
        </div>{" "}
        {/* end column2 */}
      </div>{" "}
      {/* end description */}
    </div>{" "}
    {/* end container */}
  </div>{" "}
  {/* end movie-card */} 
  
</div>
  )
}
export default MovieCard
