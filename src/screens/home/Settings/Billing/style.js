import styled from 'styled-components/native';
import theme from '../../../../theme';

export const AddButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const AddTextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8be6fe;
  border-radius: 5px;
  width: 130px;
  height: 100px;
`;

export const AddText = styled.Text`
  font-size: 30px;
  color: ${theme.colors.berlinBlue};
`;

export const Row = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${theme.colors.darkGray};
`;

export const Value = styled.Text`
  font-size: 20px;
`;

export const InvoiceSection = styled.View`
  display: flex;
  flex-direction: row;
`;
