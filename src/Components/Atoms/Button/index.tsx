import * as React from "react";
import styles from "./style";
import { ButtonType } from "../../../Constants/Button";

const { StyledButton } = styles;

export interface ButtonProps {
  label?: string | string[];
  width?: string;
  height?: string;
  buttonType: ButtonType;
  fontsize?: string;
  fontweight?: string;
  onClickAction?: () => any;
  disabledFlag?: boolean;
}

const createText = (
  texts: string | string[] | undefined
): JSX.Element | JSX.Element[] => {
  if (texts === undefined) {
    return <></>;
  }
  if (typeof texts === "string") {
    return <div>{texts}</div>;
  }
  let textList = [];
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    if (text !== undefined) {
      textList.push(<div key={i}>{text}</div>);
    }
  }
  return textList;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  width,
  height,
  buttonType,
  fontsize,
  fontweight,
  onClickAction,
  disabledFlag
}) => (
  <StyledButton
    width={width}
    height={height}
    buttonType={buttonType}
    fontsize={fontsize}
    fontweight={fontweight}
    onClick={onClickAction}
    disabled={disabledFlag}
  >
    {createText(label)}
  </StyledButton>
);

Button.defaultProps = {
  label: "ボタン",
  width: "100px",
  height: "45px",
  fontsize: "15px",
  fontweight: "700",
  onClickAction: () => {}
};
