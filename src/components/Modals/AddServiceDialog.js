import React, { useEffect } from 'react';
import {Image} from "react-native";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import {PaymentsStripe as Stripe} from "expo-payments-stripe";
import i18n from '../../i18n';
import {
  ButtonWrapper,
  CusModal,
  Desc,
  ModalContent,
  ModalWrapper,
  styles,
} from "../Solutions/ProductCard/styles";
import {Box} from "../common";
import {H3, P} from "../typography";
import TouchableOpacity from "../touchable-opacity";
import Button from "../button";
import {STORE_KEYS} from "../../stores";

function AddServiceDialog({
  item, onClose, last4, createSubscriptionService, createCustomer,
}) {
  const data =
    {
      id: 1,
      icon: item ? item.Service_Logo_url__c : '',
      name: item ? item.Name : '',
      type: '',
      desc: item ? item.Description__c : '',
      price: item ? item.Cloudmeb_Price__c : '',
      currency: item ? item.CurrencyIsoCode : '',
      frequency: item ? item.Billing_Frequency__c : '',
      video: item ? item.Video_Link__c : '',
    };
  const paymentIssue = last4 === '';
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLock, setIsLock] = React.useState(false);

  useEffect(() => {
    Stripe.setOptionsAsync({
      publishableKey: 'pk_test_aAXrMRtz0cRGLFHkojViSoIE',
      androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
    });
  }, []);

  const handleClickPayBtn = async () => {
    onClose();
    if (!isLock) {
      setIsLock(true);
      if (paymentIssue) {
        const token = await Stripe.paymentRequestWithCardFormAsync();
        await createCustomer(token?.tokenId, token?.card?.last4, token?.card?.brand, token?.card?.expMonth, token?.card?.expYear);
      }
      createSubscriptionService(item.id);
    }
  };

  const handleClosePopup = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <CusModal transparent={true} animationType={'fade'}>
      <ModalWrapper>
        <ModalContent>
          <Box paddingLeft={10} paddingRight={10} direction="column">
            <P>{i18n.t('dashboard.subscribeService').toUpperCase()}</P>
            <Box alignItems="center" marginTop={15} marginBottom={15} style={styles.flex_wrap}>
              <Image source={{uri: data.icon}} style={styles.header_img} />
              <H3 style={styles.header_title}>{data.name}</H3>
              <P style={styles.header_modal_sub_title} lineHeight={24} fontSize={16}>{data.note}</P>
            </Box>
            <Box direction="column">
              <Desc>
                <P>{data.desc}</P>
              </Desc>
            </Box>
            <Box alignItems="center" marginTop={10}>
              <Box marginRight={10}>
                <P style={styles.price} fontSize={30} lineHeight={40}>${data.price}</P>
              </Box>
              <P fontSize={16} color={'#bdc2c8'}>{data.currency} {data.unit} /{data.frequency}</P>
            </Box>
            <Box marginTop={20} marginBottom={15} direction="row">
              <ButtonWrapper marginRight={10}>
                <TouchableOpacity>
                  <Button
                    label={i18n.t('dashboard.cancel')}
                    borderRadius={5}
                    fontSize={14}
                    onPress={handleClosePopup}
                    bgColor="#FAFAFA"
                    color="#686E70"
                  />
                </TouchableOpacity>
              </ButtonWrapper>
              <ButtonWrapper>
                <TouchableOpacity>
                  <Button
                    label={i18n.t('dashboard.payNow')}
                    borderRadius={5}
                    fontSize={14}
                    onPress={handleClickPayBtn}
                  />
                </TouchableOpacity>
              </ButtonWrapper>
            </Box>
          </Box>
        </ModalContent>
      </ModalWrapper>
    </CusModal>
  );
}
export default compose(
  inject(STORE_KEYS.SALESFORCESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.SALESFORCESTORE]: {
         createCustomer,
         last4,
         createSubscriptionService,
       },
     }) => ({
      createCustomer,
      last4,
      createSubscriptionService,
    })
  )
)(AddServiceDialog);
