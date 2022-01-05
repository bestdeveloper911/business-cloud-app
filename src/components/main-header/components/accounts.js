// Dependencies
import React, { Fragment, useState } from 'react'
import Animated from 'react-native-reanimated'
import { Dimensions, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel'
import styled from 'styled-components/native'
import Pagination from '../../pagination'

// Constants
import {
  BALANCE_TOP,
  BALANCE_HEIGHT,
  ACTIONS_TOP,
  ACTIONS_HEIGHT,
  MIN_HEADER_HEIGHT,
  MAX_HEADER_HEIGHT,
  HEADER_DELTA,
  ANIMATION_OFFSET
} from '../constants'

// Prepare animated
const { interpolate, Extrapolate, cond, greaterOrEq } = Animated

// Get window dimensions
const { width } = Dimensions.get("window")

// Prepare carousel item width (20px "peak" area)
const itemWidth = width - 50

// Dummy data
const data = [
  {
    balance: '0',
    subtitle: '0 USD'
  },
  {
    balance: '0.5',
    subtitle: '4,683 USD'
  },
  {
    balance: '5,000'
  }
]

// Calculate animation start / end
const startFadeAnimation = MAX_HEADER_HEIGHT - ACTIONS_TOP - ACTIONS_HEIGHT - ANIMATION_OFFSET
const stopFadeAnimation = startFadeAnimation + ACTIONS_HEIGHT - ANIMATION_OFFSET
const startBalanceAnimation = MAX_HEADER_HEIGHT - BALANCE_TOP - BALANCE_HEIGHT - ANIMATION_OFFSET * 2

export const top = React.forwardRef(({ y }, ref) => {
  const [active, setActive] = useState(0)

  if (!!ref) {
    ref.current = { setActive }
  }

  return (
    <Fragment>
      <AnimatedAccountContainer
        pointerEvents="none"
        style={{ opacity: cond(greaterOrEq(y, startBalanceAnimation), 1, 0) }}
      >
        <Account
          style={{
            transform: [
              {
                scale: interpolate(y, {
                  inputRange: [0, startBalanceAnimation, HEADER_DELTA],
                  outputRange: [1, 1, .6],
                  extrapolate: Extrapolate.CLAMP
                }),
                translateY: interpolate(y, {
                  inputRange: [0, startBalanceAnimation, HEADER_DELTA],
                  outputRange: [0, 0, -124],
                  extrapolate: Extrapolate.CLAMP
                })
              }
            ]
          }}
        >
          <Balance>
            {active === 0 && <BalanceImage source={require('../../../assets/icon.png')} />}
            {active === 1 && <FontAwesome name="bitcoin" size={35} color="#fff" />}
            {active === 2 && <FontAwesome name="dollar" size={35} color="#fff" />}
            <BalanceText>{data[active].balance}</BalanceText>
          </Balance>
        </Account>
      </AnimatedAccountContainer>
      <PaginationContainer
        style={{
          opacity: interpolate(y, {
            inputRange: [0, startFadeAnimation, stopFadeAnimation],
            outputRange: [1, 1, 0],
            extrapolate: Extrapolate.CLAMP
          })
        }}
      >
        <Pagination length={data.length} active={active}/>
      </PaginationContainer>
    </Fragment>
  )
})

// Calculate text width
const calculateBalanceWidth = (balance, fontSize) => {
  // Set initial width
  let width = 0

  // Get parts
  const characters = balance.toString().replace(/[^a-zA-Z0-9]/g, '')
  const symbols = balance.toString().replace(/[^.,]/g, '')

  // Calculate widt
  width += characters.length * fontSize
  width += symbols.length * (fontSize * .5)

  // Return width
  return width
}

// Export component
export default ({ y, onChange }) => {
  // Layout index
  const [active, setActive] = useState(0)

  const onBeforeSnapToItem = index => {
    setActive(index)
    onChange(index)
  }

  // Render each carousel item
  const renderItem = ({item, index}) => {
    return (
      <Account
        style={{
          opacity: interpolate(y, {
            inputRange: [0, startFadeAnimation, stopFadeAnimation],
            outputRange: [1, 1, active == index ? 1 : 0],
            extrapolate: Extrapolate.CLAMP
          })
        }}
      >
      <AccountContent>
        <Balance>
          {index === 0 && <Image source={require('../../../assets/icon.png')} />}
          {index === 1 && <FontAwesome name="bitcoin" size={35} color="#fff" />}
          {index === 2 && <FontAwesome name="dollar" size={35} color="#fff" />}
          <BalanceText>{item.balance}</BalanceText>
        </Balance>
        <FiatValue
          style={{
            opacity: interpolate(y, {
              inputRange: [0, startFadeAnimation, stopFadeAnimation],
              outputRange: [1, 1, active == index ? 0 : 1],
              extrapolate: Extrapolate.CLAMP
            })
          }}
        >{item.subtitle}</FiatValue>
      </AccountContent>
      </Account>
    );
  }

  // Scroll interpolation
  const scrollInterpolator = (index, carouselProps) => {
    const outputRange = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(outputRange, index, carouselProps)
    return { inputRange, outputRange }
  }

  // Slide interpolation
  const slideInterpolator = (index, value) => {
    // Get value
    const { balance, subtitle } = data[index]

    // Calculate with
    const width = calculateBalanceWidth(balance, 25)

    // Calculate offsets
    const previousOffset = (itemWidth * .5) - (width * .5)
    const nextOffset = (-itemWidth * .5) + (width * .5)

    // Return style object
    return {
      opacity: value.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [.2, 1, .2],
        extrapolate: 'clamp'
      }),
      transform: [
        {
          translateX: value.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [previousOffset, 0, nextOffset],
            extrapolate: 'clamp'
          })
        }
      ]
    }
  }

  return (
    <Container
      style={{
        opacity: cond(greaterOrEq(y, startBalanceAnimation), 0, 1),
        transform: [
          {
            translateY: cond(greaterOrEq(y, startBalanceAnimation), -MAX_HEADER_HEIGHT, 0)
          }
        ]
      }}
    >
      <Carousel
        data={data}
        useScrollView={true}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={slideInterpolator}
        onBeforeSnapToItem={onBeforeSnapToItem}
        inactiveSlideScale={1}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
      />
    </Container>
  )
}

// Styles
const Container = styled(Animated.View)`
  position: absolute;
  top: ${BALANCE_TOP}px;
  width: 100%;
  height: ${BALANCE_HEIGHT}px;
`

const AnimatedAccountContainer = styled(Animated.View)`
  position: absolute;
  z-index: 1001;
  top: ${BALANCE_TOP}px;
  left: 25px;
  width: ${itemWidth};
  height: ${BALANCE_HEIGHT}px;
`

const Account = styled(Animated.View)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

const AccountContent = styled.View`
  justify-content: flex-start;
  align-items: center;
`

const Balance = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const BalanceText = styled.Text`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.medium};
  margin-left: ${props => props.theme.spacing * .5}px;
  font-size: 42px;
`

const FiatValue = styled(Animated.Text)`
  margin-top: 5px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
`

const PaginationContainer = styled(Animated.View)`
  position: absolute;
  z-index: 1001;
  top: ${MIN_HEADER_HEIGHT * .5 - 3}px;
  left: 0;
  width: 100%;
`;

const BalanceImage = styled(Image)`
  width: 30px;
  height: 26px;
  margin-top: 3px; 
`;
