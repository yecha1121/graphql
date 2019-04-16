export let movielist = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather 1",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    },
];

//export const getMovies = () => movies; //여기서 왜 에러가 뜰까?? 



export const getById = id => {
    const filteredMovies = movielist.filter(movie => movie.id === id);
    return filteredMovies[0]
}

export const deleteMovie = (id) => {
    const cleanedMovies = movielist.filter(movie => movie.id !== id);
    if (movielist.length > cleanedMovies.length) {
        movielist = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name,score) => {
    const newMovie = {
        id: `${movielist.length + 1}`,
        name,
        score
    };
    movielist.push(newMovie);
    return newMovie
}
