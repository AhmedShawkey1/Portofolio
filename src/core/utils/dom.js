/**
 * Selects the first element matching the selector.
 * @param {string} selector - CSS selector string.
 * @returns {HTMLElement|null} The matching element or null.
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * Selects all elements matching the selector.
 * @param {string} selector - CSS selector string.
 * @returns {NodeList} List of matching elements.
 */
export const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Creates a new DOM element with optional class and content.
 * @param {string} tag - HTML tag name (e.g., 'div', 'span').
 * @param {string} [className] - Optional class name(s).
 * @param {string} [content] - Optional inner HTML content.
 * @returns {HTMLElement} The created element.
 */
export const createElement = (tag, className, content = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.innerHTML = content;
    return el;
};
