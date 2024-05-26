export const BODY = 'container';
export const TITLE = 'Movie search engine';
export const SELECTED_MOVIES_HEADER = 'Selected Movies';
export const SEARCH = 'search';
export const MOVIE_LIST = 'movies';
export const MOVIE = 'movie';
export const MOVIE__IMAGE = 'movie__image';
export const MOVIE_LIST_SELECTED = '.movies--selected';
export const SELECTED_HEADER = 'header--selected';
export const MOVIES_RESULT = 'movies--result';
export const MOVIES_SELECTED = 'movies--selected';
export const GROUP = 'group';
export const SEARCH_BAR_LABEL = 'movie search';
export const SEARCH_BAR_PLACEHOLDER = 'Start to type a movie name...';
export const PLACEHOLDER_ATTR = 'placeholder';
export const CHECKBOX_LABEL = 'display list';
export const ADD_CHECKBOX_LABEL = 'add to selected';
export const REMOVE_CHECKBOX_LABEL = 'remove from selected';
export const HEADER = 'header';
export const CLASS_ATTR = 'class';
export const INPUT_TAG = 'input';
export const INPUT_LISTENER = 'input';
export const KEYDOWN_LISTENER = 'keydown';
export const ENTER = 'Enter';
export const DEFAULT_TAG = 'div';
export const INPUT_TYPE_CHECKBOX = 'checkbox';
export const INFO = 'info';
export const INPUT_TYPE_TEXT = 'text';
export const CLICK_LISTENER = 'click';
export const HEADER_TAG = 'h';
export const IMAGE_TAG = 'img';
export const LABEL_TAG = 'label';
export const IMAGE_SOURCE_ATTR = 'src';
export const IMAGE_PLACEHOLDER_ATTR = 'alt';
export const IMAGE_TITLE_ATTR = 'title';
export const NO_NAME_PLACEHOLDER = 'No name';
export const TYPE_ATTR = 'type';
export const ID_ATTR = 'id';
export const FOR_ATTR = 'for';
export const MAIN_HEADER = 1;
export const SUBHEADER = 2;
export const STYLE_TAG = 'style';
export const LINK_REGEX = /(http|https):\/\//;
export const NO_IMAGE_PATH = 'no_image.png';
export const BLOCK_ELEMENT_SPLITTER = '__';
export const ELEMENT_MODIFIER_SPLITTER = '--';
export const CLASS_SPLITTER = '-';
export const NO_DATA_ERROR = 'No data';
export const HIDDEN_STYLE = 'hidden';
export const VISIBLE_STYLE = 'visible';
export const BASIC_STYLE = `
* {
    box-sizing: border-box;
}

html {
   overflow-y: scroll;
   font-size: 20px;
}

body {
  margin: 0;
}`;

export const CONTAINER_STYLE = `
container{
        display: block;
        margin: 0 10px;
}

@media (max-width: 500px) {
    container {
        margin: 0 20px;
    }
}`;

export const HEADER_STYLE = `
@media (max-width: 500px) {
    .header {
        font-size: 1.5em;
    }
}`;

export const MOVIE_LIST_STYLE = `
.movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    align-items: start;
}

@media (max-width: 500px) {
    .movies {
        grid-template-columns: 1fr; 
        gap: 10px; /* Reduce gap between movies */
        justify-items: center;
    }
}`;

export const MOVIE_STYLE = `
.movie {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: flex-end;
}

@media (max-width: 600px) {
    .movie {
            align-items: center;
            width: 100%; 
    }
}`;

export const IMAGE_STYLE = `
.movie__image {
    width: 200px;
    height: 300px;
    object-fit: cover;
}`;
export const SEARCH_STYLE = `
.search {
    margin-bottom: 30px;
}`;

export const LABEL_STYLE = `
.search__label--text {
    display: block;
    margin-bottom: 7px;
}`;

export const INPUT_STYLE = `
.search__text {
    display: block;
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid lightsteelblue;
}

@media (max-width: 480px) {
    .search__text {
        font-size: 0.9em; /* Adjust search input font size for smaller screens */
    }
}`;

export const SEARCH_CHECKBOX_STYLE = `
.search__label--checkbox {
    font-size: 0.8rem;
    user-select: none;
}`;

export const SEARCH_GROUP_STYLE = `
.search__group--text {
    margin-bottom: 7px;
}`;
