import { FC, useMemo, useState } from "react";
import { getElements, IItem } from "../../mocks/useElementsData";
import { Item } from "../Item/Item";
import "./SelectItemsModal.css";

interface Props {}

export const SelectItemsModal: FC<Props> = () => {
  const data = useMemo(() => getElements(), []);

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

  return (
    <dialog id="select-modal" open>
      <header className="modal-header">
        <form>
          <div>
            <label htmlFor="search">Search</label>
            <input id="search" className="search" type="search" />
          </div>
          <div>
            <label htmlFor="filter">Filter </label>
            <select id="filter" className="filter">
              <option value="10">{">10"}</option>
              <option value="100">{">100"}</option>
              <option value="200">{">200"}</option>
            </select>
          </div>
        </form>
      </header>
      <ul className="modal-list">
        {data.map((e) => (
          <Item
            key={e.id}
            disabled={selectedItems.length === 3}
            isSelected={selectedItems.includes(e)}
            item={e}
            onClick={onItemClick}
          />
        ))}
      </ul>
      <footer className="modal-footer">{JSON.stringify(selectedItems)}</footer>
    </dialog>
  );
};
