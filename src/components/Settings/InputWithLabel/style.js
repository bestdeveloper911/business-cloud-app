import styled from "styled-components/native";
import theme from "../../../theme";

export const TextInput = styled.TextInput`
  border-radius: 0;
  font-size: 18px;
  padding: 17px 15px;
`;

export const InputWrapper = styled.View`
  border: 1px solid #405c85;
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  position: absolute;
  top: -13px;
  left: 10px;
  background: white;
  padding: 2px 3px;
  z-index: 1;
  font-size: 14px;
  color: #405c85;
`;
