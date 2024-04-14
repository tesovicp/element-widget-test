import { FC, useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { getElements, IElemenent } from "../../mocks/getElements";
import { Item } from "../../components/Item/Item";
import "./SelectItems.css";

export const SelectItems: FC = () => {
  const data = useMemo(() => getElements(), []);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [selectedItems, setSelectedItems] = useState<IElemenent[]>([]);

  const onItemClick = (item: IElemenent) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...(selectedItems || []), item]);
      }
    }
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Pick 3 items</button>

      <Modal isOpen={showModal}>
        <div id="select-modal-content">
          <header className="header">
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
          </header>
          <ul className="list">
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
          <footer className="footer">{JSON.stringify(selectedItems)}</footer>
        </div>
      </Modal>
    </>
  );
};
