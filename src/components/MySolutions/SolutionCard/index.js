// Dependencies
import React from 'react'
import {Image, View} from 'react-native'
import {
  Container,
  Footer,
  ActionBtn,
  styles } from "./styles";
import i18n from '../../../i18n';
// Components
import { H3, Span, P } from "../../typography";
import TouchableOpacity from '../../touchable-opacity';
import {Box} from "../../common";
import Device from "../../../constants/Layout";

// Export component
export default  ({ data }) => {
  return (
    <Container>
      <View style={styles.custom_view}>
        <View style={styles.custom_view_1}>
          <Image style={styles.icon} source={{uri: data.icon}} />
          <H3 style={styles.name}>{data.name}</H3>
        </View>
        {
          data.status === 'Inactive' ?
            <></>
            :
            data.status === 'Active' ?
              <ActionBtn as={TouchableOpacity}>
                <Image style={styles.image_style} source={require('../../../assets/images/dashboard/cancel_icon.png')} />
              </ActionBtn>
              :
              <ActionBtn>
                <Image style={styles.image_style} source={require('../../../assets/images/dashboard/download_icon.png')} />
              </ActionBtn>
        }
      </View>
      <Footer smallDevice={Device.isSmallDevice}>
        <View>
          <Box marginBottom={8}>
            <P style={styles.footer_title}>{i18n.t('dashboard.payment').toUpperCase()}</P>
          </Box>
          <H3 style={styles.footer_value}>
            ${data.price} <P style={styles.color_p}>{data.currency} <Span style={styles.color_span}>/MO</Span></P>
          </H3>
        </View>
        {
          (data.status && data.status !== 'In Progress') &&
          <View>
            <Box marginBottom={8}>
              <P style={styles.footer_title}>{data.subscribed && i18n.t('dashboard.subscribed').toUpperCase() || data.ordered && i18n.t('dashboard.ordered').toUpperCase()}</P>
            </Box>
            <H3 style={styles.footer_value}>{data.subscribed || data.ordered}</H3>
          </View>
        }
        <View>
          {
            data.status &&
            <>
              <Box marginBottom={8}>
                <P style={styles.footer_title}>{i18n.t('dashboard.status').toUpperCase()}</P>
              </Box>
              <H3 style={styles.footer_value}>{data.status}</H3>
            </>
          }
        </View>
      </Footer>
    </Container>
  );
}
