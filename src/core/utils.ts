import { IItem } from "../hooks/useElementsData";

/**
 * Retrieves the first element in an array that has provided id.
 * @param {Array} elements - The input array.
 * @param {Number} id - of element we are looking for.
 * @returns {*} The first element that meets the criteria, or undefined if no such element exists.
 */
export const getItem = (elements: IItem[], id: number) => {
  for (const item of elements) {
    if (item.id === id) {
      return item;
    }
  }
  return undefined;
};
