class MoviesArray{
	//private field
	#movies = [];
	static instance = null;

	constructor(movies){
		//Singleton design pattern
		if(MoviesArray.instance != null){
			return MoviesArray.instance; 
		}
		if(movies && movies instanceof Array){
			this.#movies = movies;
		}
		MoviesArray.instance = this; 
	}

	addMovie(movie){
		if(this.validateMovie(movie)){
			let minInstanceName = null;
			this.#movies.push(movie);
			if(this.#movies.length>10){
				let min = Number.MAX_VALUE;
				for(let i = 0 ; i < this.#movies.length ;i++){
					if(this.#movies[i].rating < min){
						min = this.#movies[i].rating;
						minInstanceName = this.#movies[i].name;
					}
				}
				this.#movies = this.#movies.filter(movie => movie.name != minInstanceName)	
			}
			if(movie.name == minInstanceName){
				return {error:"movie's rating is too low",success:false};
			}
			return {success:true,inserted:movie.name,deleted:minInstanceName};
		}
		return {error:"movie is already exist",success:false};
	}

	validateMovie(movieToInsert){
		if(this.#movies.find(movie => movieToInsert.name == movie.name)){
			return false;
		}
		return true;
	}

	getMovies(){
		return this.#movies;
	}
}

export default MoviesArray;