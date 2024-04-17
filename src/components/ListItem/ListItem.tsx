import { FC } from "react";
import { IItem } from "../../hooks/useElementsData";
import styled from "styled-components";

const Item = styled.button<{ $isSelected?: boolean; $disabled?: boolean }>`
  background-color: ${({ $isSelected }) => ($isSelected ? "var(--color-3)" : "var(--color-1)")};
  color: ${({ $isSelected }) => ($isSelected ? "var(--dark)" : "var(--light)")};
  cursor: ${({ $disabled, $isSelected }) =>
    $disabled && !$isSelected ? "not-allowed" : "pointer"};
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  margin: 3px 0;
  min-width: 150px;
  padding: 5px;
  width: 100%;

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? "var(--color-4)" : "var(--color-2)")};
    border: 1px solid transparent;
  }

  @media (prefers-color-scheme: light) {
    background-color: ${({ $isSelected }) => ($isSelected ? "var(--color-3)" : "#ccc")};
    color: #213547;

    &:hover {
      background-color: ${({ $isSelected }) => ($isSelected ? "var(--color-4)" : "#eee")};
    }
  }
`;

interface Props {
  isSelected: boolean;
  item: IItem;
  disabled: boolean;
  onClick: (item: IItem) => void;
}

export const ListItem: FC<Props> = ({ isSelected, item, disabled, onClick }) => {
  if (!item) {
    return null;
  }
  return (
    <li>
      <Item $isSelected={isSelected} $disabled={disabled} onClick={() => onClick(item)}>
        {item.name}
      </Item>
    </li>
  );
};
