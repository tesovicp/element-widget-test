import { FC } from "react";
import { SelectedItem } from "../SelectedItem/SelectedItem";
import { IItem } from "../../hooks/useElementsData";
import { getItem } from "../../core/utils";
import styled from "styled-components";

const SelectedItemsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

interface Props {
  elements: IItem[];
  selectedIDs: number[];
  onRemove?: (id: number) => void;
}

export const SelectedItems: FC<Props> = ({ elements, selectedIDs, onRemove }) => {
  return (
    <SelectedItemsList>
      {selectedIDs.map((id) => (
        <SelectedItem key={id} item={getItem(elements, id)} onRemove={onRemove} />
      ))}
    </SelectedItemsList>
  );
};
