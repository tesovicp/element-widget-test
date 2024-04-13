export interface IElemenent {
  id: string;
  name: string;
}

export const getElements = () => {
  const result: IElemenent[] = [];
  for (let i = 1; i <= 300; i++) {
    result.push({ id: i.toString(), name: `Element ${i}` });
  }
  return result;
};
