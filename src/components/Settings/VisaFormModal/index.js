import React from "react";
import { View } from "react-native";
import {Content, CusModal, ButtonWrapper, Header, ModalContent, ModalWrapper, styles} from "./styles";
import {Box} from "../../common";
import {P} from "../../typography";
import TouchableOpacity from "../../touchable-opacity";
import Button from "../../button";
import {LabelWrapper, TextInput} from "../../../screens/home/Settings/styles";

const VisaFormModal = ({ isOpen, certification, close }) => {
  return (
    <CusModal visible={isOpen} transparent={true} animationType={'fade'}>
      <ModalWrapper>
        <ModalContent>
          <Header justifyContent='space-between' alignItems='center'>
            <Box>
              <P fontSize={20} lineHeight={32}>ADD PAYMENT METHOD</P>
            </Box>
          </Header>
          <Content direction='column'>
            <View style={styles.w_full}>
              <LabelWrapper
                name='Card Number'
                active={true}
                component={<TextInput active={true} editable={true} defaultValue=''/>}
              />
            </View>
            <Box justifyContent='space-between' style={styles.w_full}>
              <View style={styles.w_45}>
                <LabelWrapper
                  name='Expires On'
                  active={true}
                  component={<TextInput active={true} editable={true} defaultValue=''/>}
                />
              </View>
              <View style={styles.w_45}>
                <LabelWrapper
                  name='CVC/CVC2'
                  active={true}
                  component={<TextInput active={true} editable={true} defaultValue=''/>}
                />
              </View>
            </Box>
            <View style={styles.w_full}>
              <LabelWrapper
                name='Cardholder Name'
                active={true}
                component={<TextInput active={true} editable={true} defaultValue=''/>}
              />
            </View>

            <Box marginTop={20} marginBottom={15} direction="row">
              <ButtonWrapper marginRight={10}>
                <TouchableOpacity>
                  <Button
                    label={'Cancel'}
                    borderRadius={5}
                    fontSize={16}
                    onPress={close}
                    bgColor="#FAFAFA"
                    color="#686E70"
                  />
                </TouchableOpacity>
              </ButtonWrapper>
              <ButtonWrapper>
                <TouchableOpacity>
                  <Button
                    label={'Save'}
                    borderRadius={5}
                    fontSize={16}
                    onPress={close}
                  />
                </TouchableOpacity>
              </ButtonWrapper>
            </Box>
          </Content>
        </ModalContent>
      </ModalWrapper>
    </CusModal>
  )
};

export default VisaFormModal;

