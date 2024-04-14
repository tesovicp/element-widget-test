import { FC } from "react";
import { SelectedItem } from "../SelectedItem/SelectedItem";
import { IItem } from "../../mocks/useElementsData";

interface Props {
  elements: IItem[];
  selectedIDs: number[];
  onRemove: (id: number) => void;
}

export const SelectedItems: FC<Props> = ({ elements, selectedIDs, onRemove }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {selectedIDs.map((id) => (
        <SelectedItem item={elements.filter((e) => e.id === id)[0]} onRemove={onRemove} />
      ))}
    </div>
  );
};
