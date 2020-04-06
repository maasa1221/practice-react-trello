import * as React from "./node_modules/react";
import styles from "./style";
// import { ButtonType } from "../../../Constants/Button";
import { Button, ButtonProps } from "../../Atoms/Button/index"
import { Text, TextProps } from "../../Atoms/Text"
// import { Input, InputProps } from "../../Atoms/Input"

const { StyledDiv, StyledGrid1, StyledGrid2 } = styles;

export interface CardProps {
  textProps: TextProps;
  buttonProps: ButtonProps;

}

export const Card: React.FC<CardProps> = ({
  buttonProps, textProps
}) => (

    <StyledDiv>
      <StyledGrid1><Text {...textProps} /></StyledGrid1>
      <StyledGrid2><Button {...buttonProps} /></StyledGrid2>
    </StyledDiv>
  );

