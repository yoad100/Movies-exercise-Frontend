class MovieInstance{
	name;
	category;
	rating;
	imageUrl;

	constructor(name,category,rating,imageUrl){
		this.name = name;
		this.category = category;
		this.rating = rating;
		this.imageUrl = imageUrl;
	}

	validateMovieName(name,movies){
		if(movies.find(movie => movie.name == name)){
			return false;
		}
		return true;
	}
}

export default MovieInstance