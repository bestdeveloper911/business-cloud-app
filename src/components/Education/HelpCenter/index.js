// Dependencies
import React from 'react'
import * as Linking from 'expo-linking';
import { Wrapper, Item, Image, Content } from "./styles";
import TouchableOpacity from '../../touchable-opacity';
import Images from "../../../constants/Images";
import i18n from '../../../i18n';

export default  ({}) => {
  const productColors = {
    'receiptbank'   : '#EF6525',
    'fathom'        : '#4ABEA7',
    'approval'      : '#4C8A5C',
    'shopify'       : '#95BF46',
    'ringcentral'   : '#0073AE',
    'xero'          : '#14B5EA',
    'stripe'        : '#6772e5',
    'wagepoint'     : '#EF6525',
    'vend'          : '#41AF4C',
  };

  const data = [
    {
      name: i18n.t('dashboard.central'),
      icon: Images.Product_Xero,
      bgColor: '#f3fbfe',
      hoverColor: productColors['xero'],
      url: 'https://central.xero.com/s/topiccatalog'
    },
    {
      name: i18n.t('dashboard.receiptBank'),
      icon: Images.Product_ReceiptBank,
      bgColor: '#fef7f3',
      hoverColor: productColors['receiptbank'],
      url: 'https://help.receipt-bank.com/hc/en-us'
    },
    {
      name: i18n.t('dashboard.fathom'),
      icon: Images.Product_Fathom,
      bgColor: '#f5fbf6',
      hoverColor: productColors['fathom'],
      url: 'https://www.fathomhq.com/support'
    },
    {
      name: i18n.t('dashboard.vend'),
      icon: Images.Product_Vend,
      bgColor: '#f5fbf6',
      hoverColor: productColors['vend'],
      url: 'https://support.vendhq.com/hc/en-us'
    },
    {
      name: i18n.t('dashboard.approvalMax'),
      icon: Images.Product_Approval,
      bgColor: '#f6f9f7',
      hoverColor: productColors['approval'],
      url: 'https://support.approvalmax.com/portal/en-gb/kb/approvalmax-1'
    },
    {
      name: i18n.t('dashboard.shopify'),
      icon: Images.Product_Approval,
      bgColor: '#f9fcf6',
      hoverColor: productColors['shopify'],
      url: 'https://help.shopify.com/en'
    }
  ];

  return (
    <Wrapper>
      {
        data.map((item, index) => (
          <Item
            as={TouchableOpacity}
            key={index}
            bgColor={item.bgColor}
            onPress={() => {
              const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
              if (isMobile) {
                Linking.openURL(item.url);
              } else {
                window.open(item.url, "_blank");
              }
            }}
          >
            <Image source={item.icon}/>
            <Content>{item.name}</Content>
          </Item>
        ))
      }
    </Wrapper>
  );
}
