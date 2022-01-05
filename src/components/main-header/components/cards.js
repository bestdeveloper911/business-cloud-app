// Dependecies
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import Carousel from 'react-native-snap-carousel'
import styled from 'styled-components/native'
import Pagination from '../../pagination'

// Constants
import { MAX_HEADER_HEIGHT, CARDS_HEIGHT, CARDS_TOP } from '../constants'

// Prepare animated
const { interpolate, Extrapolate } = Animated

// Get window dimensions
const { width } = Dimensions.get("window")

// Prepare carousel item width (20px "peak" area)
const itemWidth = width - 40

// Calculate animation start / end
const startAnimating = 0
const stopAnimating = startAnimating + CARDS_HEIGHT

// Dummy data
const data = [
  {
    title: 'Oh boy. It’s lottery time! 🤑',
    text: 'Don’t miss the lottery! Create a staking vault and get tickets to the weekly lottery.'
  },
  {
    title: 'This is freaking awesome 😍',
    text: 'Lorem ipsum dolor sit amet, consectetur.'
  }
]

// Export component
export default ({ y }) => {
  // Handle active slide
  const [active, setActive] = useState(0)

  // Render each carousel item
  const renderItem = ({ item }) => {
    return (
      <Card>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.text}</CardText>
      </Card>
    );
  }

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
              outputRange: [0, 0, -CARDS_HEIGHT * .5, -MAX_HEADER_HEIGHT],
              extrapolate: Extrapolate.CLAMP
            })
          }
        ]
      }}
    >
      <Carousel
        data={data}
        onBeforeSnapToItem={setActive}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
      />
      <Pagination length={data.length} active={active}/>
    </Container>
  )
}

// Styles
const Container = styled(Animated.View)`

  width: 100%;
  height: ${CARDS_HEIGHT}px;
  padding-top: 15px;
  align-items: center;
`

const Card = styled.View`
  width: ${itemWidth}px;
  height: ${CARDS_HEIGHT - 30}px;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 5px;
  padding: 15px;
  justify-content: center;
`

const CardTitle = styled.Text`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 16px;
`

const CardText = styled.Text`
  margin-top: 5px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`
