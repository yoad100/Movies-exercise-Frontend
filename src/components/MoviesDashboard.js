import React,{useContext, useEffect, useState} from 'react'
import Movie from './Movie';
import MoviePresentation from './MoviePresentation';
import { MoviesContext } from '../MoviesContext'
import Button from '@mui/material/Button';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import PostModal from '../postMovieModal/PostModal';

function MoviesDashboard() {
  const {movies,handleWithModal} = useContext(MoviesContext)
  const [chosenMovie,setChosenMovie] = useState(null)
  const [isGalleryMode,setIsGalleryMode] = useState(true)
  
  const presentMovie = (movie)=>{
	if(movie){
		setChosenMovie(movie)
		setIsGalleryMode(false)
	}
  }
  const switchToGallery = () =>{
	setIsGalleryMode(true)
  }

  if(isGalleryMode) 
  return (
	<div>
		<h1 id="app_title">Most popular movies</h1>
		{movies&&<div id="movies_dashboard_container">
			{movies.getMovies().map((movie,index) => <Movie index={index+1} key={index} name={movie.name} onClick={()=>presentMovie(movie)} category={movie.category} imageUrl={movie.imageUrl}/>)}
		</div>}
		<Button id="movies_dashboard_addMovie" onClick={handleWithModal} variant="contained" color={'primary'} endIcon={<MovieFilterIcon />}>
			Add movie
		</Button>
		<PostModal/>
	</div>
  )
  else return(
	  <MoviePresentation switchToGallery={switchToGallery} movie={chosenMovie}/>
  )
}

export default MoviesDashboard