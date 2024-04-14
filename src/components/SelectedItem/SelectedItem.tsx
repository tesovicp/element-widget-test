import { FC } from "react";
import { IItem } from "../../hooks/useElementsData";
import "./SelectedItem.css";

interface Props {
  item?: IItem;
  onRemove: (id: number) => void;
}

export const SelectedItem: FC<Props> = ({ item, onRemove }) => {
  if (!item) {
    return null;
  }
  return (
    <li>
      <button className={"selected-item"}>
        <span>{item.name}</span>
        <span onClick={() => onRemove(item.id)}>X</span>{" "}
      </button>
    </li>
  );
};
