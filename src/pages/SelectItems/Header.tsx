import { ChangeEvent, FC } from "react";
import { IFilterItem } from "../../hooks/useElementsData";
import "./Header.css";

interface Props {
  filterItems: IFilterItem[];
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilter: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Header: FC<Props> = ({ filterItems, onSearch, onFilter }) => {
  return (
    <header className="select-items-header">
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" className="search" onChange={onSearch} type="search" />
      </div>
      <div>
        <label htmlFor="filter">Filter </label>
        <select id="filter" className="filter" onChange={onFilter}>
          {filterItems.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
