import { ElementType, FC, ReactNode } from "react";
import type * as CSS from "csstype";

type FlexGap = "small" | "medium" | "large";

interface Props {
  as?: ElementType;
  children?: ReactNode;
  gap?: FlexGap;
  orientation?: "row" | "column";
  css?: CSS.Properties;
}

const gaps = { small: "0.5rem", medium: "1.5rem", large: "3rem" };

export const Flex: FC<Props> = ({ children, as: Comp = "div", gap, orientation = "row", css }) => {
  return (
    <Comp
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: orientation,
        gap: gap ? gaps[gap] : gaps["small"],
        ...css,
      }}
    >
      {children}
    </Comp>
  );
};
