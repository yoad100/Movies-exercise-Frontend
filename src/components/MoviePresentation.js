import React from 'react'
import Chip from '@mui/material/Chip';
import ResponsiveImgMaterialUi from 'responsive-img-material-ui';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function MoviePresentation({movie,switchToGallery}) {
	const {name,category,rating,imageUrl} = movie
	return (
		<div  id="movie_presentation_container">
		<Button id="movie_presentation_back" onClick={switchToGallery} variant="contained" color={'primary'} endIcon={<ArrowForwardIosIcon />}>
			Back
		</Button>
		<h1 id="movie_presentation_title">{name}</h1>
		<div>
			<Chip label={category} variant="outlined" id="movie_presentation_chip"/>
			<ResponsiveImgMaterialUi style={{maxHeight:'700px',width:'100%'}} xs={imageUrl} md={imageUrl} lg={imageUrl} />
		</div>
		<p id="movie_presentation_rating">👑 Rating : {rating}/100</p>
	</div>

  )
}

export default MoviePresentation