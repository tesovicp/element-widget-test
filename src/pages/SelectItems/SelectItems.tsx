import { ChangeEvent, FC, useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { IItem, useElementsData } from "../../mocks/useElementsData";
import { Item } from "../../components/Item/Item";
import "./SelectItems.css";

export const SelectItems: FC = () => {
  const { elements, filterItems } = useElementsData();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);

  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);

  const onItemClick = (item: IItem) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...(selectedItems || []), item]);
      }
    }
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
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
      <button onClick={() => setShowModal(true)}>Pick 3 items</button>

      <Modal isOpen={showModal}>
        <div id="select-modal-content">
          <header className="header">
            <div>
              <label htmlFor="search">Search</label>
              <input id="search" className="search" onChange={handleChangeSearch} type="search" />
            </div>
            <div>
              <label htmlFor="filter">Filter </label>
              <select id="filter" className="filter" onChange={handleChangeFilter}>
                {filterItems.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
          </header>
          <ul className="list">
            {listItems.map((e) => (
              <Item
                key={e.id}
                disabled={selectedItems.length === 3}
                isSelected={selectedItems.includes(e)}
                item={e}
                onClick={onItemClick}
              />
            ))}
          </ul>
          <footer className="footer">{JSON.stringify(selectedItems)}</footer>
        </div>
      </Modal>
    </>
  );
};
