import { FC } from "react";
import { IItem } from "../../hooks/useElementsData";
import xIcon from "../../assets/xmark-solid.svg";
import styled from "styled-components";

const SelectedItemButton = styled.button<{ $showX?: boolean }>`
  align-items: center;
  background-color: var(--color-4);
  border: 1px solid var(--color-4);
  color: var(--dark);
  cursor: default;
  display: flex;
  font-weight: 500;
  justify-content: ${({ $showX }) => ($showX ? "space-between" : "center")};
  margin: 4px;
  min-width: 140px;
  padding: 7px;
  padding-left: 15px;
`;

const XIcon = styled.img`
  border-radius: 5px;
  cursor: pointer;
  padding: 3px;
  height: 26px;
  width: 26px;

  &:hover {
    background-color: #0002;
  }
`;

interface Props {
  item?: IItem;
  onRemove?: (id: number) => void;
}

export const SelectedItem: FC<Props> = ({ item, onRemove }) => {
  if (!item) {
    return null;
  }
  const showX = !!onRemove;
  return (
    <li>
      <SelectedItemButton $showX={showX}>
        <span>{item.name}</span>
        {showX && <XIcon src={xIcon} onClick={() => onRemove(item.id)} />}
      </SelectedItemButton>
    </li>
  );
};
