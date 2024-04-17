import { ChangeEvent, FC } from "react";
import { IFilterItem } from "../../hooks/useElementsData";
import styled from "styled-components";
import XSvg from "../../assets/x-solid.svg";
import { Flex } from "../../core/Flex/Flex";
import { MAX_ITEMS } from "../../core/consts";

const HeaderActions = styled.header`
  align-items: center;
  background-color: var(--bg);
  display: flex;
  flex-wrap: wrap;
  gap: 15px 20px;
  height: fit-content;
  justify-content: space-between;
  padding: 20px 10px;
`;

const SearchInput = styled.input`
  background-color: var(--btn-bg);
  border: 2px solid var(--border);
  border-radius: 4px;
  margin-left: 8px;
  width: 150px;
`;

const FilterSelect = styled.select`
  background-color: var(--btn-bg);
  border: 2px solid var(--border);
  border-radius: 4px;
  margin-left: 8px;

  @media (max-width: 450px) {
    margin-left: 16px;
  }
`;

const Xicon = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;

  border-radius: 5px;
  cursor: pointer;
  padding: 3px;
  height: 26px;
  width: 26px;

  &:hover {
    background-color: #fff2;
  }
`;

interface Props {
  filterItems: IFilterItem[];
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilter: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClose: () => void;
}

export const Header: FC<Props> = ({ filterItems, onSearch, onFilter, onClose }) => {
  return (
    <>
      <Flex css={{ justifyContent: "center" }}>
        <h3>{`Please select max ${MAX_ITEMS} items`}</h3>
      </Flex>
      <HeaderActions>
        <Xicon src={XSvg} onClick={onClose} />
        <Flex>
          <label htmlFor="search">Search</label>
          <SearchInput id="search" onChange={onSearch} type="search" />
        </Flex>
        <div>
          <label htmlFor="filter">Filter </label>
          <FilterSelect id="filter" onChange={onFilter}>
            {filterItems.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </FilterSelect>
        </div>
      </HeaderActions>
    </>
  );
};
