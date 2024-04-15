import { FC } from "react";
import { IItem } from "../../hooks/useElementsData";
import classNames from "classnames";
import "./Item.css";

interface Props {
  isSelected: boolean;
  item: IItem;
  disabled: boolean;
  onClick: (item: IItem) => void;
}

export const Item: FC<Props> = ({ isSelected, item, disabled, onClick }) => {
  if (!item) {
    return null;
  }
  return (
    <li className="item-wrap">
      <button
        className={classNames(
          "item",
          { "item-selected": isSelected },
          { "item-disabled": disabled && !isSelected }
        )}
        onClick={() => onClick(item)}
      >
        {item.name}
      </button>
    </li>
  );
};
