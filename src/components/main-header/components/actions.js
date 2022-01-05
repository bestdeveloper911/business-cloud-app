// Dependencies
import React from 'react'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import i18n from '../../../i18n';
// Components
import IconButton from '../../icon-button'

// Constants
import {
  ACTIONS_TOP,
  ACTIONS_HEIGHT,
  MAX_HEADER_HEIGHT,
  ANIMATION_OFFSET
} from '../constants'
import { StyleSheet } from 'react-native';

// Prepare animated
const { interpolate, Extrapolate } = Animated;

// Calculate animation start / end
const startAnimating = MAX_HEADER_HEIGHT - ACTIONS_TOP - ACTIONS_HEIGHT - ANIMATION_OFFSET
const stopAnimating = startAnimating + ACTIONS_HEIGHT - ANIMATION_OFFSET

// Export component
export default ({ y, navigation }) => {
  return (
    <Container
      style={{
        opacity: interpolate(y, {
          inputRange: [0, startAnimating, stopAnimating],
          outputRange: [1, 1, 0],
          extrapolate: Extrapolate.CLAMP
        }),
        transform: [
          {
            translateY: interpolate(y, {
              inputRange: [0, startAnimating, stopAnimating, stopAnimating + 1],
              outputRange: [0, 0, -ACTIONS_HEIGHT * .5, -MAX_HEADER_HEIGHT],
              extrapolate: Extrapolate.CLAMP
            })
          }
        ]
      }}
    >

      <IconButton
        onPress={() => navigation.navigate('EarnModal')}
        image={require('../../../assets/icons/earn-icon.png')}
        style={styles.icon_button_1}
        text={i18n.t('dashboard.earn')}
        primary
      />

      <IconButton
        onPress={() => navigation.navigate('Exchange')}
        image={require('../../../assets/icons/exchange-icon.png')}
        style={styles.icon_button_2}
        text={i18n.t('dashboard.exchange')}
        primary
      />

      <IconButton
        onPress={() => navigation.navigate('Topup')}
        image={require('../../../assets/icons/topup-icon.png')}
        style={styles.icon_button_1}
        text={i18n.t('dashboard.topup')}
        primary
      />
    </Container>
  )
}

// Styles
const Container = styled(Animated.View)`
  position: absolute;
  top: ${ACTIONS_TOP}px;
  width: 100%;
  height: ${ACTIONS_HEIGHT}px;
  flex-direction: row;
  justify-content: center;
`;

const styles = StyleSheet.create({
  icon_button_1: {
    width: 25,
    height: 25,
  },
  icon_button_2: {
    width: 30,
    height: 30
  },
});
