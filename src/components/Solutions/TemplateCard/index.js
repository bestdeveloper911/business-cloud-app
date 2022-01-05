import React, { useState } from "react";
import { Image, Text, View } from "react-native";

import { H3, P } from "../../typography";
import {
  Body,
  Container,
  Desc,
  Footer,
  Header,
  styles,
} from "./styles";
import { AddButton } from "../SpecialSolutionCard/styles";
import TouchableOpacity from "../../touchable-opacity";
import AddTemplateDialog from "../../Modals/AddTemplateDialog";
import AddProductDialog from "../../Modals/AddProductDialog";
import i18n from '../../../i18n';

const TemplateCard = ({ data }) => {
  const {
    Template_Logo__c,
    color_code_hover__c,
    Template_Title__c,
    template_sub_text__c,
    Category__c,
    Description__c,
    Price__c,
    CurrencyIsoCode,
  } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header>
        <Image source={{uri: Template_Logo__c}} style={styles.header_img} />
        <View>
          <H3 style={styles.header_title}>{Template_Title__c}</H3>
          <P style={styles.header_sub_title}>{template_sub_text__c}</P>
        </View>
      </Header>
      <Body>
        <P style={styles.property}>{Category__c}</P>
        <Desc>
          <P>{Description__c}</P>
        </Desc>
      </Body>
      <Footer>
        <View>
          <P style={styles.price} fontSize={17}>${Price__c} <P fontSize={10} color={'#bdc2c8'}>{CurrencyIsoCode}</P></P>
        </View>
        <AddButton as={TouchableOpacity} onPress={() => setIsOpen(true)}>
          <Text style={styles.custom_text}>{i18n.t('dashboard.add').toUpperCase()}</Text>
        </AddButton>
      </Footer>
      {isOpen && (
        <AddTemplateDialog
          item={data}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Container>
  );
};

export default TemplateCard;
