import * as React from "react";
import styles from "./style";

const { StyledText } = styles;

export interface TextProps {
  label: string | null;
  fontsize?: string;
  fontWeight?: string;
  fontFamily?: string;
  colorType?: string;
}

export const Text: React.FC<TextProps> = ({
  label,
  fontsize,
  fontWeight,
  fontFamily,
  colorType
}) => (
  <StyledText
    fontsize={fontsize}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    colorType={colorType}
  >
    {label}
  </StyledText>
);

Text.defaultProps = {
  fontsize: "inherit",
  fontWeight: "inherit",
  fontFamily: "inherit",
  colorType: "inherit"
};
