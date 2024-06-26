import { FC, useEffect, useRef } from "react";
import { SelectedItems } from "../SelectedItems/SelectedItems";
import { IItem } from "../../data/getElementsData";
import styled from "styled-components";
import { Button } from "../../core/Button/Button";
import { Flex } from "../../core/Flex/Flex";

const FooterSelection = styled.div`
  align-content: center;
  background-color: var(--bg);
  padding: 5px;
  min-height: 110px;
`;

const FooterButtons = styled.div`
  background-color: var(--bg);
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 10px;
`;

interface Props {
  elements: IItem[];
  selectedIDs: number[];
  reload?: boolean;
  handleSelect: (id: number) => void;
  onClose: () => void;
  saveSelection: (items: number[]) => void;
  clearSelected: () => void;
}

export const Footer: FC<Props> = ({
  elements,
  selectedIDs,
  reload,
  handleSelect,
  onClose,
  saveSelection,
  clearSelected,
}) => {
  const refCancel = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    refCancel?.current?.focus();
  }, [reload]);

  return (
    <footer>
      <FooterSelection>
        <SelectedItems elements={elements} selectedIDs={selectedIDs} onRemove={handleSelect} />
      </FooterSelection>
      <FooterButtons>
        <Button onClick={() => clearSelected()} $small type="button">
          Clear
        </Button>
        <Flex>
          <Button $primary onClick={() => saveSelection(selectedIDs)} type="button">
            Save
          </Button>
          <Button autoFocus onClick={onClose} $small type="reset" ref={refCancel}>
            Cancel
          </Button>
        </Flex>
      </FooterButtons>
    </footer>
  );
};
