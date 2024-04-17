import { FC } from "react";
import { IItem } from "../../data/getElementsData";
import styled from "styled-components";
import { Xicon } from "../../core/Icons/x-icon";

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

const Xbox = styled.div`
  border-radius: 5px;
  cursor: pointer;
  padding: 3px 5px;
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
  const showX = onRemove !== undefined;
  return (
    <li>
      <SelectedItemButton $showX={showX} type="button">
        <span>{item.name}</span>
        {showX && (
          <Xbox>
            <Xicon />
          </Xbox>
        )}
      </SelectedItemButton>
    </li>
  );
};
