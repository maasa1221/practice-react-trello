import * as React from "react";
import styles from "./style";

const { StyledInput } = styles;

export interface InputProps {
  placeholder?: string;
  fontsize?: string;
  width?: string;
  height?: string;
  value?: string | null;
  onChangeAction?: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  fontsize,
  width,
  height,
  value,
  onChangeAction
}) => (
  <StyledInput
    fontsize={fontsize}
    placeholder={placeholder}
    width={width}
    height={height}
    value={value !== null ? value : ""}
    onChange={onChangeAction}
  ></StyledInput>
);

Input.defaultProps = {
  placeholder: "",
  fontsize: "16px",
  width: "78px",
  height: "24px",
  value: null,
  onChangeAction: () => {}
};
