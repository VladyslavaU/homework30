import {
    ADD_CHECKBOX_LABEL,
    BLOCK_ELEMENT_SPLITTER, CLICK_LISTENER,
    ELEMENT_MODIFIER_SPLITTER,
    INPUT_TYPE_CHECKBOX,
    LABEL_TAG, MOVIE_LIST_SELECTED, REMOVE_CHECKBOX_LABEL
} from "./utils.js";
import {getCheckboxById, updateLabelOnSelectionChange} from "./markup_builder.js";
import {selectedList} from "./index.js";

export const addToSelected = event => {
    const title = getMovieClass(event.target.className);
    updateLabelOnSelectionChange(getLabelId(title), REMOVE_CHECKBOX_LABEL);
    const checkbox = getCheckboxById(title);

    const clonedMovie = document.querySelector(`.${title}`).cloneNode(true);
    const clonedCheckbox = clonedMovie.querySelector(`#${title}-${INPUT_TYPE_CHECKBOX}`);

    updateSelectedMovieListener([checkbox, clonedCheckbox], CLICK_LISTENER, addToSelected, removeFromSelected);
    selectedList.append(clonedMovie);
}

export const removeFromSelected = event => {
    const title = getMovieClass(event.target.className);
    updateLabelOnSelectionChange(getLabelId(title), ADD_CHECKBOX_LABEL);

    const checkbox = getCheckboxById(title);
    updateSelectedMovieListener([checkbox], CLICK_LISTENER, removeFromSelected, addToSelected);

    document.querySelector(MOVIE_LIST_SELECTED).querySelector(`.${title}`).remove();
}

function updateSelectedMovieListener(elements, inputType, oldListener, newListener) {
    elements.forEach(el => {
        el.removeEventListener(inputType, oldListener);
        el.addEventListener(inputType, newListener);
    });
}

function getMovieClass(className) {
    return className.split(`${BLOCK_ELEMENT_SPLITTER}`)[0];
}

function getLabelId(movieClass) {
    return `.${movieClass}${BLOCK_ELEMENT_SPLITTER}${LABEL_TAG}${ELEMENT_MODIFIER_SPLITTER}${INPUT_TYPE_CHECKBOX}`;
}
