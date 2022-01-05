import React from "react";
import { Modal } from "react-native";
import TouchableOpacity from "../../components/touchable-opacity";

import { P } from "../typography";
import { ModalWrapper, ModalBody, DividerWrapper, Divider, ButtonWrapper } from "./styles";
import Button from '../../components/button';
import theme from "../../theme";

const CheckModal = ({ isOpen, handleClose, onDisAgree, onAgree }) => {
  return (
    <Modal
      transparent={true}
      visible={isOpen}
      animationType="slide"
      onRequestClose={() => handleClose(false)}
    >
      <ModalWrapper as={TouchableOpacity} onPress={() => handleClose(false)}>
        <ModalBody>
          <DividerWrapper>
            <Divider />
          </DividerWrapper>
          <P fontSize={18}>
            Do you wish to mark this task as completed?
          </P>
          <ButtonWrapper>
            <Button
              height={55}
              borderRadius={5}
              bgColor={theme.colors.gray}
              color={theme.colors.berlinBlue}
              width={110}
              marginRight={30}
              label="No"
              fontSize={16}
              onPress={onDisAgree}
            />
            <Button
              height={55}
              borderRadius={5}
              width={100}
              label="Yes"
              fontSize={16}
              onPress={onAgree}
            />
          </ButtonWrapper>
        </ModalBody>
      </ModalWrapper>
    </Modal>
  );
};

export default CheckModal
