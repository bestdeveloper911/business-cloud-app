import React, { useState } from 'react';
import { BoxContainer, Text } from "../../components";
import styled from "styled-components/native/dist/styled-components.native.esm";
import theme from "../../../../theme";
import { SvgTriangleDownIcon } from "../../../SvgIcon";

const DropDownSelector = (props) => {
  const {
    marginTop,
    label,
    placeholder,
    values,
    operator,
    selectedValue,
    zIndex,
    icon,
    onValueChange = () => {},
    ...rest
  } = props;

  const [selectedItem, setSelectedItem] = useState(0);
  const [focus, setFocus] = useState(false);
  const onFocus = () => {
    setFocus(!focus);
  };

  const onItemSelect = (value) => {
    setSelectedItem(value);
    setFocus(false);
    onValueChange(value);
  };

  const itemValues = [
    icon ? { name: 'Select', icon: '' } : 'Select',
    ...values,
  ].filter((val, index) => index !== selectedItem);

  return (
    <DropDownWrapper
      marginTop={marginTop}
      direction='column'
      display='flex'
      {...rest}
    >
      <DropDownContentWrapper zIndex={props.zIndex} count={itemValues.length + 1}>
        {label && (<Text lineHeight={label.length > 20 ? 35 : 25}>{label}</Text>)}
        <DropDownPickerWrapper  onPress={() => onFocus()}>
          {operator && (
            <Text
              top={10}
              paddingTop={10}
              marginRight={10}
              fontSize={30}
              color='#000'
              fontWeight='bold'
              lineHeight={15}
            >
              {operator}
            </Text>
          )}
          {icon && (
            <Image source={values[selectedItem].icon} />
          )}
          <DropDownPickerSelectedItem>
            {icon ? values[selectedItem].name : values[selectedItem]}
          </DropDownPickerSelectedItem>
          <DownIcon />
        </DropDownPickerWrapper>
      {focus && (
          <BoxContainer marginTop={10} paddingRight={0} paddingLeft={0} borderRadius={15} zIndex={10000} overflow='hidden'>
            {itemValues.map((value, index) => (
              <DropDownPickerItemWrapper key={icon ? value.name : value} onPress={() => onItemSelect(index)}>
                {icon && (
                  <Image source={value.icon} />
                )}
                <DropDownPickerItem>{icon ? value.name : value}</DropDownPickerItem>
            </DropDownPickerItemWrapper>
          ))}
          </BoxContainer>
      )}
      </DropDownContentWrapper>
    </DropDownWrapper>
  );
};

export default DropDownSelector;

const DropDownWrapper = styled.KeyboardAvoidingView`
  position: relative;
  z-index: ${props => props.zIndex ?  props.zIndex : 1};
  width: ${props => props.width ? props.width : 100}%;
  height: 120px;
  ${props => props.height && `height: ${props.height}px;`}

  ${props => props.display && `display: ${props.display};`}
  ${props => props.direction && `flex-direction: ${props.direction};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}

  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;

  padding-left: ${props => props.paddingLeft ? props.paddingLeft : 0}px;
  padding-right: ${props => props.paddingRight ? props.paddingRight : 0}px;

  align-self: center;
  ${props => props.bgColor && `background-color: ${props.bgColor}`};

  flex: 1;
`;

const DropDownContentWrapper = styled.KeyboardAvoidingView`
  width: 100%;
  position: absolute;
  z-index: ${props => props.zIndex ?  props.zIndex * 1000 : -1};
  max-height: ${props => props.count * 50}px;
`;

const DropDownPickerWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: ${theme.colors.gray3};
  border-radius: 15px;
  z-index: -1;
`;

const DropDownPickerItemWrapper = styled.TouchableOpacity`
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.superLightgray};
  position: relative;
  z-index: 10000;
`;

const DropDownPickerItem = styled.Text`
  font-size: 24px;
  background-color: transparent;
  color: ${theme.colors.black};
`;

const DropDownPickerSelectedItem = styled(DropDownPickerItem)`
  position: relative;
`;

const DownIcon = styled(SvgTriangleDownIcon)`
  position: absolute;
  top: 22px;
  right: 10px;
  z-index: 1000;
`;

const Image = styled.Image`
  width: 20px;
  margin-right: 10px;
  resizeMode: contain;
`;
