import styled from "styled-components";
import { Color } from "../../../Constants/Color";

interface StyledProps {
  fontsize?: string;
  width?: string;
  height?: string;
}

const StyledInput = styled.input`
  font-size: ${(props: StyledProps) => props.fontsize};
  width: ${(props: StyledProps) => props.width};
  height: ${(props: StyledProps) => props.height};
  color: ${Color.COLOR_BLACK_20};
  border: solid 1px ${Color.COLOR_BRAND_SECONDARY};
  border-radius: 3px;
  padding: 0.3em 1em;
`;

export default {
  StyledInput
};
