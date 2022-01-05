import React, { useState } from "react";
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, ImageIcon, Menus, Option, SelectInput, SelectWrapper, Wrapper, styles} from "./styles";
import TouchableOpacity from "../../../touchable-opacity";
import {P} from "../../../typography";
import {Text} from "../../components";
import {SvgTriangleDownIcon} from "../../../SvgIcon";
import {Box} from "../../../common";

const Select = (props) => {
  const { options, label, placeholder, zIndex, value, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const getCurrentOption = () => {
    if (!value) return value;

    const option = options.find(item => item.value === value);

    return option;
  };

  const curOption = getCurrentOption();

  return (
    <SelectWrapper>
      {
        label ? <Text>{label}</Text> : <></>
      }
      <Wrapper>
        <Container isOpen={isOpen} zIndex={zIndex}>
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <SelectInput>
              <Box>
                {
                  (curOption && curOption.icon) ? <Icon source={curOption.icon} /> : <></>
                }
                <P fontSize={20}>{ curOption ? curOption.label : placeholder }</P>
              </Box>
              <SvgTriangleDownIcon />
            </SelectInput>
            <View style={styles.icon_wrapper}>
              <Icon name={'chevron-down'} size={20} color='#8d9bb0'/>
            </View>
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
                      {
                        item.icon && <ImageIcon source={item.icon} />
                      }
                      <P fontSize={20}>{item.label}</P>
                    </Option>
                  </TouchableOpacity>
                )
              }
            </Menus>
          }
        </Container>
      </Wrapper>
    </SelectWrapper>
  );
};

export default Select;
