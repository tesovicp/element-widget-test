import { FC, ReactNode } from "react";
import type * as CSS from "csstype";

type FlexGap = "small" | "medium" | "large";

interface Props {
  children?: ReactNode;
  gap?: FlexGap;
  orientation?: "row" | "column";
  css?: CSS.Properties;
}

const gaps = { small: "1rem", medium: "1.5rem", large: "2rem" };

export const Flex: FC<Props> = ({ children, gap, orientation = "row", css }) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: orientation,
        gap: gap ? gaps[gap] : gaps["small"],
        ...css,
      }}
    >
      {children}
    </div>
  );
};
