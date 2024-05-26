import {
    CLASS_ATTR, CLASS_SPLITTER, CLICK_LISTENER,
    DEFAULT_TAG, FOR_ATTR, GROUP,
    HEADER,
    HEADER_TAG, ID_ATTR,
    IMAGE_PLACEHOLDER_ATTR,
    IMAGE_SOURCE_ATTR,
    IMAGE_TAG,
    IMAGE_TITLE_ATTR,
    INPUT_TAG,
    INPUT_TYPE_CHECKBOX,
    INPUT_TYPE_TEXT, LABEL_TAG,
    LINK_REGEX,
    NO_IMAGE_PATH,
    PLACEHOLDER_ATTR,
    TYPE_ATTR
} from "./utils.js";

export function createElement(className, tag = DEFAULT_TAG) {
    const element = document.createElement(tag);
    element.setAttribute(CLASS_ATTR, className);
    return element;
}

export function createHeader(header, level, className = `${HEADER}`) {
    const element = createElement(className, `${HEADER_TAG}${level}`);
    element.innerHTML = header;
    return element;
}

export function createImage(className, src, alt) {
    const element = createElement(className, IMAGE_TAG);
    src = getImageSource(src);
    element.setAttribute(IMAGE_SOURCE_ATTR, src);
    element.setAttribute(IMAGE_PLACEHOLDER_ATTR, alt);
    element.setAttribute(IMAGE_TITLE_ATTR, alt);
    return element;
}

function getImageSource(link) {
    return link && LINK_REGEX.test(link) ? link : NO_IMAGE_PATH;
}

export function createSearchBar(className, placeholder, listener, typesToListenTo) {
    const searchBar = createInputElement(className, INPUT_TYPE_TEXT);
    searchBar.setAttribute(PLACEHOLDER_ATTR, placeholder);
    typesToListenTo.forEach(type => searchBar.addEventListener(type, listener));
    return searchBar;
}

export function createCheckbox(classname, checked, listener) {
    const checkbox = createInputElement(classname, INPUT_TYPE_CHECKBOX);
    checkbox.checked = checked;
    checkbox.addEventListener(CLICK_LISTENER, listener);
    return checkbox;
}

function createInputElement(className, type) {
    const element = createElement(`${className}__${type}`, INPUT_TAG);
    element.setAttribute(TYPE_ATTR, type);
    element.setAttribute(ID_ATTR, `${className}-${type}`);
    return element;
}

function createLabel(content, className, type) {
    const label = createElement(`${className}__${LABEL_TAG}--${type}`, LABEL_TAG);
    label.setAttribute(FOR_ATTR, `${className}-${type}`);
    label.innerHTML = content;
    return label;
}

export function createInputGroup(className, label, modifier, element) {
    const group = createElement(`${className}__${GROUP} ${className}__${GROUP}--${modifier}`);
    group.append(createLabel(label, className, modifier));
    group.append(element);
    return group;
}

export function updateLabelOnSelectionChange(labelId, content) {
    document.querySelector(labelId).innerHTML = content;
}

export function getCheckboxById(className) {
    return document.getElementById(`${className}${CLASS_SPLITTER}${INPUT_TYPE_CHECKBOX}`);
}





