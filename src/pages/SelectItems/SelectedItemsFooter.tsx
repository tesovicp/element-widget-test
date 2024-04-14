import { FC } from "react";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
import { IItem } from "../../hooks/useElementsData";

interface Props {
  elements: IItem[];
  selectedIDs: number[];
  handleSelect: (id: number) => void;
}

export const SelectedItemsFooter: FC<Props> = ({ elements, selectedIDs, handleSelect }) => (
  <footer>
    <div className="footer-selection">
      <SelectedItems elements={elements} selectedIDs={selectedIDs} onRemove={handleSelect} />
    </div>
    <div className="footer-buttons">
      <button>Save</button>
      <button>Cancel</button>
    </div>
  </footer>
);
