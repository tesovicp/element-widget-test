import { FC } from "react";
import { IItem } from "../../data/getElementsData";
import styled from "styled-components";

const Item = styled.button<{ $isSelected?: boolean; $disabled?: boolean }>`
  background-color: ${({ $disabled, $isSelected }) =>
    $isSelected ? "var(--color-3)" : $disabled ? "var(--color-0)" : "var(--color-1)"};
  color: ${({ $disabled, $isSelected }) =>
    $isSelected ? "var(--dark)" : $disabled ? "var(--light-dim)" : "var(--light)"};
  cursor: ${({ $disabled, $isSelected }) =>
    $disabled && !$isSelected ? "not-allowed" : "pointer"};
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  margin: 3px 0;
  min-width: 150px;
  padding: 5px;
  width: 100%;

  &:hover {
    background-color: ${({ $disabled, $isSelected }) =>
      $isSelected ? "var(--color-4)" : $disabled ? "var(--color-0)" : "var(--color-2)"};
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
      <Item
        $isSelected={isSelected}
        $disabled={disabled}
        onClick={() => onClick(item)}
        type="button"
      >
        {item.name}
      </Item>
    </li>
  );
};
