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
import AddServiceDialog from "../../Modals/AddServiceDialog";
import i18n from '../../../i18n';

const SolutionCard = ({ data }) => {
  const {
    Service_Logo_url__c,
    Name,
    service_sub_text__c,
    color_code_hover__c,
    Category__c,
    Description__c,
    Cloudmeb_Price__c,
    CurrencyIsoCode,
    Frequency__c,
  } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header>
        <Image source={{uri: Service_Logo_url__c}} style={styles.header_img} />
        <View>
          <H3 style={styles.header_title}>{Name}</H3>
          <P style={styles.header_sub_title}>{service_sub_text__c}</P>
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
          <P style={styles.price} fontSize={17}>${Cloudmeb_Price__c} <P fontSize={10} color={'#bdc2c8'}>{CurrencyIsoCode}/{Frequency__c}</P></P>
        </View>
        <AddButton as={TouchableOpacity} onPress={() => setIsOpen(true)}>
          <Text style={styles.custom_text}>{i18n.t('dashboard.add').toUpperCase()}</Text>
        </AddButton>
      </Footer>
      {
        isOpen && (
          <AddServiceDialog
            item={data}
            onClose={() => setIsOpen(false)}
          />
        )
      }
    </Container>
  );
};

export default SolutionCard;
