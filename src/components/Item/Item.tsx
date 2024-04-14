import { FC } from "react";
import { IElemenent } from "../../mocks/useElementsData";
import classNames from "classnames";
import "./Item.css";

interface Props {
  isSelected: boolean;
  item: IElemenent;
  disabled: boolean;
  onClick: (item: IElemenent) => void;
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
