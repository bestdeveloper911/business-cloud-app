import React from 'react';
import {View} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles, SelectWrapper, Label } from './style';
const SelectWithLabel = ({
  label, options, onChange, defaultValue
}) => {
  const handleSelectChange = (index, value) => {
    onChange(value);
  };
  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <ModalDropdown
        options={options}
        defaultValue={defaultValue}
        showsVerticalScrollIndicator={false}
        style={styles.select}
        dropdownTextStyle={styles.dropdownText}
        dropdownTextHighlightStyle={styles.highlight}
        dropdownStyle={styles.dropdown}
        textStyle={styles.text}
        // renderSeparator={() => {}}
        adjustFrame={(positionStyle) => ({
          ...positionStyle,
          left: 21,
          height: 'auto',
          width: '92%',
          top: positionStyle.top - 50,
        })}
        onSelect={handleSelectChange}
      />
      <View style={styles.icon_wrapper}>
        <Icon name={'chevron-down'} size={20} color='#8d9bb0'/>
      </View>
    </SelectWrapper>
  );
};

export default SelectWithLabel;
