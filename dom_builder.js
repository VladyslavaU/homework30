import {buildStyle, showSelected} from "./style_builder.js";
import {
    createCheckbox,
    createElement,
    createHeader,
    createImage,
    createInputGroup,
    createSearchBar
} from "./markup_builder.js";
import {inputSearchHandler, movieList} from "./index.js";
import {
    ADD_CHECKBOX_LABEL,
    BODY,
    CHECKBOX_LABEL, CLASS_SPLITTER, INFO, INPUT_LISTENER,
    INPUT_TYPE_CHECKBOX,
    INPUT_TYPE_TEXT, KEYDOWN_LISTENER,
    MAIN_HEADER,
    MOVIE,
    MOVIE__IMAGE,
    MOVIE_LIST, MOVIE_LIST_SELECTED,
    MOVIES_RESULT,
    MOVIES_SELECTED,
    NO_NAME_PLACEHOLDER,
    REMOVE_CHECKBOX_LABEL,
    SEARCH,
    SEARCH_BAR_LABEL,
    SEARCH_BAR_PLACEHOLDER,
    SELECTED_HEADER,
    SELECTED_MOVIES_HEADER,
    SUBHEADER,
    TITLE
} from "./utils.js";
import {addToSelected, removeFromSelected} from "./movies.js";


export function buildMarkup() {
    const body = document.createElement(BODY);
    //Title
    body.append(createHeader(TITLE, MAIN_HEADER));
    //search bar container
    const search = createElement(SEARCH);
    //search bar
    const searchBarGroup = createInputGroup(SEARCH, SEARCH_BAR_LABEL, INPUT_TYPE_TEXT,
        createSearchBar(SEARCH, SEARCH_BAR_PLACEHOLDER, inputSearchHandler, [INPUT_LISTENER, KEYDOWN_LISTENER]));
    //display selected movies checkbox
    const checkBoxGroup = createInputGroup(SEARCH, CHECKBOX_LABEL, INPUT_TYPE_CHECKBOX,
        createCheckbox(SEARCH, true, showSelected));
    search.append(searchBarGroup);
    search.append(checkBoxGroup);
    body.append(search);
    //search result
    const movies = createElement(`${MOVIE_LIST} ${MOVIES_RESULT}`);
    body.append(movies);

    //selected movies container
    const selectedTitle = createHeader(SELECTED_MOVIES_HEADER, SUBHEADER, SELECTED_HEADER);
    const selected = createElement(`${MOVIE_LIST} ${MOVIES_SELECTED}`);
    body.append(selectedTitle);
    body.append(selected);
    return body;
}

function getMovieTitle(year, title) {
    return year && title ? `${title} ${year}` : NO_NAME_PLACEHOLDER;
}

export function addMovieToList(movie) {
    if (movie) {
        //get basic info
        const title = getMovieTitle(movie.Year, movie.Title);
        const titleClass = title.replaceAll(/[^\w\s]| /g, CLASS_SPLITTER);
        const existing = movieExistsInSelection(`${titleClass}`);
        //set checkbox values
        let label = existing ? REMOVE_CHECKBOX_LABEL : ADD_CHECKBOX_LABEL;
        let listener = existing ? removeFromSelected : addToSelected;
        let checked = existing;
        //create movie element
        const element = createElement(`${MOVIE} ${titleClass}`);
        const img = createImage(`${MOVIE__IMAGE}`, movie.Poster, title);
        const checkboxGroup = createInputGroup(`${titleClass}`, label, INPUT_TYPE_CHECKBOX,
            createCheckbox(`${titleClass}`, checked, listener));
        const info = createElement(INFO);
        info.innerHTML = `${title} / ${movie.Type}`;

        element.append(checkboxGroup);
        element.append(info);
        element.append(img);
        movieList.append(element);
    }
}

export function movieExistsInSelection(title) {
    return document.querySelector(MOVIE_LIST_SELECTED).querySelector(`.${title}`) !== null;
}

export function clearSelection() {
    console.log(document.querySelector(MOVIE_LIST))
    document.querySelector(`.${MOVIE_LIST}`) && (document.querySelector(`.${MOVIE_LIST}`).innerHTML = '')
}

export const renderApp = () => {
    document.head.append(buildStyle());
    document.body.append(buildMarkup());
}

