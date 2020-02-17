import styled, { css } from "styled-components";
import { Color } from "../../../Constants/Color";
import { ButtonState, ButtonType } from "../../../Constants/Button";

const getButtonColor = (
  buttonType: ButtonType,
  buttonState: ButtonState
): Color => {
  switch (buttonType) {
    default:
    case ButtonType.BRAND:
      switch (buttonState) {
        case ButtonState.DEFAULT:
          return Color.COLOR_BRAND;
        case ButtonState.ACTIVE:
          return Color.COLOR_BRAND_ACTIVE;
        case ButtonState.DISABLED:
          return Color.COLOR_BRAND_DISABLED;
        case ButtonState.ACTION:
          return Color.COLOR_BRAND_ACTION;
      }
      break;
    case ButtonType.BRAND_SECONDARY:
      switch (buttonState) {
        case ButtonState.DEFAULT:
          return Color.COLOR_BRAND_SECONDARY;
        case ButtonState.ACTIVE:
          return Color.COLOR_BRAND_SECONDARY_ACTIVE;
        case ButtonState.DISABLED:
          return Color.COLOR_BRAND_SECONDARY_DISABLED;
        case ButtonState.ACTION:
          return Color.COLOR_BRAND_SECONDARY_ACTION;
      }
      break;
  }
  throw new Error("getButtonColor: Shouldn't be reachable");
};

interface StyledProps {
  width?: string;
  height?: string;
  buttonType: ButtonType;
  fontsize?: string;
  fontweight?: string;
}

export const StyledButtonCss = css`
  width: ${(props: StyledProps) => props.width};
  height: ${(props: StyledProps) => props.height};
  font-size: ${(props: StyledProps) => props.fontsize};
  font-weight: ${(props: StyledProps) => props.fontweight};
  background-color: ${(props: StyledProps) =>
    getButtonColor(props.buttonType, ButtonState.DEFAULT)};
  color: ${Color.COLOR_WHITE};
  border-radius: 0.1875rem;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  transition: all 0.3s 0s cubic-bezier(0.6, 0.5, 0.5, 0.75);
  box-shadow: inset 0 0 0 1px hsla(220, 20%, 40%, 0.25),
    0 0 0.25rem hsla(220, 20%, 40%, 0.25);
  cursor: pointer;

  &::after {
    content: "";
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 0;
    pointer-events: none;
    transform: translate(-50%, 0%);
  }
  &:active {
    background-color: ${(props: StyledProps) =>
      getButtonColor(props.buttonType, ButtonState.ACTIVE)};
    color: ${Color.COLOR_WHITE};
    box-shadow: 0;
  }
  &:active::after {
    width: 100%;
    transition: width 0.2s 0s cubic-bezier(0.6, 0.5, 0.5, 0.75);
    box-shadow: inset 0 0 0 1px hsla(220, 20%, 40%, 0.25),
      0 0 0.375rem hsla(220, 20%, 40%, 0.5);
  }
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    background-color: ${(props: StyledProps) =>
      getButtonColor(props.buttonType, ButtonState.DISABLED)};
    color: ${Color.COLOR_WHITE_DISABLED};
    pointer-events: none;
    cursor: not-allowed;
    background-color: currentColor;
    box-shadow: inset 0 0 0 1px hsla(220, 20%, 40%, 0.25),
      0 0 0.375rem hsla(220, 20%, 40%, 0.375);
  }
  &:hover {
    background-color: ${(props: StyledProps) =>
      getButtonColor(props.buttonType, ButtonState.ACTION)};
    color: ${Color.COLOR_WHITE};
    z-index: 3;
    box-shadow: none;
  }
  /* &:focus {
    background-color: ${(props: StyledProps) =>
      getButtonColor(props.buttonType, ButtonState.ACTION)};
    color: ${Color.COLOR_WHITE};
    z-index: 3;
    box-shadow: none;
  } */
`;

const StyledButton = styled.button`
  ${StyledButtonCss}
`;

export default {
  StyledButton
};
