import { FC } from "react";
import { SelectedItem } from "../SelectedItem/SelectedItem";
import { IItem } from "../../hooks/useElementsData";
import { getItem } from "../../core/utils";
import "./SelectedItems.css";

interface Props {
  elements: IItem[];
  selectedIDs: number[];
  onRemove: (id: number) => void;
}

export const SelectedItems: FC<Props> = ({ elements, selectedIDs, onRemove }) => {
  return (
    <ul className="selected-items">
      {selectedIDs.map((id) => (
        <SelectedItem item={getItem(elements, id)} onRemove={onRemove} />
      ))}
    </ul>
  );
};
