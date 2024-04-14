import { FC, useRef, useState } from "react";
import { SelectItems } from "../SelectItems/SelectItems";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
import { useElementsData } from "../../hooks/useElementsData";

const Start: FC = () => {
  // Load data - TODO - useElementsData uset twice
  const { elements } = useElementsData();

  // Selection
  const [selection, setSelection] = useState<number[]>([]);

  const saveSelection = (items: number[]) => {
    setSelection(items);
    toggleDialog();
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
    <>
      <button onClick={toggleDialog}>Pick 3 items</button>

      <SelectedItems elements={elements} selectedIDs={selection} />

      <SelectItems
        ref={dialogRef}
        initSelection={selection} // TODO: to finish
        toggleDialog={toggleDialog}
        saveSelection={saveSelection}
      />
    </>
  );
};

export default Start;
