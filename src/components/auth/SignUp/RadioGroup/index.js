import React, { useEffect, useState } from 'react';
import { BoxContainer, Text } from "../../components";
import styled from "styled-components/native/dist/styled-components.native.esm";
import RadioButton from "./RadioButton";

const RadioGroup = (props) => {
  const {
    marginTop,
    label,
    placeholder,
    values,
    selectedValue,
    onCheckValue,
    checked,
    ...rest
  } = props;

  const [selectedItem, setSelectedItem] = useState('');
  useEffect(() => {
    setSelectedItem(values[0]);
  }, []);


  return (
    <BoxContainer
      marginTop={marginTop}
      paddingRight={0}
      paddingleft={0}
      direction="column"
      {...rest}
    >
      {label && (<Text>{label}</Text>)}
      <RadioGroupWrapper>
        {values.map((value) => (
          <RadioButton
            key={value}
            active={value === checked}
            select={() => onCheckValue(value)}
            label={value}
          />
        ))}
      </RadioGroupWrapper>
    </BoxContainer>
  );
};

export default RadioGroup;

export const RadioGroupWrapper = styled.View`
  margin-top: 15px;
  width: 120%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 100;
`;
