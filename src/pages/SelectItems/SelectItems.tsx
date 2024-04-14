import { ChangeEvent, FC, useMemo, useRef, useState } from "react";
import { useElementsData } from "../../hooks/useElementsData";
import { Item } from "../../components/Item/Item";
import { SelectItemsHeader } from "./SelectItemsHeader";
import { SelectedItemsFooter } from "./SelectedItemsFooter";
import "./SelectItems.css";

export const SelectItems: FC = () => {
  const { elements, filterItems } = useElementsData();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  const [selectedIDs, setSelectedIDs] = useState<number[]>([]);

  const [search, setSearch] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);

  const handleSelect = (id: number) => {
    if (selectedIDs.includes(id)) {
      setSelectedIDs(selectedIDs.filter((i) => i !== id));
    } else {
      if (selectedIDs.length < 3) {
        setSelectedIDs([...(selectedIDs || []), id]);
      }
    }
  };

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
  };

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Pick 3 items</button> */}
      <button onClick={toggleDialog}>Pick 3 items</button>

      {/* <Modal ref={dialogRef}> */}
      <dialog ref={dialogRef} className="dialog">
        <div id="select-modal-content">
          <SelectItemsHeader
            filterItems={filterItems}
            onSearch={handleSearch}
            onFilter={handleChangeFilter}
          />
          <ul className="list">
            {listItems.map((e) => (
              <Item
                key={e.id}
                disabled={selectedIDs.length === 3}
                isSelected={selectedIDs.includes(e.id)}
                item={e}
                onClick={() => handleSelect(e.id)}
              />
            ))}
          </ul>
          <SelectedItemsFooter {...footerProps} />
        </div>
      </dialog>
      {/* </Modal> */}
    </>
  );
};
