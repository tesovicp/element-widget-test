import { FC } from "react";
import { IItem } from "../../mocks/useElementsData";
import "./SelectedItem.css";

interface Props {
  item: IItem;
  onRemove: (id: number) => void;
}

export const SelectedItem: FC<Props> = ({ item, onRemove }) => (
  <li>
    <button className={"selected-item"}>
      <span>{item.name}</span>
      <span onClick={() => onRemove(item.id)}>X</span>{" "}
    </button>
  </li>
);
