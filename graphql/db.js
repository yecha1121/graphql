import axios from "axios" //<--node-fetch
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESSTION_URL = `${BASE_URL}movie_suggestions.json`

export const getMovies = async(limit, rating) => {
    const{
        data:{
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL,{
        params:{
            limit,
            rating
        }
    });
    return movies;
};

export const getMovie = async id =>{
    const{
        data: {
            data:{movie}
        }
    } = await axios(MOVIE_DETAILS_URL,{
        params: {
            movie_id: id
        }
    });
    return movie;
}

export const getSuggestions = async id =>{
    const{
        data:{
            data: {movies}
        }
    } = await axios(MOVIE_SUGGESSTION_URL,{
        params:{
            movie_id: id
        }
    })
    return movies;
}