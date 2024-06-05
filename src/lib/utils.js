// This file is part of React-Invenio-Deposit
// Copyright (C) 2021 CERN.
// Copyright (C) 2021 Northwestern University.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

export function toCapitalCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Traverse the leaves (non-Object, non-Array values) of obj and execute func
 * on each.
 *
 * @param {object} obj - generic Object
 * @param {function} func - (leaf) => ... (identity by default)
 *
 */
export function leafTraverse(obj, func = (l) => l) {
  if (typeof obj === "object") {
    // Objects and Arrays
    for (const key in obj) {
      leafTraverse(obj[key], func);
    }
  } else {
    func(obj);
  }
}

/**
 * Transforms an object into an array of key-value pairs with a specified prefix.
 * Nested objects are flattened with keys joined by underscores.
 * The top-level key is prefixed with a given string.
 *
 * @param {Object} obj - The object to be transformed.
 * @param {string} prefix - The prefix to be added to each key.
 * @returns {Array} An array of key-value pairs with transformed keys.
 *
 * @example
 * const inputObj = {
 *     "title": "Missing data for required field.",
 *     "marketplace": {
 *         "launch_url": "Missing data for required field."
 *     };
 * };
 *
 * const prefix = 'metadata';
 * console.log(objectAsList(inputObj, prefix));
 * // Output:
 * // [
 * //   ["metadata.title", "Missing data for required field."],
 * //   ["metadata.marketplace_launch_url", "Missing data for required field."]
 * // ]
 */
export function objectAsList(obj, prefix) {
  function transform(obj, parentKey = "", result = []) {
    for (let key in obj) {
      let hasProperty = obj.hasOwnProperty(key); // eslint-disable-line no-prototype-builtins

      if (hasProperty) {
        const newKey = parentKey ? `${parentKey}_${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
          transform(obj[key], newKey, result);
        } else {
          result.push([newKey, obj[key]]);
        }
      }
    }
    return result;
  }

  const result = transform(obj);
  return result.map(([key, value]) => [`${prefix}.${key}`, value]);
}

/**
 * Sort a list of string values (options).
 * @param {list} options
 * @returns
 */
export function sortOptions(options) {
  return options.sort((o1, o2) => o1.text.localeCompare(o2.text));
}

/**
 * Scroll page to top
 */
export function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
