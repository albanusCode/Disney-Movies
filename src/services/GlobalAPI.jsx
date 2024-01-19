import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='4fc18540a9ced6bbd4793c4a30d2e33f'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=4fc18540a9ced6bbd4793c4a30d2e33f';

//https://api.themoviedb.org/3/trending/all/day?api_key=4fc18540a9ced6bbd4793c4a30d2e33f
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}