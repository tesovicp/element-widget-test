export interface IItem {
  id: number;
  name: string;
}

export interface IFilterItem {
  id?: number;
  name: string;
}

/**
 * Generates and gets the list of elements for the list.
 * @returns {*} The array of records <number, string>.
 */
export const getElements = () => {
  const result: IItem[] = [];
  for (let i = 1; i <= 300; i++) {
    result.push({ id: i, name: `Element ${i}` });
  }
  return result;
};

const filterItems: IFilterItem[] = [
  { id: 0, name: "No filter" },
  { id: 10, name: ">10" },
  { id: 100, name: ">100" },
  { id: 200, name: ">200" },
];

/**
 * Gets the elements for the list and items for filter.
 * @returns {*} The object with `elements` and `filterItems`.
 */
export const getElementsData = () => ({
  elements: getElements(),
  filterItems,
});
