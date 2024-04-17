import { IItem } from "../data/getElementsData";
import { LS_IDS } from "./constants";

/**
 * Retrieves the first element in an array that has provided id.
 * @param {Array} elements - The input array.
 * @param {Number} id - of element we are looking for.
 * @returns {*} The first element that meets the criteria, or undefined if no such element exists.
 */
export const getItem = (elements: IItem[], id: number) => {
  return elements.find((e) => e.id === id);
};

/**
 * Loads the list of selected item IDs from localStorage.
 * @returns {*} The array of numbers (IDs).
 */
export const getSavedSelection = (): number[] => {
  const IDs = localStorage.getItem(LS_IDS);
  return IDs ? JSON.parse(IDs) : [];
};
