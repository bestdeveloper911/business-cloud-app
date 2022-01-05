import styled from 'styled-components/native';

export const SelectWrapper = styled.View`
  min-width: 120px;
`;

export const Wrapper = styled.View`
  height: 30px;
  position: relative;
`;

export const Container = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  background-color: transparent;
  z-index: ${props => props.isOpen ? 999999999 : 0};
`;

export const SelectInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 5px;
  border-radius: 10px;
`;

export const Menus = styled.View`
  border-radius: 5px;
  background-color: white;
  padding: 10px 0;
  elevation: 2;
`;

export const Option = styled.View`
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: #4b648b;
`;