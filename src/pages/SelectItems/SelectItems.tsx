import { ChangeEvent, FC, useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { useElementsData } from "../../mocks/useElementsData";
import { Item } from "../../components/Item/Item";
import { SelectItemsHeader } from "./SelectItemsHeader";
import "./SelectItems.css";
import { SelectedItems } from "../../components/SelectedItems/SelectedItems";
// import { SelectedItem } from "../../components/SelectedItem/SelectedItem";

export const SelectItems: FC = () => {
  const { elements, filterItems } = useElementsData();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedIDs, setSelectedIDs] = useState<number[]>([]);

  const [search, setSearch] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);

  const handleSelect = (id: number) => {
    if (selectedIDs.includes(id)) {
      setSelectedIDs(selectedIDs.filter((id) => id !== id));
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

  return (
    <>
      <button onClick={() => setShowModal(true)}>Choose maximum 3 items</button>

      <Modal isOpen={showModal}>
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
          <footer>
            <div>
              <SelectedItems
                elements={elements}
                selectedIDs={selectedIDs}
                onRemove={handleSelect}
              />
            </div>
            <div className="footer-buttons">
              <button>Save</button>
              <button>Cancel</button>
            </div>
          </footer>
        </div>
      </Modal>
    </>
  );
};
