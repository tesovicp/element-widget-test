import { FC, useRef, useState } from "react";
import { SelectItems } from "../SelectItems/SelectItems";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
import { useElementsData } from "../../hooks/useElementsData";
import { Flex } from "../../core/Flex/Flex";

const LS_IDS = "element-widget-IDs";
const MAX_ITEMS = 33;

const Start: FC = () => {
  // Load data - TODO - useElementsData uset twice
  const { elements } = useElementsData();

  // Load selected items from localStorage
  const IDs = localStorage.getItem(LS_IDS);
  const loadedItems: number[] = IDs ? JSON.parse(IDs) : [];

  // Selection
  const [selection, setSelection] = useState<number[]>(loadedItems);

  const saveSelection = (items: number[]) => {
    setSelection(items);
    toggleDialog();

    localStorage.setItem(LS_IDS, JSON.stringify(items));
  };

  // Modal dialog
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <Flex orientation="column" gap="medium">
      <button className="button-primary" onClick={toggleDialog}>
        {selection.length
          ? "Change my choice"
          : `Pick ${MAX_ITEMS} item${MAX_ITEMS > 1 ? "s" : ""}`}
      </button>

      <SelectedItems elements={elements} selectedIDs={selection} />

      <SelectItems
        ref={dialogRef}
        initSelection={selection}
        maxItems={MAX_ITEMS}
        toggleDialog={toggleDialog}
        saveSelection={saveSelection}
      />
    </Flex>
  );
};

export default Start;
