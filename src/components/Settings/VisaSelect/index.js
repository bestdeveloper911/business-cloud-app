import React, {useState} from "react";
import {Container, SelectInput, SelectWrapper, Wrapper, Menus, Option} from "./styles";
import TouchableOpacity from "../../touchable-opacity";
import {Box} from "../../common";
import {P} from "../../typography";
import Icon from "react-native-vector-icons/FontAwesome";

const VisaSelect = ({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentOption = () => {
    if (!value) return value;

    const option = options.find(item => item.value === value);

    return option;
  };

  const curOption = getCurrentOption();

  return (
    <SelectWrapper>
      <Wrapper>
        <Container isOpen={isOpen}>
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <SelectInput>
              <Box marginRight={5}>
                <P fontSize={12} color='#AFAFAF'>{ curOption ? (curOption.value === 'primary' ? 'Primary' : '') : placeholder }</P>
              </Box>
              <Icon name={ isOpen ? 'chevron-up' : 'chevron-down' } size={10} color='#8d9bb0' />
            </SelectInput>
          </TouchableOpacity>
          {
            isOpen &&
            <Menus>
              {
                options.map(item =>
                  <TouchableOpacity
                    onPress={() => {
                      onChange(item.value);
                      setIsOpen(false);
                    }}
                    key={item.value}
                  >
                    <Option>
                      <P fontSize={12} color='#4b648b'>{item.label}</P>
                    </Option>
                  </TouchableOpacity>
                )
              }
            </Menus>
          }
        </Container>
      </Wrapper>
    </SelectWrapper>
  )
};

export default VisaSelect;