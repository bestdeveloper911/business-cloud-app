import React, { useState } from "react";
import {View, Image, Text} from "react-native";

import {styles, Container, Header, Body, Footer, AddButton} from "./styles";
import {H3, P} from "../../typography";
import TouchableOpacity from "../../touchable-opacity";
import {colorLuminance} from "../../../utils";
import AddProductDialog from "../../Modals/AddProductDialog";
import i18n from '../../../i18n';

const SpecialSolutionCard = ({data}) => {
  const {
    Product_Logo_url__c,
    Name,
    Product_Sub_text__c,
    color_code_hover__c,
    Category__c,
    Description__c,
    Cloudmeb_Price__c,
    Retail_Price__c,
    CurrencyIsoCode,
    Frequency__c,
  } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header bgColor={color_code_hover__c}>
        <Image
          source={{uri: Product_Logo_url__c}}
          style={styles.header_img}
        />
        <View style={styles.header}>
          <H3 style={styles.header_title}>{Name}</H3>
          <P style={styles.header_sub_title}>{Product_Sub_text__c}</P>
        </View>
      </Header>
      <Body bgColor={colorLuminance(color_code_hover__c, -0.8)}>
        <P style={styles.property}>{Category__c}</P>
        <P style={styles.desc}>{Description__c}</P>
      </Body>
      <Footer bgColor={colorLuminance(color_code_hover__c, -0.8)}>
        <View>
          {
            Retail_Price__c &&
              <P style={styles.prev_price}>{ Retail_Price__c } {CurrencyIsoCode}/{Frequency__c}</P>
          }
          <P style={styles.price}>${Cloudmeb_Price__c} <P fontSize={10} color={'#81949c'}>{CurrencyIsoCode}/{Frequency__c}</P></P>
        </View>
        <AddButton as={TouchableOpacity} onPress={() => setIsOpen(true)}>
          <Text style={styles.custom_text}>{i18n.t('dashboard.add').toUpperCase()}</Text>
        </AddButton>
      </Footer>
      {isOpen && (
        <AddProductDialog
          item={data}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Container>
  )
};

export default SpecialSolutionCard;
