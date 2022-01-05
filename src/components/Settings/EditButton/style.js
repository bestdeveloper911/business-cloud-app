import styled from "styled-components/native";
import theme from "../../../theme";

export const ButtonTouchable = styled.TouchableOpacity`
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 5px 8px;
  background-color: ${theme.colors.white};
  border-style: solid;
  border-width: 0.5px;
  border-color: ${theme.colors.midGray};
  border-radius: 5px;
`;

export const ButtonLabel = styled.Text`
  font-size: 12px;
  background: transparent;
  color: ${theme.colors.darkGray};
`;
