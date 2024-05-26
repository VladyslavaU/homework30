import {renderApp, addMovieToList, clearSelection} from "./dom_builder.js";
import {ENTER, MOVIE_LIST_SELECTED, MOVIES_RESULT, NO_DATA_ERROR, SELECTED_HEADER} from "./utils.js";

let searchLast = '';
const API = 'https://www.omdbapi.com/?apikey=18b8609f&s=';

const debounceTime = (() => {
    let timer = null;
    return (cb, ms) => {
        if (timer) {
            clearInterval(timer);
        }
        timer = setTimeout(() => {
            cb();
        }, ms);
    }
})();

export const inputSearchHandler = e => {
    debounceTime(() => {
        const searchString = e.target.value.trim();
        if ((searchString.length > 3 && !searchString !== searchLast) || e.key === ENTER) {
            clearSelection();
            getData(`${API}${searchString}`)
                .then(data => data.forEach(movie => addMovieToList(movie)))
                .then(err => console.log(err));
            searchLast = searchString;

        }
    }, 2000)

}

const getData = url => fetch(url)
    .then(res => res.json())
    .then(json => {
        if (!json || !json.Search) {
            throw Error(NO_DATA_ERROR);
        }
        return json.Search
    });

renderApp();
export const movieList = document.querySelector(`.${MOVIES_RESULT}`);
export const selectedList = document.querySelector(`${MOVIE_LIST_SELECTED}`);
export const selectedHeader = document.querySelector(`.${SELECTED_HEADER}`);

