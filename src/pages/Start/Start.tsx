import { FC, useRef, useState } from "react";
import { SelectItemsModal } from "../../components/SelectItemsModal/SelectItemsModal";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
import { useElementsData } from "../../hooks/useElementsData";
import { Flex } from "../../core/Flex/Flex";
import { Button } from "../../core/Button/Button";
import { LS_IDS, MAX_ITEMS } from "../../core/consts";
import styled from "styled-components";

const Background = styled.div`
  background-image: url("list-icon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: min(80vh, 80vw);
  height: 100vh;
  left: 0;
  opacity: 0.05;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;
`;

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

    // Save to localStorage for user - to be loaded on load/refresh
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
    <>
      <Background />

      <Flex orientation="column" gap="medium">
        <Button $primary onClick={toggleDialog}>
          {selection.length
            ? "Change my choice"
            : `Pick ${MAX_ITEMS} item${MAX_ITEMS > 1 ? "s" : ""}`}
        </Button>

        <SelectedItems elements={elements} selectedIDs={selection} />

        <SelectItemsModal
          ref={dialogRef}
          initSelection={selection}
          maxItems={MAX_ITEMS}
          toggleDialog={toggleDialog}
          saveSelection={saveSelection}
        />
      </Flex>
    </>
  );
};

export default Start;
