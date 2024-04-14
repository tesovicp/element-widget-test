import { FC } from "react";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
import { IItem } from "../../hooks/useElementsData";
import "./SelectedItemsFooter.css";

interface Props {
  elements: IItem[];
  selectedIDs: number[];
  handleSelect: (id: number) => void;
  toggleDialog: () => void;
  saveSelection: (items: number[]) => void;
}

export const SelectedItemsFooter: FC<Props> = ({
  elements,
  selectedIDs,
  handleSelect,
  toggleDialog,
  saveSelection,
}) => (
  <footer>
    <div className="footer-selection">
      <SelectedItems elements={elements} selectedIDs={selectedIDs} onRemove={handleSelect} />
    </div>
    <div className="footer-buttons">
      <button onClick={() => saveSelection(selectedIDs)}>Save</button>
      <button onClick={toggleDialog}>Cancel</button>
    </div>
  </footer>
);
