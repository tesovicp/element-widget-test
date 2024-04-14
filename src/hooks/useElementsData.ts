export interface IItem {
  id: number;
  name: string;
}

export interface IFilterItem {
  id?: number;
  name: string;
}

const getElements = () => {
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

export const useElementsData = () => ({
  elements: getElements(),
  filterItems,
});
