import { FC } from "react";
import { IItem } from "../../mocks/useElementsData";
import "./SelectedItem.css";

interface Props {
  item: IItem;
}

export const SelectedItem: FC<Props> = ({ item }) => (
  <div className="item">
    <div>{item.name}</div>
    <div>X</div>
  </div>
);
