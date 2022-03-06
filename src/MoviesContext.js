import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInstance from './model/MovieInstance'
import MoviesArray from "./model/MoviesArray";

export const MoviesContext = React.createContext();

const MoviesContextProvider = (props) => {
const [movies,setMovies] = useState(null)
const [isMoviesModalOpen,setIsMoviesModalOpen] = useState(false)
const [alertMessage,setAlertMessage] = useState("")

const addMovie = (movie) => {
	let result = MoviesArray.instance.addMovie(movie);
	if(result.success){
		let movieToInsert = MoviesArray.instance.getMovies().find(movie => movie.name == result.inserted)
		if(movieToInsert){
			const reqParams = {
				movieName : movieToInsert.name,
				movieCategory : movieToInsert.category,
				movieRating : movieToInsert.rating,
				movieImageUrl : movieToInsert.imageUrl,
				deletedMovie : result.deleted
			}
			axios.post('http://localhost:8000/addMovie',reqParams)
			.then(res=>console.log(res))
			.catch(err=>console.log(err))
		}
		return true;
	}
	else if(result.error){
		setAlertMessage(result.error)
		return false;
	}
}

//control the modal visibility
const handleWithModal = () => {
	setAlertMessage("")
	setIsMoviesModalOpen(prev => !prev)
}

// fetch the data from the server
useEffect(async ()=>{
let result = await axios.get('http://localhost:8000/getMovies');
if(result){
	let moviesArr = []
	result.data.forEach(element => {
		moviesArr.push(new MovieInstance(element.movieName,element.movieCategory,element.movieRating,element.movieImageUrl))
	});
	setMovies(new MoviesArray(moviesArr))
}
else{
	console.log("IO problem");
}
},[])
	return (
		<MoviesContext.Provider
		value={{
			 movies:movies
			,handleWithModal:handleWithModal
			,isMoviesModalOpen:isMoviesModalOpen
			,addMovie:addMovie
			,alertMessage:alertMessage
		}}
		>
			{props.children}
		</MoviesContext.Provider>
	)
}

export default MoviesContextProvider;