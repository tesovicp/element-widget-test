import { ChangeEvent, forwardRef, ForwardRefExoticComponent, useMemo, useState } from "react";
import { useElementsData } from "../../hooks/useElementsData";
import { ListItem } from "../ListItem/ListItem";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

const Dialog = styled.dialog`
  background-color: transparent;
  border: none;
  margin: auto auto;
  max-width: 500px;
  padding: 15px;
  width: 100vw;
  &::backdrop {
    background-color: #4564;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  }
`;

const DilogContent = styled.div`
  background-color: var(--bg);
  border: var(--border) 2px solid;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-height: 760px;
  padding: 15px;
  width: 100%;
`;

const ListItems = styled.ul`
  border: 2px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: 58px;
  overflow-y: scroll;
  padding: 5px;
`;

const Message = styled.p`
  color: var(--vanilla);
  padding: 10px;
`;

interface Props {
  initSelection: number[];
  maxItems?: number;
  toggleDialog: () => void;
  saveSelection: (items: number[]) => void;
}

export const SelectItemsModal: ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLDialogElement>
> = forwardRef<HTMLDialogElement, Props>(
  ({ initSelection, maxItems = 3, toggleDialog, saveSelection }, ref) => {
    const { elements, filterItems } = useElementsData();

    const [selectedIDs, setSelectedIDs] = useState<number[]>(initSelection);

    const [search, setSearch] = useState<string | undefined>(undefined);
    const [filter, setFilter] = useState<number | undefined>(undefined);

    const handleSelect = (id: number) => {
      if (selectedIDs.includes(id)) {
        setSelectedIDs(selectedIDs.filter((i) => i !== id));
      } else {
        if (selectedIDs.length < maxItems) {
          setSelectedIDs([...(selectedIDs || []), id]);
        }
      }
    };

    const clearSelected = () => setSelectedIDs([]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.currentTarget.value);
    };

    const handleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
      setFilter(parseInt(event.target.value));
    };

    const listItems = useMemo(() => {
      if (!search && !filter) {
        return elements;
      }
      const filtered = filter ? elements.filter((e) => e.id > filter) : elements;
      const filteredAndSearched = search
        ? filtered.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
        : filtered;
      return filteredAndSearched;
    }, [elements, search, filter]);

    const footerProps = {
      elements,
      selectedIDs,
      handleSelect,
      toggleDialog,
      saveSelection,
      clearSelected,
    };

    return (
      <Dialog ref={ref}>
        <DilogContent>
          <Header
            filterItems={filterItems}
            onSearch={handleSearch}
            onFilter={handleChangeFilter}
            onClose={toggleDialog}
          />
          <ListItems>
            {listItems.map((e) => (
              <ListItem
                key={e.id}
                disabled={selectedIDs?.length === maxItems}
                isSelected={selectedIDs.includes(e.id)}
                item={e}
                onClick={() => handleSelect(e.id)}
              />
            ))}
            {!listItems.length && <Message>No results found.</Message>}
          </ListItems>
          <Footer {...footerProps} />
        </DilogContent>
      </Dialog>
    );
  }
);
