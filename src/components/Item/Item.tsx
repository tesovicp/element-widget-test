import { FC } from "react";
import { IItem } from "../../mocks/useElementsData";
import classNames from "classnames";
import "./Item.css";

interface Props {
  isSelected: boolean;
  item: IItem;
  disabled: boolean;
  onClick: (item: IItem) => void;
}

export const Item: FC<Props> = ({ isSelected, item, disabled, onClick }) => (
  <li>
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
