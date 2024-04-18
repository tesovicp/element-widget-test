import { FC, useRef, useState } from "react";
import { SelectItemsModal } from "../../components/SelectItemsModal/SelectItemsModal";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
import { getElements } from "../../data/getElementsData";
import { Flex } from "../../core/Flex/Flex";
import { Button } from "../../core/Button/Button";
import { LS_IDS, MAX_ITEMS } from "../../core/constants";
import styled from "styled-components";
import { getSavedSelection } from "../../core/utils";

const Background = styled.div`
  background-image: url("list-icon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: min(80vh, 80vw);
  height: calc(100vh - 100px);
  left: 0;
  opacity: 0.05;
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: -1;
`;

const Start: FC = () => {
  const elements = getElements();

  //Loads the list of selected item IDs from localStorage.
  const loadedItems = getSavedSelection();

  // Reload selection state
  const [reload, setReload] = useState<boolean>();

  // Selection state
  const [selection, setSelection] = useState<number[]>(loadedItems);

  const saveSelection = (items: number[]) => {
    setSelection(items);
    toggleDialog();

    // Save to localStorage for user - to be loaded on load/refresh
    localStorage.setItem(LS_IDS, JSON.stringify(items));
  };

  // Modal dialog ref
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) return;

    setReload(!reload);
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <>
      <Background />

      <Flex orientation="column" gap="medium">
        <Button $primary onClick={toggleDialog} type="button">
          {selection.length
            ? "Change my choice"
            : `Pick ${MAX_ITEMS} item${MAX_ITEMS > 1 ? "s" : ""}`}
        </Button>

        <SelectedItems elements={elements} selectedIDs={selection} />

        <SelectItemsModal
          ref={dialogRef}
          initSelection={selection}
          maxItems={MAX_ITEMS}
          reload={reload}
          toggleDialog={toggleDialog}
          saveSelection={saveSelection}
        />
      </Flex>
    </>
  );
};

export default Start;
