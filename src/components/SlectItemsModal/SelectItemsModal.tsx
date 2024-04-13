import { FC, useEffect, useMemo, useRef, useState } from "react";
import { IElemenent, getElements } from "../../mocks/getElements";
import { Item } from "../Item/Item";
import "./SlectItemsModal.css";

interface Props {
  isOpen: boolean;
}

export const SelectItemsModal: FC<Props> = ({ isOpen }) => {
  const data = useMemo(() => getElements(), []);
  const modalRef = useRef<HTMLDialogElement>(null);

  const [selectedItems, setSelectedItems] = useState<IElemenent[]>([]);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

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
    <dialog id="select-modal" ref={modalRef}>
      <div className="modal-header">
        <div>
          Search <input type="text" />
        </div>
        <div>
          Filter{" "}
          <select>
            <option value="10">{">10"}</option>
            <option value="100">{">100"}</option>
            <option value="200">{">200"}</option>
          </select>
        </div>
      </div>
      <div className="modal-list">
        {data.map((e) => (
          <Item
            key={e.id}
            disabled={selectedItems.length === 3}
            isSelected={selectedItems.includes(e)}
            item={e}
            onClick={onItemClick}
          />
        ))}
      </div>
      <div className="modal-footer">{JSON.stringify(selectedItems)}</div>
    </dialog>
  );
};
