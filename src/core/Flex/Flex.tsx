import { FC, ReactNode } from "react";

type FlexGap = "small" | "medium" | "large";

interface Props {
  children: ReactNode;
  gap?: FlexGap;
  orientation: "row" | "column";
}

const gaps = { small: "1rem", medium: "1.5rem", large: "2rem" };

export const Flex: FC<Props> = ({ children, gap, orientation }) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: orientation,
        gap: gap ? gaps[gap] : gaps["small"],
      }}
    >
      {children}
    </div>
  );
};
