import {
    BASIC_STYLE, IMAGE_STYLE, INPUT_STYLE, LABEL_STYLE, MOVIE_LIST_STYLE, MOVIE_STYLE, SEARCH_CHECKBOX_STYLE,
    SEARCH_GROUP_STYLE, SEARCH_STYLE, STYLE_TAG, CONTAINER_STYLE, HEADER_STYLE, HIDDEN_STYLE, VISIBLE_STYLE
} from "./utils.js";
import {selectedHeader, selectedList} from "./index.js";

let styleContainer;
const STYLES = [
    MOVIE_LIST_STYLE,
    MOVIE_STYLE,
    IMAGE_STYLE,
    SEARCH_STYLE,
    LABEL_STYLE,
    INPUT_STYLE,
    SEARCH_CHECKBOX_STYLE,
    SEARCH_GROUP_STYLE,
    CONTAINER_STYLE,
    HEADER_STYLE
];

export function buildStyle() {
    styleContainer = document.createElement(STYLE_TAG);
    styleContainer.innerHTML = BASIC_STYLE;
    addStyles(STYLES);
    return styleContainer;
}

function addStyles(styles) {
    styles.forEach(style => addStyle(style));
}

function addStyle(style) {
    styleContainer.innerHTML += style;
}

export const showSelected = event => {
    if (!event.target.checked) {
        selectedList.style.visibility = HIDDEN_STYLE;
        selectedHeader.style.visibility = HIDDEN_STYLE;
    } else {
        selectedList.style.visibility = VISIBLE_STYLE;
        selectedHeader.style.visibility = VISIBLE_STYLE;
    }
}