import styled from "styled-components/native";
import theme from "../../../theme";

export const MethodWrapper = styled.View`
  margin-bottom: 15px;
  padding: 15px 10px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${theme.colors.berlinBlue};
  border-width: 2px;
`;

export const Block = styled.View`
  min-width: 25px;
  max-width: 25px;
  margin-top: 5px;
  margin-right: 5px;
  height: 70%;
  borderRadius: 5px;
  background-color: ${theme.colors.berlinBlue};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled(Header)`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Value = styled(Header)`
  flex-direction: row;
  height: 28px;
`;
