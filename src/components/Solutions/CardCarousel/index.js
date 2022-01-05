// Dependecies
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import Carousel from 'react-native-snap-carousel'
import styled from 'styled-components/native'

import SolutionCard from "../SolutionCard";
import ProductCard from "../ProductCard";
import TemplateCard from "../TemplateCard";

// Prepare animated
const { interpolate, Extrapolate } = Animated

// Get window dimensions
const { width } = Dimensions.get("window")

// Prepare carousel item width (20px "peak" area)
const itemWidth = width - 100

// Export component
export default ({ data, mode }) => {
  // Handle active slide
  const [active, setActive] = useState(0)

  // Render each carousel item
  const renderItem = ({ item }) => {
    return (
      <RenderContent>
        {
          mode === "products" ? (
            <ProductCard data={item} />
          ) : mode === "services" ? (
            <SolutionCard data={item} />
          ) : (
            <TemplateCard data={item} />
          )
        }
      </RenderContent>

    );
  }

  return (
    <Container>
      <Carousel
        data={data}
        onBeforeSnapToItem={setActive}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        sliderWidth={width - 10}
        itemWidth={itemWidth}
        firstItem={1}
      />
    </Container>
  )
}

// Styles
const Container = styled(Animated.View)`
  width: 100%;
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding-top: 20px;
`;

const RenderContent = styled.View`
  padding: 5px 10px;
  flex: 1;
  height: 100%;
`;
