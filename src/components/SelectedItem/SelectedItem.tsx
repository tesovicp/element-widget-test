import { FC } from "react";
import { IElemenent } from "../../mocks/useElementsData";
import "./SelectedItem.css";

interface Props {
  item: IElemenent;
}

export const SelectedItem: FC<Props> = ({ item }) => (
  <div className="item">
    <div>{item.name}</div>
    <div>X</div>
  </div>
);
