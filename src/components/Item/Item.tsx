import { FC } from "react";
import { IElemenent } from "../../mocks/getElements";
import "./Item.css";
import classNames from "classnames";

interface Props {
  isSelected: boolean;
  item: IElemenent;
  disabled: boolean;
  onClick: (item: IElemenent) => void;
}

export const Item: FC<Props> = ({ isSelected, item, disabled, onClick }) => (
  <div
    className={classNames("item", { selected: isSelected }, { disabled: disabled && !isSelected })}
    onClick={() => onClick(item)}
  >
    <div>{item.name}</div>
  </div>
);
