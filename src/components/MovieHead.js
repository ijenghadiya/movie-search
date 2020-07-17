import React, {useState} from "react";
import MovieCard from './MovieCard';

const api_key=process.env.REACT_APP_API_KEY;

function MovieHead(){

    const [query,setQuery]=useState('');
    const [movies, setMovies]=useState([]);
    const searchMovies=async(e)=>{
        e.preventDefault();

        const url=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results)

        }catch(err){
            console.error(err);
        }
    
    }
    
    
    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input type="text" 
                    name="query" 
                    value={query} 
                    className="input" 
                    placeholder="i.e. Jurassic Park"
                    onChange={(e)=>setQuery(e.target.value)}    
                >
                </input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
    
}
export default MovieHead;
