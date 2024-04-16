import { FC } from "react";
import { IItem } from "../../hooks/useElementsData";
import classNames from "classnames";
import xIcon from "../../assets/xmark-solid.svg";
import "./SelectedItem.css";

interface Props {
  item?: IItem;
  onRemove?: (id: number) => void;
}

export const SelectedItem: FC<Props> = ({ item, onRemove }) => {
  if (!item) {
    return null;
  }
  const showX = !!onRemove;
  return (
    <li>
      <button className={classNames("selected-item", { "selected-item-center": !showX })}>
        <span>{item.name}</span>
        {showX && (
          <img src={xIcon} className="selected-item-icon" onClick={() => onRemove(item.id)} />
        )}
      </button>
    </li>
  );
};
