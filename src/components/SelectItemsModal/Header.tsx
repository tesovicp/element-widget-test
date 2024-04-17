import { ChangeEvent, FC } from "react";
import { IFilterItem } from "../../hooks/useElementsData";
import styled from "styled-components";
import XSvg from "../../assets/x-w.svg";
import { Flex } from "../../core/Flex/Flex";
import { MAX_ITEMS } from "../../core/consts";

const ActionsHeader = styled.header`
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
  text-align: center;
  width: 100px;
`;

const Label = styled.label`
  width: auto;

  @media (max-width: 480px) {
    text-align: left;
    width: 55px;
  }
`;

const Ximg = styled.img`
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

  @media (max-width: 450px) {
    right: 20px;
    top: 20px;
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
      <ActionsHeader>
        <Ximg src={XSvg} onClick={onClose} />
        <Flex gap="small">
          <Label htmlFor="search">Search</Label>
          <SearchInput id="search" onChange={onSearch} type="search" />
        </Flex>
        <Flex>
          <Label htmlFor="filter">Filter</Label>
          <FilterSelect id="filter" onChange={onFilter}>
            {filterItems.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </FilterSelect>
        </Flex>
      </ActionsHeader>
    </>
  );
};
